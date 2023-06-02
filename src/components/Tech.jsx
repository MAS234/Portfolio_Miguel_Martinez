import {BallCanvas} from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { useMediaQuery } from 'react-responsive';


const Tech = () => {

  const isDesktop = useMediaQuery({ minDeviceWidth: 768 });


  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          {isDesktop && <BallCanvas icon={technology.icon} />}
        </div>
      ))}
    </div>
  )
}

const TechFinal = SectionWrapper(Tech, "")

export default TechFinal 