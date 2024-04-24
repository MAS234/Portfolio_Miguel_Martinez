import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import PropTypes from "prop-types";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full bg-transparent  p-[1px] rounded-[20px]  "
      >
        <div className="  rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col ">
          <img
            src={icon}
            alt="icono"
            className="w-28 h-28 object-contain floating-image"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

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
        Soy desarrollador FullStack, destaco por mi compromiso, constancia y
        capacidad de adaptación. He colaborado en variados proyectos, tanto como
        Freelance para diversos clientes como en empresas. Mi principal objetivo
        es seguir creciendo profesionalmente, manteniéndome siempre actualizado
        y buscando nuevos desafíos que me permitan expandir mis habilidades y
        conocimientos.
      </motion.p>

      <div className="mt-20  flex flex-wrap justify-evenly gap-10">
        {services.map((services, index) => (
          <ServiceCard key={services.title} index={index} {...services} />
        ))}
      </div>
    </>
  );
};

const aboutFinal = SectionWrapper(About, "SobreMi");

export default aboutFinal;
