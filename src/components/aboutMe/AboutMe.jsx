import { aboutImg } from "../../assets/img/img_index"
import "./AboutMe.css"

const AboutMe = () => {
  return (
    <div className="aboutMe">
        <h1>About Me</h1>
        <img src={aboutImg} alt="" />
    </div>
  )
}

export default AboutMe