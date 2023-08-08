import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import billetera from "../assets/billetera.png";
import { github } from "../assets";

function Colaboraciones() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-20 items-center">
        <div className="md:w-[60em] w-full md:order-2 order-1 flex flex-col md:items-start items-center">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionHeadText}>
              BILLETERA <span className="text-[#4cf839]">VIRTUAL</span>
            </p>
            <h4 className={styles.sectionSubText}>
              <span className="text-[#4cf839]">COUNTRYCOIN</span>
            </h4>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text text-secondary text-[17px] max-w-3xl leading-[30px] md:text-left text-center"
          >
            En este proyecto fui colaborador en su desarrollo específicamente en
            el Frontend, utilizamos la metologia SCRUM para organizar el proceso
            de desarrollo y de muestra a nuestra Team Leader. La aplicación
            consiste en las funciones primordiales de una billetera virtual como
            hacer pagos, transferencias y poder ingresar dinero. Fue una
            experiencia enriquecedora en su totalidad al estar trabajando con
            distintas personas del mundo.
          </motion.p>

          <div className="mt-5 md:text-left text-center">
            <p>Tecnologias</p>

            <div className="md:flex md:text-left text-center  gap-3 ">
              <p className="blue-text-gradient">React</p>
              <p className="pink-text-gradient">Tailwind</p>
              <p className="text-yellow-300">JavaScript</p>
              <p className="green-text-gradient">Librerias varias</p>
            </div>
          </div>

          <div className="mt-5">

          <button className="bg-[#29b519] text-white border border-green-400 border-b-4 font-medium overflow-hidden flex items-center justify-evenly relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
          onClick={() =>
            window.open(
              "https://github.com/No-Country/c12-31-ft-node-react",
              "_blank"
            )
          }
          >
          <span className="bg-white border-green-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          GITHUB
          <img src={github} alt="github" className="w-8" />
        </button>
          </div>
        </div>

        <div className="md:w-[40em] w-full md:order-2 order-1">
          <img
            src={billetera}
            alt="billetera"
            className="floating-image m-auto sombraBilletera"
          />
        </div>
      </div>
    </>
  );
}

const Billetera = SectionWrapper(Colaboraciones, "Colaboraciones");

export default Billetera;
