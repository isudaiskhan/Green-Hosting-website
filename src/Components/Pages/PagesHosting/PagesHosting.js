import React,{useState, useEffect} from 'react'
import bgbottomimage from '../../Assets/bg-bottom-hero.png'
import bgimage2 from '../../Assets/bg-line.png'
import bgimage3 from '../../Assets/bg-round-2.png'
import bgimage4 from '../../Assets/bg-round.png'
import bgimage1 from '../../Assets/bg-square.png'
import {motion} from 'framer-motion';
import { RxSlash } from "react-icons/rx";
import Navbar from '../../Navbar/Navbar'
import Pricing from '../../Pricing/Pricing'
import ServerComparison from '../../ServerComparison/ServerComparison'
import Footer from '../../Footer/Footer'
import ScrollButton from '../../ScrollButton/ScrollButton'



const PagesHosting = () => {

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

  const initialX = windowSize.width >= 640 ? -300 : -170;



  return (
    <>

    <Navbar />

<div className="relative overflow-hidden">
      <div className="relative h-96 flex justify-center items-center overflow-hidden">
      <div className="absolute inset-0 h-96 bg-no-repeat bg-cover bg-center bg-[#7EBC12] " style={{ backgroundImage: `url(${bgbottomimage})` }}>

      <motion.div
        initial={{ x: initialX, opacity: 0 }} // Initial position: off-screen to the left, hidden, starting from a greater distance
        whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
        transition={{ 
        delay: 0.2, 
        x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
        opacity: { duration: 1 }, // Smooth opacity transition
        ease: "easeIn", // Easing function
        duration: 1 // Overall animation duration
      }}
           className="flex flex-col max-w-[1240px] mx-auto pt-2 sm:px-16 px-5 h-full">
             <h1 className="sm:text-6xl text-4xl font-bold ps-5 text-white mt-28">Hosting Plans</h1>
             <div className="flex flex-wrap ps-5 items-center mt-6">
             <h2 className="text-white mr-4">Home</h2>
             <RxSlash className="text-white mr-4" />

             <h2 className="text-white mr-4">Pages</h2>
             <RxSlash className="text-white mr-4" />

            
               <h2 className="text-white mr-4">Hosting</h2>

                  </div>
                  </motion.div>
                </div>
             </div>
            </div>


                    
            <div
                    className='bg-no-repeat absolute inset-0 bg-center'
                    style={{ backgroundImage: `url(${bgimage2})` }}>

            <div
                    className='bg-no-repeat absolute inset-0 bg-right-top'
                    style={{ backgroundImage: `url(${bgimage3})` }}>


            <div
                    className='bg-no-repeat absolute inset-0 bg-top mt-20'
                    style={{ backgroundImage: `url(${bgimage1})` }}>

            <div
                    className='bg-no-repeat absolute inset-0 bg-left-top'
                    style={{ backgroundImage: `url(${bgimage4})` }}>

        </div>
        </div>
        </div>
        </div>

        <Pricing />
        <ServerComparison />
        <Footer />
        <ScrollButton />

      
    </>
  )
}

export default PagesHosting
