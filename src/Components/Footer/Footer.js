import React,{useState, useEffect} from 'react'
import {FaFacebookF, FaInstagram, FaSearch } from 'react-icons/fa';
import {AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import footerimage from '../Assets/bg-bottom-footer.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import bgimage1 from '../Assets/bg-line.png'
import bgimage2 from '../Assets/bg-round-2.png'
import bgimage3 from '../Assets/bg-round.png'
import bgimage4 from '../Assets/bg-dot.png'
import {motion} from 'framer-motion';





const Footer = () => {

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array ensures that effect runs only once after mount

  const initialXLeft = windowSize.width >= 640 ? -200 : -100; // Initial X position for left animation
  const initialXRight = windowSize.width >= 640 ? 200 : 100; // Initial X position for right animation

  const initialGreen = {
    x: initialXLeft, // Set initial position for green element
    opacity: 0
  };

  const initialRed = {
    x: initialXRight, // Set initial position for red element
    opacity: 0
  };

  return (
    <>

  <div
        className='bg-no-repeat bg-[#7EBC12]'
        style={{ backgroundImage: `url(${footerimage})` }}>


<div
        className='bg-no-repeat bg-right-bottom'
        style={{ backgroundImage: `url(${bgimage2})` }}>


<div
        className='bg-no-repeat bg-bottom'
        style={{ backgroundImage: `url(${bgimage1})` }}>

<div
        className='bg-no-repeat bg-top'
        style={{ backgroundImage: `url(${bgimage4})` }}>



<div
        className='bg-no-repeat bg-left '
        style={{ backgroundImage: `url(${bgimage3})` }}>




<div className='md:px-0 px-5'>


  
  
  
      <div className='max-w-[1240px] mx-auto mt-16 px-3 text-gray-300 overflow-hidden'>
      
  <motion.div
     initial={{ y: 80, opacity: 0 }} // Initial position: below its final position and hidden
      whileInView={{ y: 0, opacity: 1 }} // Move to original position (y: 0) and become fully visible when in view
      transition={{ 
    delay: 0.4, 
    y: { type: "spring", stiffness: 60 }, // Spring animation for y-axis movement
    opacity: { duration: 0.2 }, // Smooth opacity transition
    ease: "easeIn", // Easing function
    duration: 1 // Overall animation duration
  }}
   className="md:flex lg:flex mx-auto max-w-[1240px]">
  <div className="lg:w-2/5 md:w-8/12 lg:ms-3 md:ms-20 mt-28 md:pt-0 pt-28">

  <div className='text-white'>
    <h1 className='text-2xl font-bold'>Subscribe Our Newsletter</h1>
</div>

  {/* Search Input */}
  <div className="w-full flex justify-center items-center mt-6">
                      <div className="rounded-lg shadow-md w-full relative">
                        <input
                          type="text"
                          placeholder="Enter Your Email"
                          className="py-4 rounded-md border caret-black text-black focus:outline-none w-full pl-5 pr-12 placeholder:text-gray-500"
                        />
                        <button className="absolute top-0 right-0 p-4 border bg-[#7EBC12] rounded-e-md">
                          <FaSearch className="text-white text-2xl" />
                        </button>
                      </div>
                   
                    </div>

      </div>
  
     
  </motion.div>
    <div className='flex flex-wrap justify-center gap-6'>

    
   
  
      <div className='w-full lg:w-1/6 md:w-2/5'>
      <motion.div
    initial={initialGreen} // Initial position: off-screen to the left, hidden, starting from a greater distance
    whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
    transition={{ 
    delay: 0.2, 
    x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
    opacity: { duration: 1 }, // Smooth opacity transition
    ease: "easeIn", // Easing function
    duration: 1 // Overall animation duration
  }}
  className='space-y-3 mt-16'>
          <h6 className='text-[#FFFFFF] text-xl font-bold ps-2'>About Us</h6>
          <ul>
  <a href='#' className='flex items-center group'>
    <MdKeyboardArrowRight className='mr-1 text-xl text-white' />
    <li className='py-2 text-white group-hover:tracking-widest duration-500'>About Us</li>
  </a>
  <a href='#' className='flex items-center group'>
    <MdKeyboardArrowRight className='mr-1 text-xl text-white' />
    <li className='py-2 text-white group-hover:tracking-widest duration-500'>Contact Us</li>
  </a>
  <a href='#' className='flex items-center group'>
    <MdKeyboardArrowRight className='mr-1 text-xl text-white' />
    <li className='py-2 text-white group-hover:tracking-widest duration-500'>Privacy Policy</li>
  </a>
  <a href='#' className='flex items-center group'>
    <MdKeyboardArrowRight className='mr-1 text-xl text-white' />
    <li className='py-2 text-white group-hover:tracking-widest duration-500'>Terms & Condition</li>
  </a>

  <a href='#' className='flex items-center group'>
    <MdKeyboardArrowRight className='mr-1 text-xl text-white' />
    <li className='py-2 text-white group-hover:tracking-widest duration-500'>Support</li>
  </a>
</ul>

        </motion.div>
      </div>
  
      <div className='w-full lg:w-1/6 md:w-2/5'>
      <motion.div
    initial={initialGreen} // Initial position: off-screen to the left, hidden, starting from a greater distance
    whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
    transition={{ 
    delay: 0.2, 
    x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
    opacity: { duration: 1 }, // Smooth opacity transition
    ease: "easeIn", // Easing function
    duration: 1 // Overall animation duration
  }}
       className='space-y-3 mt-16'>
      <h6 className='text-[#FFFFFF] text-xl font-bold ps-2'>Our Services</h6>
          <ul>
  <a href='#' className='flex items-center group'>
    <MdKeyboardArrowRight className='mr-1 text-xl text-white' />
    <li className='py-2 text-white group-hover:tracking-widest duration-500'>Domain Register</li>
  </a>
  <a href='#' className='flex items-center group'>
    <MdKeyboardArrowRight className='mr-1 text-xl text-white' />
    <li className='py-2 text-white group-hover:tracking-widest duration-500'>Shared Hosting</li>
  </a>
  <a href='#' className='flex items-center group'>
    <MdKeyboardArrowRight className='mr-1 text-xl text-white' />
    <li className='py-2 text-white group-hover:tracking-widest duration-500'>VPS Hosting</li>
  </a>
  <a href='#' className='flex items-center group'>
    <MdKeyboardArrowRight className='mr-1 text-xl text-white' />
    <li className='py-2 text-white group-hover:tracking-widest duration-500'>Dedicated Hosting</li>
  </a>

  <a href='#' className='flex items-center group'>
    <MdKeyboardArrowRight className='mr-1 text-xl text-white' />
    <li className='py-2 text-white group-hover:tracking-widest duration-500'>Reseller Hosting</li>
  </a>
</ul>
        </motion.div>
      </div>
  
      <div className='w-full lg:w-1/4 md:w-2/5'>
      <motion.div
    initial={initialRed} // Initial position: off-screen to the left, hidden, starting from a greater distance
    whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
    transition={{ 
    delay: 0.2, 
    x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
    opacity: { duration: 1 }, // Smooth opacity transition
    ease: "easeIn", // Easing function
    duration: 1 // Overall animation duration
  }}
         className='space-y-3 mt-16'>
        <h6 className='text-[#FFFFFF] text-xl font-bold ps-2'>Get In Touch</h6>
          <div className="mt-20 text-white py-4 space-y-3">
        <div className="flex items-center space-x-2 text-white">
          <FiMapPin className='ml-2' />
          <span >123 Street, New York, USA</span>
        </div>
        <div className="flex items-center space-x-2 text-white">
          <FiPhone className='ml-2' />
          <span>+012 345 67890</span>
        </div>
        <div className="flex items-center space-x-2 text-white">
          <FiMail className='ml-2' />
          <span>example@gmail.com</span>
        </div>
      </div>
      </motion.div>
        
        <div className="flex items-center justify-start">
      <div className='md:flex items-center py-6 text-center'>
      <motion.div
    initial={initialRed} // Initial position: off-screen to the left, hidden, starting from a greater distance
    whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
    transition={{ 
    delay: 0.2, 
    x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
    opacity: { duration: 1 }, // Smooth opacity transition
    ease: "easeIn", // Easing function
    duration: 1 // Overall animation duration
  }}
               className='flex justify-end text-white space-x-3 flex-wrap ps-1'>
                  <a href='#' className='px-2 py-2 group rounded-full border-2 duration-300 border-white hover:bg-white'>
                      <FaFacebookF className='group-hover:text-[#7EBC12] text-white text-xl' />
                  </a>
                  <a href='#' className='px-2 py-2 group rounded-full border-2 duration-300 border-white hover:bg-white'>
                      <AiOutlineTwitter className='group-hover:text-[#7EBC12] text-white text-xl' />
                  </a>
  
                  <a href='#' className='px-2 py-2 group rounded-full border-2 duration-300 border-white hover:bg-white'>
                      <FaInstagram className='group-hover:text-[#7EBC12] text-white text-xl' />
                  </a>
  
                  <a href='#' className='px-2 py-2 group rounded-full border-2 duration-300 border-white hover:bg-white'>
                      <AiFillLinkedin className='group-hover:text-[#7EBC12] text-white text-xl' />
                  </a>
              </motion.div>
          </div>
      </div>

      

      </div>
      <div className='w-full lg:w-1/3 md:w-2/5 lg:px-3 overflow-hidden'>
      <motion.div
     initial={{ y: 80, opacity: 0 }} // Initial position: below its final position and hidden
      whileInView={{ y: 0, opacity: 1 }} // Move to original position (y: 0) and become fully visible when in view
      transition={{ 
    delay: 0.4, 
    y: { type: "spring", stiffness: 60 }, // Spring animation for y-axis movement
    opacity: { duration: 0.2 }, // Smooth opacity transition
    ease: "easeIn", // Easing function
    duration: 1 // Overall animation duration
  }}
       className="md:mx-auto max-w-md">
  <form className="bg-gray-100 shadow-md rounded-md px-8 pt-6 pb-8 mb-4 lg:mt-0 mt-10">
    <div className="mb-4">
     
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="name"
        type="text"
        placeholder="Your Name"
      />
    </div>
    <div className="mb-4">
    
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="email"
        placeholder="Your Email"
      />
    </div>
    <div className="mb-6">
      
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="message"
        placeholder="Your Message"
      ></textarea>
    </div>
    <div className="flex items-center justify-between">
      <button
        className="bg-[#7EBC12] text-lg text-white hover:bg-[#8cd214] w-full font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Send Message
      </button>
    </div>
  </form>
</motion.div>

      </div>
    </div> 
  </div>
  
  
  
  
          <div className='tracking-wider py-5 text-start mx-auto max-w-[1240px] mt-8 lg:px-8 px-0 overflow-hidden'>
          <div className="flex flex-col lg:flex-row lg:space-y-0 space-y-5">
          <motion.div
    initial={initialGreen} // Initial position: off-screen to the left, hidden, starting from a greater distance
    whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
    transition={{ 
    delay: 0.2, 
    x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
    opacity: { duration: 1 }, // Smooth opacity transition
    ease: "easeIn", // Easing function
    duration: 1 // Overall animation duration
  }}
               className="lg:w-7/12 lg:text-start text-center">
              <h1 className='text-white'>Copyright © 2024 All rights reserved | Developed by Sudais Khan .</h1>
              </motion.div>
              <motion.div
    initial={initialRed} // Initial position: off-screen to the left, hidden, starting from a greater distance
    whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
    transition={{ 
    delay: 0.2, 
    x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
    opacity: { duration: 1 }, // Smooth opacity transition
    ease: "easeIn", // Easing function
    duration: 1 // Overall animation duration
  }}
               className="lg:w-5/12 flex flex-wrap lg:justify-end justify-center space-x-5">
        <a href='#' className='border-r pe-5 text-white'>Home</a>
        <a href='#' className='border-r pe-5 text-white'>Cookies</a>
        <a href='#' className='border-r pe-5 text-white'>Help</a>
        <a href='#' className='text-white'>FQAs</a>
         </motion.div>
          </div>


     </div>

  
     </div>
  
      </div>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default Footer