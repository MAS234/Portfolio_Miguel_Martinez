import { figma, vista } from "../assets"
import PropTypes from "prop-types";
import {Tilt}  from "react-tilt"
import { motion } from "framer-motion"
import { fadeIn} from "../utils/motion"


function DiseñoCard({index, name, tags, image, source_code_link, description, vista_code}) {
    return(
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
        options = {{
          max:45,
          scale:1,
          speed: 450
        }}
        className="blurred-background p-5 rounded-2xl sm:w-[360px] min-w-full"
        >
          <div className="relative w-full h-[230px]">
            <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
      
            <div className="absolute inset-0 flex justify-end gap-2 m-3 card-img_hover">
              <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-gray-700 hover:bg-[#4cf839] duration-300 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img src={vista} alt="github" className="w-1/2 h-1/2 object-contain " />
              </div>
      
              <div
              onClick={() => window.open(vista_code, "_blank")}
              className="bg-gray-700 hover:bg-[#4cf839] duration-300 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img src={figma} alt="vista" className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
      
          </div>
      
          <div className="mt-5">
            <h3 className="text-white text-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
      
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
        </motion.div>
      )
}

DiseñoCard.propTypes = {
    index: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    source_code_link: PropTypes.string.isRequired,
    vista_code: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired
  };

export default DiseñoCard
