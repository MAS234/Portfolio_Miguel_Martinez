import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css"
import {styles} from "../styles"
import {experiences} from "../constants"
import {SectionWrapper} from "../hoc"
import { textVariant } from "../utils/motion";
import PropTypes from "prop-types"


//componente de experiencia
const ExperienceCard = ({ experience }) => (

  <VerticalTimelineElement
  contentStyle={{background: "#0000008e", color:"#ffffff"}}
  contentArrowStyle={{borderRight:"7px solid #0000008e"}}
  date={experience.date}
  iconStyle={{background: experience.iconBg}}
  icon={
    <div className="flex justify-center items-center w-full h-full ">
      <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60% object-contain ]" />
    </div>
  }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold ">{experience.title}</h3>
      <p 
      className="text-[#4cf839] text-[16px] font-semibold"
      style={{margin:0}}
      >
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
    {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
    </ul>
  </VerticalTimelineElement>

) 

//validacion de datos
ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    date: PropTypes.string.isRequired,
    iconBg: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    points:PropTypes.string.isRequired,
  }).isRequired
}


const Experience = () => {
  return (
    <>

    <motion.div
    variants={textVariant()}
    >
      <p className={styles.sectionSubText}>Trabajos hasta ahora.</p>
      <h2 className={styles.sectionHeadText} >Proyectos y <span className="text-[#4cf839]">Experiencia.</span></h2>
    </motion.div>

    <div className="mt-20 flex flex-col">
      <VerticalTimeline
      >
      {experiences.map((experience, index) => (
        //se llama al componente de experiencia y se le pasan los props necesarios
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
      </VerticalTimeline>
    </div>

    </>
  )
}

// Utilizo una constante "ExperienciaFinal" con el fin de que se renderice correctamente el componente

const ExperienciaFinal = SectionWrapper(Experience, "work")

export default ExperienciaFinal