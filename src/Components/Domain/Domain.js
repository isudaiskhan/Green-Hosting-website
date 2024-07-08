import React from 'react'
import bgimage from '../Assets/bg-domain.png'
import { FaSearch} from 'react-icons/fa';
import {motion} from 'framer-motion';



const Domain = () => {  
  return (
    <>

<div
        className='bg-no-repeat bg-center'
        style={{ backgroundImage: `url(${bgimage})` }}>

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
 className="relative w-full max-w-5xl sm:ps-8 sm:pe-8 mt-36 ps-6 pe-6 mx-auto overflow-hidden flex flex-col items-center justify-center">
  {/* Top Content */}
  <div className="text-center mb-12 w-full md:w-3/4">
    <h1 className="text-[#1D2833] sm:text-5xl text-4xl font-bold mb-5">Search Your Domain</h1>
    <p className="text-gray-500 text-lg">Vero justo sed sed vero clita amet. Et justo vero sea diam elitr amet ipsum eos ipsum clita duo sed. Sed vero sea diam erat vero elitr sit clita.</p>
  </div>

  {/* Search Input */}
  <div className="w-full flex justify-center items-center">
                      <div className="rounded-lg shadow-md w-full relative">
                        <input
                          type="text"
                          placeholder="Enter Your Domain Name"
                          className="py-4 rounded-md border focus:outline-none bg-transparent w-full pl-5 pr-12 placeholder:text-gray-500 focus:ring-2 focus:ring-[#7EBC12]"
                        />
                        <button className="absolute top-0 right-0 p-4 border bg-[#7EBC12] rounded-e-md">
                          <FaSearch className="text-white text-2xl" />
                        </button>
                      </div>
                   
                    </div>

  {/* Domain Prices */}
  <div className="flex flex-wrap justify-center w-full mt-1 space-x-6">

  <div className="text-center p-5">
      <h2 className="text-xl font-bold text-[#7EBC12]">.com</h2>
      <p className='text-gray-500 text-lg mt-1'>$9.99/year</p>
    </div>
    <div className="text-center p-5">
      <h2 className="text-xl font-bold text-[#7EBC12]">.net</h2>
      <p className='text-gray-500 text-lg mt-1'>$9.99/year</p>
    </div>
    <div className="text-center p-5">
      <h2 className="text-xl font-bold text-[#7EBC12]">.org</h2>
      <p className='text-gray-500 text-lg mt-1'>$9.99/year</p>
    </div>
    <div className="text-center p-5">
      <h2 className="text-xl font-bold text-[#7EBC12]">.us</h2>
      <p className='text-gray-500 text-lg mt-1'>$9.99/year</p>
    </div>
    <div className="text-center p-5">
      <h2 className="text-xl font-bold text-[#7EBC12]">.eu</h2>
      <p className='text-gray-500 text-lg mt-1'>$9.99/year</p>
    </div>
    <div className="text-center p-5">
      <h2 className="text-xl font-bold text-[#7EBC12]">.co.uk</h2>
      <p className='text-gray-500 text-lg mt-1'>$9.99/year</p>
    </div>
   
  </div>
</motion.div>
</div>


      
    </>
  )
}

export default Domain
