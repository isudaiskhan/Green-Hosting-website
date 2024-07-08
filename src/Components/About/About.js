import React,{useState,useEffect} from 'react'
import image1 from '../Assets/about.png'
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaUsersCog } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import {motion} from 'framer-motion';




const About = () => {
    const [experience, setExperience] = useState({
        years: 0,
        clients: 0,
        projects: 0,
      });
    
      useEffect(() => {
        const durations = {
          years: 20, // 1 second
          clients: 10, // 2 seconds
          projects: 15, // 3 seconds
        };
    
        const resetExperience = () => {
          setExperience({
            years: 0,
            clients: 0,
            projects: 0,
          });
        };
    
        const intervals = Object.keys(experience).map(property => {
          return setInterval(() => {
            setExperience(prevExperience => ({
              ...prevExperience,
              [property]: Math.min(prevExperience[property] + 1, property === 'years' ? 200 : property === 'clients' ? 400 : 250),
            }));
          }, durations[property]);
        });
    
        // Add event listener for visibility change
        document.addEventListener('visibilitychange', resetExperience);
    
        // Cleanup: remove event listener and clear intervals
        return () => {
          document.removeEventListener('visibilitychange', resetExperience);
          intervals.forEach(interval => clearInterval(interval));
        };
      }, []);
  return (
    <>


      
<div className="relative w-full overflow-hidden flex flex-col items-center justify-end">  


<div className='relative w-full py-28 px-4'>
  <div className='max-w-[1240px] mx-auto flex flex-col lg:flex-row sm:px-8 px-6'>
    {/* First Div */}
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
     className='lg:md:w-7/12 w-full md:mt-8'>
      <h1 className='md:text-5xl text-[#1D2833] sm:text-4xl text-3xl ps-1 lg:px-2 md:ps-20 font-bold tracking-wide py-2'>Welcome to GreenHost</h1>
      <p className='text-lg text-gray-600 sm:pe-10 lg:px-2 md:ps-20 ps-1 mt-5'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo magna dolore erat amet .</p>

      <section className='mt-10'>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

         {/* Box 1 - Completed Projects */}
         <div className="bg-gray-100 p-5 rounded-lg shadow-md text-center transform transition duration-500 hover:scale-105 hover:opacity-80">
         <FaUsersCog  className='mx-auto text-5xl text-[#7EBC12]' />
            <h2 className="text-4xl text-[#1D2833] font-bold mt-5">{experience.projects}</h2>
            <h2 className="text-xl text-gray-600 font-semibold mt-5">Experts</h2>
          </div>

           {/* Box 2 - Happy Clients */}
           <div className="bg-gray-100 p-5 rounded-lg shadow-md text-center transform transition duration-500 hover:scale-105 hover:opacity-80">
           <HiMiniUserGroup className='mx-auto text-5xl text-[#7EBC12]' />
            <h2 className="text-4xl text-[#1D2833] font-bold mt-5">{experience.clients}</h2>
            <h2 className="text-xl text-gray-600 font-semibold mt-5">Clients</h2>
          </div>

         
          
        {/* Box 3 - Completed Projects */}

          <div className="bg-gray-100 p-5 rounded-lg shadow-md text-center transform transition duration-500 hover:scale-105 hover:opacity-80">
          <FaCheck className='mx-auto text-5xl text-[#7EBC12]' />
            <h2 className="text-4xl text-[#1D2833] font-bold mt-5">{experience.projects}</h2>
            <h2 className="text-xl text-gray-600 font-semibold mt-5">Projects</h2>
          </div>


        </div>
      </div>
    </section>

    </motion.div>

   
    {/* Image Div */}
    <motion.div
  initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
  whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
  transition={{ delay: 0.2, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
     className='lg:ml-auto sm:mx-auto lg:mt-6 mt-12'>
    <img src={image1} className='lg:w-[440px]' />
    </motion.div>
  </div>
</div>
</div>
      


      
    </>
  )
}

export default About