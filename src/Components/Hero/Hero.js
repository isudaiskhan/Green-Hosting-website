import React,{useState, useEffect} from 'react'
import heroimage from '../Assets/hero.png'
import bgbottomimage from '../Assets/bg-bottom-hero.png'
import bgimage2 from '../Assets/bg-line.png'
import bgimage3 from '../Assets/bg-round-2.png'
import bgimage4 from '../Assets/bg-round.png'
import bgimage1 from '../Assets/bg-square.png'
import {motion} from 'framer-motion';



const Hero = () => {

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


<div className="relative w-full bg-[#7EBC12] overflow-hidden">  


<div
        className='bg-no-repeat bg-center'
        style={{ backgroundImage: `url(${bgimage2})` }}>


<div
        className='bg-no-repeat bg-top'
        style={{ backgroundImage: `url(${bgimage1})` }}>

<div
        className='bg-no-repeat bg-left'
        style={{ backgroundImage: `url(${bgimage4})` }}>



<div
        className='bg-no-repeat bg-right-top '
        style={{ backgroundImage: `url(${bgimage3})` }}>





<div className='flex flex-col items-center justify-end overflow-hidden'>

<div className='relative w-full py-16 px-4'>
  <div className='max-w-[1240px] sm:px-8 px-4 mx-auto flex flex-col lg:flex-row'>
    {/* First Div */}
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

     className='lg:w-1/2 w-full md:mt-8'>
      <h1 className='md:text-6xl text-white sm:text-5xl text-4xl lg:text-start md:text-center font-bold tracking-wide py-2'>Shared Hosting</h1>
      <p className='text-lg text-white lg:pe-10 mt-5 lg:text-start md:text-center'>Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd.</p>
<div className='flex lg:justify-start flex-wrap md:justify-center space-x-3 mt-4'>
  <p className='text-white text-lg'>Starting:</p>
  <h1 className='text-5xl text-white font-bold'>$2.49</h1>
  <p className='text-white mt-5 text-lg'>/ Mo</p>
</div>
<div className='flex lg:justify-start md:justify-center'>
      <button className="bg-[#FF0F10] shadow-2xl shadow-[#FF0F10] hover:shadow-none text-lg tracking-wider text-white mt-10 py-4 px-4 rounded-lg sm:w-1/2 md:w-2/5">
        Get Started Now
      </button>
      </div>
    </motion.div>

   
    {/* Image Div */}
    <motion.div
  initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
  whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
  transition={{ delay: 0.2, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
     className='md:mx-auto lg:mt-0 mt-24'>
    <img src={heroimage} className='' />
    </motion.div>
  </div>
</div>
    <img src={bgbottomimage} className='' />

</div>
    
  </div>


</div>
</div>
 </div>
</div>

    </>
  )
}

export default Hero