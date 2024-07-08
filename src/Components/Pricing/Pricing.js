import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { FaServer, FaShareAlt  } from 'react-icons/fa';
import { IoMdSettings } from "react-icons/io";
import {motion} from 'framer-motion';




const Pricing = () => {
  return (
    <>
    
    <div className='max-w-[1240px] mt-16 mx-auto sm:px-8 px-6 overflow-hidden'>

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
   className="text-center mb-12 lg:w-1/2 w-full mx-auto">
    <h1 className="text-[#1D2833] sm:text-5xl text-4xl font-bold mb-5">Our Hosting Plans</h1>
    <p className="text-gray-500 text-lg">Vero justo sed sed vero clita amet. Et justo vero sea diam elitr amet ipsum eos ipsum clita duo sed. Sed vero sea diam erat vero elitr sit clita.</p>
  </motion.div>


  <div className="grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-6 sm:gap-8 gap-16 py-6">
  {/* Card 1 */}
  <motion.div
     initial={{ y: 150, opacity: 0 }} // Initial position: below its final position and hidden
      whileInView={{ y: 0, opacity: 1 }} // Move to original position (y: 0) and become fully visible when in view
      transition={{ 
    delay: 0.4, 
    y: { type: "spring", stiffness: 60 }, // Spring animation for y-axis movement
    opacity: { duration: 0.2 }, // Smooth opacity transition
    ease: "easeIn", // Easing function
    duration: 1 // Overall animation duration
  }}
   className="bg-white border-t-[6px] border-t-[#7EBC12] rounded-lg shadow-lg hover:shadow-[#7EBC12] shadow-gray-400 p-6 relative">
  <div className="absolute top-0 left-1/2 p-3 bg-[#7EBC12] rounded-full transform -translate-x-1/2 -translate-y-1/2">
    <FaShareAlt className="text-white text-xl" />
  </div>
  <h1 className="text-3xl font-bold mt-8 text-[#1D2833] text-center">Share Hosting</h1>
  <p className='text-center text-gray-500 text-lg py-5 border-b'>Eirmod erat dolor amet est clita lorem erat justo rebum elitr eos</p>
  <p className="text-lg font-medium mt-4 text-[#7EBC12] text-center">Latest Offer - <span className='text-lg font-bold'>Save 30%</span></p>
  <p className="text-4xl font-bold mt-2 text-center"><span className='text-2xl'>$ </span>2.49 <span className='text-2xl text-[#1D2833]'>/</span> <span className='text-lg text-[#1D2833]'>Month</span></p>
  <div className='flex justify-center border-b py-7'>
  <button className="bg-[#7EBC12] text-white hover:bg-[#8cd214] duration-300 font-semibold text-lg py-2 px-8 rounded-md">Buy Now</button>
  </div>
  <ul className="mt-1">
    <li className="flex items-center border-b py-4">
      <FaCheck className='text-xl text-[#7EBC12]' />
      <span className='ms-4 text-gray-600 text-lg'>100 GB Disk Space</span>
    </li>
    <li className="flex items-center border-b py-4">
      <FaCheck className='text-xl text-[#7EBC12]' />
      <span className='ms-4 text-gray-600 text-lg'>Unlimited Bandwidth</span>
    </li>
    <li className="flex items-center border-b py-4">
      <FaCheck className='text-xl text-[#7EBC12]' />
      <span className='ms-4 text-gray-600 text-lg'>Upgrade to Positive SSL</span>
    </li>
    <li className="flex items-center border-b py-4">
      <FaCheck className='text-xl text-[#7EBC12]' />
      <span className='ms-4 text-gray-600 text-lg'>Automatic Malware Removal</span>
    </li>
    <li className="flex items-center py-4">
      <FaCheck className='text-xl text-[#7EBC12]' />
      <span className='ms-4 text-gray-600 text-lg'>30 Days Money Back Guarantee</span>
    </li>
  </ul>
</motion.div>






  {/* Card 2 */}
  <motion.div
     initial={{ y: 250, opacity: 0 }} // Initial position: below its final position and hidden
      whileInView={{ y: 0, opacity: 1 }} // Move to original position (y: 0) and become fully visible when in view
      transition={{ 
    delay: 0.4, 
    y: { type: "spring", stiffness: 60 }, // Spring animation for y-axis movement
    opacity: { duration: 0.2 }, // Smooth opacity transition
    ease: "easeIn", // Easing function
    duration: 1 // Overall animation duration
  }}
   className="bg-white border-t-[6px] border-t-[#FF0F10] rounded-lg shadow-lg hover:shadow-[#FF0F10] shadow-gray-400 p-6 relative">
  <div className="absolute top-0 left-1/2 p-3 bg-[#FF0F10] rounded-full transform -translate-x-1/2 -translate-y-1/2">
    <FaServer className="text-white text-xl" />
  </div>
  <h1 className="text-3xl font-bold mt-8 text-[#1D2833] text-center">VPS Hosting</h1>
  <p className='text-center text-gray-500 text-lg py-5 border-b'>Eirmod erat dolor amet est clita lorem erat justo rebum elitr eos</p>
  <p className="text-lg font-medium mt-4 text-[#7EBC12] text-center">Latest Offer - <span className='text-lg font-bold'>Save 30%</span></p>
  <p className="text-4xl font-bold mt-2 text-center"><span className='text-2xl'>$ </span>5.49 <span className='text-2xl text-[#1D2833]'>/</span> <span className='text-lg text-[#1D2833]'>Month</span></p>
  <div className='flex justify-center border-b py-7'>
  <button className="bg-[#FF0F10] text-white hover:bg-[#e60000] duration-300 font-semibold text-lg py-2 px-8 rounded-md">Buy Now</button>
  </div>
  <ul className="mt-1">
    <li className="flex items-center border-b py-4">
      <FaCheck className='text-xl text-[#7EBC12]' />
      <span className='ms-4 text-gray-600 text-lg'>100 GB Disk Space</span>
    </li>
    <li className="flex items-center border-b py-4">
      <FaCheck className='text-xl text-[#7EBC12]' />
      <span className='ms-4 text-gray-600 text-lg'>Unlimited Bandwidth</span>
    </li>
    <li className="flex items-center border-b py-4">
      <FaCheck className='text-xl text-[#7EBC12]' />
      <span className='ms-4 text-gray-600 text-lg'>Upgrade to Positive SSL</span>
    </li>
    <li className="flex items-center border-b py-4">
      <FaCheck className='text-xl text-[#7EBC12]' />
      <span className='ms-4 text-gray-600 text-lg'>Automatic Malware Removal</span>
    </li>
    <li className="flex items-center py-4">
      <FaCheck className='text-xl text-[#7EBC12]' />
      <span className='ms-4 text-gray-600 text-lg'>30 Days Money Back Guarantee</span>
    </li>
  </ul>
</motion.div>





  {/* Card 3 */}
  <motion.div
     initial={{ y: 350, opacity: 0 }} // Initial position: below its final position and hidden
      whileInView={{ y: 0, opacity: 1 }} // Move to original position (y: 0) and become fully visible when in view
      transition={{ 
    delay: 0.4, 
    y: { type: "spring", stiffness: 60 }, // Spring animation for y-axis movement
    opacity: { duration: 0.2 }, // Smooth opacity transition
    ease: "easeIn", // Easing function
    duration: 1 // Overall animation duration
  }}
  className="bg-white border-t-[6px] border-t-[#7EBC12] rounded-lg shadow-lg hover:shadow-[#7EBC12] shadow-gray-400 p-6 relative">
  <div className="absolute top-0 left-1/2 p-3 bg-[#7EBC12] rounded-full transform -translate-x-1/2 -translate-y-1/2">
    <IoMdSettings className="text-white text-xl" />
  </div>
  <h1 className="text-3xl font-bold mt-8 text-[#1D2833] text-center">Dedi Hosting</h1>
  <p className='text-center text-gray-500 text-lg py-5 border-b'>Eirmod erat dolor amet est clita lorem erat justo rebum elitr eos</p>
  <p className="text-lg font-medium mt-4 text-[#7EBC12] text-center">Latest Offer - <span className='text-lg font-bold'>Save 30%</span></p>
  <p className="text-4xl font-bold mt-2 text-center"><span className='text-2xl'>$ </span>11.49 <span className='text-2xl text-[#1D2833]'>/</span> <span className='text-lg text-[#1D2833]'>Month</span></p>
  <div className='flex justify-center border-b py-7'>
  <button className="bg-[#7EBC12] text-white hover:bg-[#8cd214] duration-300 font-semibold text-lg py-2 px-8 rounded-md">Buy Now</button>
  </div>
  <ul className="mt-1">
    <li className="flex items-center border-b py-4">
      <FaCheck className='text-xl text-[#7EBC12]' />
      <span className='ms-4 text-gray-600 text-lg'>100 GB Disk Space</span>
    </li>
    <li className="flex items-center border-b py-4">
      <FaCheck className='text-xl text-[#7EBC12]' />
      <span className='ms-4 text-gray-600 text-lg'>Unlimited Bandwidth</span>
    </li>
    <li className="flex items-center border-b py-4">
      <FaCheck className='text-xl text-[#7EBC12]' />
      <span className='ms-4 text-gray-600 text-lg'>Upgrade to Positive SSL</span>
    </li>
    <li className="flex items-center border-b py-4">
      <FaCheck className='text-xl text-[#7EBC12]' />
      <span className='ms-4 text-gray-600 text-lg'>Automatic Malware Removal</span>
    </li>
    <li className="flex items-center py-4">
      <FaCheck className='text-xl text-[#7EBC12]' />
      <span className='ms-4 text-gray-600 text-lg'>30 Days Money Back Guarantee</span>
    </li>
  </ul>
</motion.div>
 
</div>
</div>

      
    </>
  )
}

export default Pricing