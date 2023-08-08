import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useMediaQuery } from "react-responsive";

const Tech = () => {
  const isDesktop = useMediaQuery({ minDeviceWidth: 768 });

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            {isDesktop && (
              <img
                src={technology.icon}
                alt="iconos"
                className="h-20 w-20 cursor-pointer rounded-full p-2 hover:shadow-white-100 shadow duration-200"
              />
            )}
          </div>
        ))}
      </div>


    </>
  );
};

const TechFinal = SectionWrapper(Tech, "");

export default TechFinal;
