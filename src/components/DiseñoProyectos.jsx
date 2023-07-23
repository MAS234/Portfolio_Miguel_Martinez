import { motion } from "framer-motion"
import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { projectsDesing } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import DiseñoCard from "./DiseñoCard"


function DiseñoProyectos() {
    return (
        <>
        <motion.div
        variants={textVariant()}
        >
          <p className={styles.sectionSubText}>Mis trabajos UX|UI</p>
          <h2 className={styles.sectionHeadText}>Proyectos <span className="text-[#4cf839]">UX | UI</span> </h2>
        </motion.div>
    
        <div className="w-full flex">
          <motion.p
          variants={fadeIn("","",0.1,1)}
          className="mt-3 text text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            A continuación, presento algunos de mis proyectos de UX/UI junto con sus respectivas investigaciones y vistas, donde se puede apreciar mi trabajo:
          </motion.p>
    
        </div>
    
        <div className="mt-20 flex flex-wrap gap-5">
          {projectsDesing.map((projects, index) => (
            <DiseñoCard   
            key={`project-${index}`}
            index={index}
            {...projects}
            />
          ))}
    
        </div>
        </>
      )
}

const finalDiseño = SectionWrapper(DiseñoProyectos, "")

export default finalDiseño
