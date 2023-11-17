import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
// import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { curriculum, linkedin, github } from "../assets/index";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false);
  const [verificar, setVerificar] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handletSummit = (e) => {
    e.preventDefault();

    if ([form.email, form.mensaje, form.name].includes("")) {
      alert(
        "Hay almenos un campo vacio, complete todos los campos para continuar."
      );
      setVerificar(true);
      return;
    }

    setVerificar(false);
    setLoading(true);

    emailjs
      .send(
        "service_khmarml",
        "template_aps9fli",
        {
          from_name: form.name,
          to_name: "Miguel",
          from_email: form.email,
          to_email: "miguel.martinez.angel.salazar@gmail.com",
          message: form.mensaje,
        },
        "oJvPMjlGefy470cLk"
      )
      .then(() => {
        setLoading(false);
        alert("Gracias por comunicarte, te estare contactando en breve!!");
      });

    setForm(
      {
        name: "",
        email: "",
        mensaje: "",
      },
      (error) => {
        setLoading(false);

        console.log(error);

        alert("Ocurrio un error.");
      }
    );
  };

  return (
    <div className=" xl:flex-row flex-col-reverse justify-center flex gap-10 overflow-hidden m-auto md:w-[80%] h-[90%]">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] blurred-background shadow-xl shadow-[#4cf839] p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Ponerse en contacto</p>
        <h3 className={styles.sectionHeadText}>Contacto</h3>

        <form
          ref={formRef}
          onSubmit={handletSummit}
          className="mt-5 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span
              className={`${
                verificar  ? "text-red-600" : "text-white"
              } font-medium mb-4`}
            >{`${
              verificar ? "Complete el campo con su nombre" : "Nombre"
            }`}</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="¿Cual es su nombre?"
              className="blurred-background py-4 px-6 placeholder:text-secondary text-[#4cf839] rounded-lg outline-none border-none font-medium "
            />
          </label>

          <label className="flex flex-col">
            <span
              className={`${
                verificar ? "text-red-600" : "text-white"
              } font-medium mb-4`}
            >{`${
              verificar ? "Complete el campo con su email" : "Email"
            }`}</span>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={form.email}
              placeholder="¿Cual es su email?"
              className="blurred-background  py-4 px-6 placeholder:text-secondary text-[#4cf839] rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span
              className={`${
                verificar ? "text-red-600" : "text-white"
              } font-medium mb-4`}
            >{`${
              verificar ? "Complete el campo con su mensaje" : "Mensaje"
            }`}</span>
            <textarea
              rows="7"
              name="mensaje"
              onChange={handleChange}
              value={form.mensaje}
              placeholder="Escriba su mensaje"
              className="blurred-background py-4 px-6 placeholder:text-secondary text-[#4cf839] rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="blurred-background py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-[#4cf839] hover:text-tertiary duration-300"
          >
            {loading ? "Enviando.." : "Enviar"}
          </button>

          <div className="flex justify-center items-center gap-10 mt-10 w-full">

          <div className="justify-center items-center flex flex-col">

          <a href="https://www.linkedin.com/in/miguel-martinez-800638209/" target="_blanck">
            <img src={linkedin} alt="linkedin" className="w-16 h-16 hover:bg-[#4cf839] duration-300 rounded-lg p-1" />
          </a>

          <p>LinkedIn</p>

          </div>

          <div className="justify-center items-center flex flex-col">
          <a href="https://github.com/MAS234" target="_blanck">
            <img src={github} alt="github" className="w-16 h-16 hover:bg-[#4cf839] duration-300 rounded-lg p-1" />
          </a>
          <p>Github</p>
          </div>

          <div className="justify-center items-center flex flex-col">
          <a href="https://drive.google.com/file/d/1yriqgDpSPWsv8T1V0gTEiyXLUtdIaan_/view?usp=sharing" target="_blanck">
            <img src={curriculum} alt="cv" className="w-16 h-16 hover:bg-[#4cf839] duration-300 rounded-lg p-1" />
          </a>
          <p>CV</p>
          </div>

        </div>

        </form>
      </motion.div>
{/* 
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div> */}
    </div>
  );
};

const contactoFinal = SectionWrapper(Contact, "Contacto");

export default contactoFinal;
