import { motion } from "framer-motion"
import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import TrabajosCard from "./TrabajosCard"

import { useEffect, useState } from "react";

function Trabajos() {

    const [cardsToShow, setCardsToShow] = useState(3); // Mostrar 3 tarjetas por defecto en versión móvil

    // Función para actualizar el número de tarjetas a mostrar cuando cambia el tamaño de la pantalla
    const updateCardsToShow = () => {
      if (window.innerWidth >= 768) {
        setCardsToShow(6); // Mostrar 6 tarjetas en pantallas grandes
      } else {
        setCardsToShow(4); // Mostrar 3 tarjeta en pantallas pequeñas (móviles)
      }
    };

    useEffect(() => {
        updateCardsToShow();
        window.addEventListener("resize", updateCardsToShow);
        return () => {
          window.removeEventListener("resize", updateCardsToShow);
        };
      }, []);

    return (
        <>
        <motion.div
        variants={textVariant()}
        >
          <p className={styles.sectionSubText}>Mis trabajos</p>
          <h2 className={styles.sectionHeadText}>Proyectos </h2>
        </motion.div>
    
        <div className="w-full flex">
          <motion.p
          variants={fadeIn("","",0.1,1)}
          className="mt-3 text text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
        A continuación, presento algunos de mis proyectos junto con sus respectivos repositorios y vistas, donde se puede apreciar mi trabajo y las tecnologías utilizadas:
          </motion.p>
    
        </div>
    
        <div className="mt-20 flex flex-wrap gap-5">
          {projects.slice(0, cardsToShow).map((project, index) => (
            <TrabajosCard key={`project-${index}`} index={index} {...project} />
          ))}
    
        </div>
        </>
      )
}

const TrabajosM = SectionWrapper(Trabajos, "Trabajos")

export default TrabajosM
