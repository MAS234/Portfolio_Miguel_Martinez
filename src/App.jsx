import { BrowserRouter } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';


import {About, Works, Contact, Hero, Experience, Navbar, Tech, StarsCanvas, DiseñoProyectos } from "./components"


const App = () => {

  const isDesktop = useMediaQuery({ minDeviceWidth: 768 });


  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Experience/>
      {isDesktop && <Tech/>}
      <Works/>
      <DiseñoProyectos/>
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App

//Sprints de proceso
// 1 sprint
// MIN 33:39 DEL PROYECTO 
//2 sprint
//Min 1:07:00 del Proyecto
//3 sprint
//Min 1:35:03
//4 sprint
//Min 2:00:00
//5 sprint
//Min 2:43:00
