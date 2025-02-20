import React from 'react';
import Navbar from './components/Navbar';
import Herobar from './components/Herobar';
import MySkills from './components/MySkills';
import MyProjects from './components/MyProjects';
import Contact from './components/Contact';
import FloatingSocials from './components/FloatingSocials';

const App = () => {
  return (
     <>
         <Navbar />
         <Herobar />
         <MySkills />
         <MyProjects />
         <Contact />
         <FloatingSocials />

     </>
          
     
      

    
  )
}

export default App