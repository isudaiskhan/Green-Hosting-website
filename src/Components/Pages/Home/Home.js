import React from 'react'
import About from "../../About/About";
import Domain from "../../Domain/Domain";
import Footer from "../../Footer/Footer";
import Hero from "../../Hero/Hero";
import Pricing from "../../Pricing/Pricing";
import ServerComparison from "../../ServerComparison/ServerComparison";
import Team from "../../Team/Team";
import Testimonial from "../../Testimonial/Testimonial";
import Layout from '../../Layout/Layout';
import ScrollButton from '../../ScrollButton/ScrollButton';



const Home = () => {
  return (
    <>

        <Layout>
        <Hero />
        <Domain />
        <About />
        <Pricing />
        <ServerComparison />
        <Testimonial />
        <Team />
        <Footer />
        <ScrollButton />
        </Layout>
      
    </>
  )
}

export default Home
