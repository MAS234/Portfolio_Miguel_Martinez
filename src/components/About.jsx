import {motion} from "framer-motion"
import {Tilt} from "react-tilt";
import PropTypes from "prop-types";
import { styles } from "../styles"
import { services } from "../constants"
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion"


const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt
    className="xs:w-[250px] w-full"
    options={{
      max: 45,
      scale: 1,
      speed: 450
    }}
    >
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75 )}
      className="w-full bg-transparent  p-[1px] rounded-[20px]  "
      >

        <div
        className="  rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col "
        >
          <img src={icon} alt="icono" className="w-32 h-32 object-contain floating-image" />

          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}

ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const About = () => {
  
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introducción</p>
      <h2 className={styles.sectionHeadText}>Descripción</h2>
    </motion.div>

    <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
Soy un apasionado desarrollador que está constantemente buscando nuevas habilidades para perfeccionarse. Mi enfoque principal se centra en el Frontend, donde encuentro mi mayor inspiración. Disfruto especialmente del diseño y el maquetado, y tengo un compromiso firme con proporcionar a los usuarios una experiencia excepcional. Mi objetivo es asegurarme de que cada sitio o aplicación que desarrollo no solo sea visualmente atractivo, sino que funcione de manera óptima, brindando una experiencia fluida y memorable.
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((services, index) => (
       
       <ServiceCard key={services.title} index={index} {...services}/>

      ))}

    </div>
    </>
  )
}

const aboutFinal = SectionWrapper(About, "SobreMi")

export default aboutFinal