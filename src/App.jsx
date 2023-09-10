import { BrowserRouter } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';


import {About, Contact, Hero, Experience, Navbar, Tech, StarsCanvas, DiseñoProyectos, TrabajosM, Colaboraciones } from "./components"


const App = () => {

  const isDesktop = useMediaQuery({ minDeviceWidth: 768 });


  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>
      </div>

      <div className="fondoTaza">
      <About/>
      <Colaboraciones/>
      <TrabajosM/>
      <Experience/>
      <DiseñoProyectos/>
      {isDesktop && <Tech/>}


      </div>
    

      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App

