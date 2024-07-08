import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaSearch, FaTimes, FaServer } from 'react-icons/fa';



const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('HOME');
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenu(false);
    window.scrollTo(0, 0);

    const pagesaboutPaths = ['/pagesabout'];
    const pagesdomainPaths = ['/pagesdomain'];
    const pageshostingPaths = ['/pageshosting'];
    const pagesPaths = ['/ourteam', '/testimonials', '/comparison'];
    const contactPaths = ['/contact'];

    if (pagesaboutPaths.some(path => location.pathname.includes(path))) {
      setActiveMenuItem('ABOUT');
    } else if (pagesdomainPaths.some(path => location.pathname.includes(path))) {
      setActiveMenuItem('DOMAIN');
    } else if (pageshostingPaths.some(path => location.pathname.includes(path))) {
      setActiveMenuItem('HOSTING');
    } else if (pagesPaths.some(path => location.pathname.includes(path))) {
      setActiveMenuItem('PAGES');
    } else if (contactPaths.some(path => location.pathname.includes(path))) {
      setActiveMenuItem('CONTACT');
    } else {
      setActiveMenuItem('HOME');
    }
  }, [location]);

  const navItems = [
    { id: 'home', label: 'HOME', link: '/' },
    { id: 'pagesabout', label: 'ABOUT', link: '/pagesabout' },
    { id: 'pagesdomain', label: 'DOMAIN', link: '/pagesdomain' },
    { id: 'pageshosting', label: 'HOSTING', link: '/pageshosting' },
    {
      id: 'pages',
      label: 'PAGES',
      submenu: [
        { label: 'OUR TEAM', link: '/ourteam' },
        { label: 'TESTIMONIALS', link: '/testimonials' },
        { label: 'COMPARISON', link: '/comparison' },
      ]
    },
    { id: 'contact', label: 'CONTACT', link: '/contact' }
  ];


  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  const toggleSubmenu = (id) => {
    setOpenSubmenu(openSubmenu === id ? null : id);
  };

  return (
    <>
      <nav className={`sticky top-0 w-full bg-[#7EBC12] z-50 transition duration-300 ${hasScrolled ? 'top-0 shadow-xl bg-[#7EBC12]' : ''}`}>
        <div className="relative max-w-[1240px] mx-auto sm:ps-9 sm:pe-9 ps-5 pe-5 xl:ps-0 xl:pe-0">
          <div className="lg:py-5 py-6 mx-auto flex items-center justify-between lg:justify-start">
            <div>
            <div className='flex flex-wrap items-center space-x-4 cursor-pointer'>
               <FaServer className='text-4xl text-white' />
                <h1 className='sm:text-4xl sm:tracking-wide text-3xl font-bold text-white'>GreenHost</h1>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-5 ml-auto">
              <ul className="flex items-center">
                {navItems.map((item) => (
                  <li key={item.id} className="p-3 mx-1 duration-500 border-transparent relative group cursor-pointer">
                    <NavLink
                      to={item.link}
                      onClick={() => setMobileMenu(false)}
                      className={`text-white duration-300 group group-hover:text-[#e60000] ${activeMenuItem === item.label ? 'text-[#FF0F10]' : ''}`}
                      activeclassname="text-[#e60000] underline"
                      style={{ color: activeMenuItem === item.label ? '#e60000' : '' }} // Apply color based on activeMenuItem
                    >
                      {item.label}
                      {item.id === 'pages' && <MdOutlineKeyboardArrowDown className="inline text-xl mb-1 group-hover:text-[#FF0F10] duration-500 group-hover:rotate-180 ml-1" />}
                    </NavLink>
                    {item.submenu && (
                      <ul className="absolute top-full left-0 hidden group-hover:block shadow-lg w-60 z-10">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.label} className="border-b border-b-[#FF0F10] bg-white hover:border-transparent hover:bg-[#7EBC12]">
                            <NavLink
                              to={subItem.link}
                              className="block w-full p-4 px-7 font-semibold text-[#FF0F10] hover:text-white transition-colors duration-300"
                              activeclassname="text-[#FEA116]"
                            >
                              {subItem.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <div className="flex items-center space-x-8">
                <div className="relative">
                  <button onClick={toggleSearch} className="">
                    <FaSearch className="text-[#FF0F10] text-xl mt-1" />
                  </button>
                  {isSearchOpen && (
                    <motion.div
                    initial={{ x: 200, opacity: 0 }} // Initial position: off-screen to the left, hidden, starting from a greater distance
                    whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
                    transition={{ 
                    delay: 0.2, 
                    x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
                    opacity: { duration: 1 }, // Smooth opacity transition
                    ease: "easeIn", // Easing function
                    duration: 1 // Overall animation duration
                  }}
                     className="fixed inset-0 bg-gray-200 bg-opacity-90 z-50 flex justify-center items-center">
                      <div className="bg-white rounded-lg shadow-md w-2/3 relative">
                        <input
                          type="text"
                          placeholder="Search"
                          className="py-4 rounded-md w-full pl-5 pr-12 focus:outline-none focus:ring-2 focus:ring-[#7EBC12]"
                        />
                        <button onClick={toggleSearch} className="absolute top-0 right-0 p-4 bg-gray-300 rounded-md">
                          <FaSearch className="text-gray-500 text-2xl" />
                        </button>
                      </div>
                      <button onClick={toggleSearch} className="absolute top-4 right-3 mt-2 mr-2">
                        <FaTimes className="text-gray-600 text-2xl" />
                      </button>
                    </motion.div>
                  )}
                </div>
                <div className="w-full">
                  <NavLink to='#'>
                  <button className="bg-[#FF0F10] shadow-md shadow-[#FF0F10] hover:shadow-none text-lg tracking-wider text-white py-2 px-8 rounded-md">
                    Register
                  </button>
                  </NavLink>
                </div>
               
              </div>
            </div>
            <div className="block lg:hidden">
              <button onClick={toggleMobileMenu}>
                {mobileMenu ? (
                  <IoMdMenu className="text-4xl text-white" />
                ) : (
                  <IoMdMenu className="text-4xl text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {mobileMenu && (
        <div className="fixed inset-0 z-50 min-h-screen bg-black bg-opacity-70">
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 60, duration: 1 }}
            className="absolute right-0 min-h-screen sm:w-3/5 w-full py-4 px-8 shadow md:w-1/3 bg-[#7EBC12] z-50"
          >
            <button className="absolute top-0 right-0 mt-4 mr-4" onClick={closeMobileMenu}>
              <AiOutlineClose className="text-4xl text-white" />
            </button>
            <ul className="mt-8 flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.id} className="relative p-3 select-none group cursor-pointer">
                  {!item.submenu ? (
                    <NavLink
                      to={item.link}
                      onClick={() => setMobileMenu(false)}
                      className={`text-white duration-300 font-semibold hover:text-[#FF0F10] ${activeMenuItem === item.label ? 'text-[#FF0F10]' : ''}`}
                      activeclassname="text-[#FF0F10] underline"
                      style={{ color: activeMenuItem === item.label ? '#FF0F10' : '' }} // Apply color based on activeMenuItem
                    >
                      {item.label}
                    </NavLink>
                  ) : (
                    <div
                      onClick={() => toggleSubmenu(item.id)}
                      className={`text-white duration-300 font-semibold hover:text-[#FF0F10] ${activeMenuItem === item.label ? 'text-[#FF0F10]' : ''}`}
                      style={{ color: activeMenuItem === item.label ? '#FF0F10' : '' }} // Apply color based on activeMenuItem
                    >
                      {item.label}
                      <MdOutlineKeyboardArrowDown
                        className={`inline text-2xl duration-300 ml-1 transform ${openSubmenu === item.id ? 'rotate-180' : 'rotate-0'}`}
                      />
                      {openSubmenu === item.id && (
                        <ul className="pt-2">
                          {item.submenu.map((subItem) => (
                            <li key={subItem.label} className="border-b-[#FF0F10] border-b hover:border-b-transparent bg-white shadow-lg hover:bg-[#7EBC12]">
                              <NavLink
                                to={subItem.link}
                                onClick={() => setMobileMenu(false)}
                                className="block w-full px-7 tracking-wider text-[#FF0F10] text-sm p-4 hover:text-white transition-colors duration-300"
                                activeclassname="text-[#FF0F10]"
                              >
                                {subItem.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
                     
            <div className="flex flex-wrap space-y-3 items-center">
              <div className="relative mx-4 overflow-hidden">
                <button onClick={toggleSearch} className="mt-5">
                  <FaSearch className="text-[#FF0F10] text-x" />
                </button>
                {isSearchOpen && (
                  <motion.div
                    initial={{ x: 200, opacity: 0 }} // Initial position: off-screen to the left, hidden, starting from a greater distance
                    whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
                    transition={{ 
                    delay: 0.2, 
                    x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
                    opacity: { duration: 1 }, // Smooth opacity transition
                    ease: "easeIn", // Easing function
                    duration: 1 // Overall animation duration
                  }}
                   className="fixed inset-0 bg-gray-200 bg-opacity-90 z-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-md w-2/3 relative">
                      <input
                        type="text"
                        placeholder="Search"
                        className="py-4 rounded-md w-full pl-5 pr-12 focus:outline-none focus:ring-2 focus:ring-[#FF0F10]"
                      />
                      <button onClick={toggleSearch} className="absolute top-0 right-0 p-4 bg-gray-300 rounded-md">
                        <FaSearch className="text-gray-500 text-2xl" />
                      </button>
                    </div>
                    <button onClick={toggleSearch} className="absolute top-4 right-3 mt-2 mr-2">
                      <FaTimes className="text-gray-600 text-2xl" />
                    </button>
                  </motion.div>
                )}
              </div>
             
              <div className="w-full mx-4">
                  <div>
                  <button className="bg-[#FF0F10] shadow-md shadow-[#FF0F10] hover:shadow-none text-lg tracking-wider text-white sm:w-40 w-full py-2 rounded-md">
                    Register
                  </button>
                  </div>
                </div>
            </div>

          </motion.div>
        </div>
      )}
      
    </>
  );
};

export default Navbar;