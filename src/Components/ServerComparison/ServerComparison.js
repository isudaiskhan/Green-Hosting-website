import React,{useState, useEffect} from 'react'
import {motion} from 'framer-motion';
import { FaShieldAlt, FaServer } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaHeadset } from "react-icons/fa6";



const ServerComparison = () => {
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

   <div className='max-w-[1240px] mx-auto sm:px-8 px-6 overflow-hidden'>

  {/* Top Content */}
  <motion.div
     initial={{ y: 100, opacity: 0 }} // Initial position: below its final position and hidden
      whileInView={{ y: 0, opacity: 1 }} // Move to original position (y: 0) and become fully visible when in view
      transition={{ 
    delay: 0.4, 
    y: { type: "spring", stiffness: 60 }, // Spring animation for y-axis movement
    opacity: { duration: 0.2 }, // Smooth opacity transition
    ease: "easeIn", // Easing function
    duration: 1 // Overall animation duration
  }}
   className="text-center mb-5 mt-32 py-5 lg:w-7/12 w-full mx-auto">
    <h1 className="text-[#1D2833] sm:text-5xl text-3xl font-bold mb-5">Shared VS Dedicated Server</h1>
    <p className="text-gray-500 text-lg">Vero justo sed sed vero clita amet. Et justo vero sea diam elitr amet ipsum eos ipsum clita duo sed. Sed vero sea diam erat vero elitr sit clita.</p>
  </motion.div>


  <div className='w-full py-10 sm:py-20 md:py-28'>
  <div className='flex flex-col lg:flex-row-reverse'>

    {/* Box 1 and 2 (Left Column for LG, Top Row for SM) */}
    <div className='w-full lg:w-1/2 mx-auto space-y-5 mb-4 md:mb-0'>
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
     className='lg:ps-14 lg:pe-14 sm:ps-16 sm:pe-16 ps-2 pe-2 pb-5'>
        <h1 className='text-3xl font-bold text-[#1D2833]'>Dedicated Server</h1>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 sm:ps-12 sm:pe-12 lg:gap-4 gap-8">
        {/* Box 1 */}
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
          className="p-4 rounded-lg space-y-4">
          <div className="relative">
            <FaServer className='text-[#FF0F10] text-5xl' />
          </div>
          <h1 className="text-2xl text-[#1D2833] font-bold mt-6">99.99% Uptime</h1>
          <p className='mt-2 text-gray-500'>Ipsum dolor diam stet stet kasd diam sea stet sed rebum dolor ipsum .</p>
        </motion.div>

        {/* Box 2 */}
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
          className="p-4 rounded-lg space-y-4">
          <div className="relative">
            <FaShieldAlt className='text-[#FF0F10] text-5xl' />
          </div>
          <h1 className="text-2xl text-[#1D2833] font-bold mt-6">100% Secured</h1>
          <p className='mt-2 text-gray-500 '>Ipsum dolor diam stet stet kasd diam sea stet sed rebum dolor ipsum .</p>
        </motion.div>


         {/* Box 3 */}
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
          className="p-4 rounded-lg space-y-4">
          <div className="relative">
            <IoSettingsSharp className='text-[#FF0F10] text-5xl' />
          </div>
          <h1 className="text-2xl text-[#1D2833] font-bold mt-6">Control Panel</h1>
          <p className='mt-2 text-gray-500 '>Ipsum dolor diam stet stet kasd diam sea stet sed rebum dolor ipsum .</p>
        </motion.div>



         {/* Box 4 */}
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
          className="p-4 rounded-lg space-y-4">
          <div className="relative">
            <FaHeadset className='text-[#FF0F10] text-5xl' />
          </div>
          <h1 className="text-2xl text-[#1D2833] font-bold mt-6">24/7 Support</h1>
          <p className='mt-2 text-gray-500 '>Ipsum dolor diam stet stet kasd diam sea stet sed rebum dolor ipsum .</p>
        </motion.div>

      </div>
    </div>




    {/* Box 3 and 4 (Right Column for LG, Bottom Row for SM) */}
    <div className='w-full lg:w-1/2 mx-auto space-y-5 lg:mt-0 mt-12 lg:border-r border-r-gray-300'>
    <motion.div
    initial={initialGreen}// Initial position: off-screen to the left, hidden, starting from a greater distance
    whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
    transition={{ 
    delay: 0.2, 
    x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
    opacity: { duration: 1 }, // Smooth opacity transition
    ease: "easeIn", // Easing function
    duration: 1 // Overall animation duration
  }}
     className='lg:ps-14 lg:pe-14 sm:ps-16 sm:pe-16 ps-2 pe-2 pb-5'>
        <h1 className='text-3xl font-bold text-[#1D2833]'>Shared Server</h1>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 sm:ps-12 sm:pe-12 lg:gap-4 gap-8">
      
        {/* Box 1 */}
        <motion.div
    initial={initialGreen}// Initial position: off-screen to the left, hidden, starting from a greater distance
    whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
    transition={{ 
    delay: 0.2, 
    x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
    opacity: { duration: 1 }, // Smooth opacity transition
    ease: "easeIn", // Easing function
    duration: 1 // Overall animation duration
  }}
          className="p-4 rounded-lg space-y-4">
          <div className="relative">
            <FaServer className='text-[#7EBC12] text-5xl' />
          </div>
          <h1 className="text-2xl text-[#1D2833] font-bold mt-6">99.99% Uptime</h1>
          <p className='mt-2 text-gray-500'>Ipsum dolor diam stet stet kasd diam sea stet sed rebum dolor ipsum .</p>
        </motion.div>


         {/* Box 2 */}
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
          className="p-4 rounded-lg space-y-4">
          <div className="relative">
            <FaShieldAlt className='text-[#7EBC12] text-5xl' />
          </div>
          <h1 className="text-2xl text-[#1D2833] font-bold mt-6">100% Secured</h1>
          <p className='mt-2 text-gray-500'>Ipsum dolor diam stet stet kasd diam sea stet sed rebum dolor ipsum .</p>
        </motion.div>


            {/* Box 3 */}
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
          className="p-4 rounded-lg space-y-4">
          <div className="relative">
            <IoSettingsSharp className='text-[#7EBC12] text-5xl' />
          </div>
          <h1 className="text-2xl text-[#1D2833] font-bold mt-6">Control Panel</h1>
          <p className='mt-2 text-gray-500'>Ipsum dolor diam stet stet kasd diam sea stet sed rebum dolor ipsum .</p>
        </motion.div>


        {/* Box 4 */}
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
          className="p-4 rounded-lg space-y-4">
          <div className="relative">
            <FaHeadset className='text-[#7EBC12] text-5xl' />
          </div>
          <h1 className="text-2xl text-[#1D2833] font-bold mt-6">24/7 Support</h1>
          <p className='mt-2 text-gray-500'>Ipsum dolor diam stet stet kasd diam sea stet sed rebum dolor ipsum .</p>
        </motion.div>
      </div>
    </div>

  </div>
</div>
</div>

      
    </>
  )
}

export default ServerComparison
