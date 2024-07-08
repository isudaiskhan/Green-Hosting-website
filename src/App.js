import {Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Contact from './Components/Pages/Contact/Contact';
import PagesAbout from './Components/Pages/PagesAbout/PagesAbout';
import PagesDomain from './Components/Pages/PagesDomain/PagesDomain';
import PagesHosting from './Components/Pages/PagesHosting/PagesHosting';
import OurTeam from './Components/Pages/Pages/OurTeam';
import Testimonials from './Components/Pages/Pages/Testimonials';
import Comparison from './Components/Pages/Pages/Comparison';


function App() {
  return (
    <>

   <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/pagesabout" element={<PagesAbout/>} />
          <Route path="/pagesdomain" element={<PagesDomain/>} />
          <Route path="/pageshosting" element={<PagesHosting/>} />
          <Route path="/ourteam" element={<OurTeam/>} />
          <Route path="/testimonials" element={<Testimonials/>} />
          <Route path="/comparison" element={<Comparison/>} />
          <Route path="/contact" element={<Contact/>} />
   </Routes>
    </>
  );
}

export default App;
