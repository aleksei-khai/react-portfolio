
import "./AboutMe.css"
import { aboutImg } from '../../assets/img/img_index.js';
import { FaDownload } from "react-icons/fa6";
import SectionTitle from "../sectionTitle/SectionTitle.jsx";


const AboutMe = () => {
  return (
    <section className="about section" id="about">
      <div className="container flex-center">
        <SectionTitle title="About me" subtitle="About me" />
        {/* <h2 className="inner-title">About me</h2>
        <h3 className="inner-second-title">About me</h3> */}
        <div className="about-wrapper">
          <div className="about-img">
            <img src={aboutImg} alt="about" />
          </div>
          <div className="about-info">
            <div className="about-descr">
              <h3>Minun nimi oo Aleksei Khailov</h3>
              <h4>Olen <span>Frontend developer</span></h4>
              <p>

              </p>
            </div>
            <ul className="professional-list">
              <li className="list-item">
                <span className="number">5+</span>
                <span className="text">Years of experience</span>
              </li>
              <li className="list-item">
                <span className="number">30+</span>
                <span className="text">Asiakasta</span>
              </li>
              <li className="list-item">
                <span className="number">50+</span>
                <span className="text">Onnistuneita projekteja</span>
              </li>
            </ul>
            <a href="#" className="inner-info-link">Lataa CV
              <FaDownload/>
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe