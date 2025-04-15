import "./Home.css"
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaCircleArrowRight, FaArrowDownLong  } from "react-icons/fa6";
import { mainImg } from "../../assets/img/img_index.js";




const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container home-wrapper">
        <div className="media-icons">
          <a href="">
            <FaLinkedinIn />
          </a>
          <a href="">
            <FaGithub />
          </a>
        </div>
        <div className="home-info">
          <h1>Hei, olen Aleksei</h1>
          <h3>Front-end developer</h3>
          <p>Web-kehittäjä, jolla on kokemusta WordPressistä, 
            automaation määrittämisestä ja CRM/ERP-järjestelmien integroinnista.</p>
          <a href="" className="home-info-link inner-info-link">
            Contact me
            <FaCircleArrowRight/>
          </a>
        </div>
        <div className="home-img">
          <img src={mainImg} alt="aleksei khailov" />
        </div>
      </div>
      <a href="#about" className="scroll-down">
        Scroll down
        <FaArrowDownLong/> 
      </a>
    </section>
  )
}

export default Home