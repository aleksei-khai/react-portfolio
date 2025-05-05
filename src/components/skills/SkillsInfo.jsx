
import SectionTitle from "../sectionTitle/SectionTitle"
import "./Skills.css"
import Education from "./Education"
import Skills from "./Skills"

const SkillsInfo = () => {
  return (
    <section className="section" id="#skills">
        <div className="container flex-center">
            <SectionTitle title="Koulutus & Taidot" subtitle="Koulutus & Taidot"/>
                <div className="inner-content">
                    <div className="skills-descr">
                        <h3>Education and Skills</h3>
                        <p>Lorem ipsum</p>
                    </div>
                    <div className="education-info education-all">
                        <Education/>
                        <Skills/>
                    </div>
                    <div className="work-exp">
                      <h3>Työkokemus</h3>
                        <div className="experience-info">
                            <div className="experience-card">
                                <div className="upper">
                                    <h3 className="experience-title">Ohjelmointi</h3>
                                    <h5 className="experience-job-type">Kieliharjoittelu</h5>
                                    <span className="experience-date">2018-2019</span>
                                </div>
                                <div className="hr"></div>
                                <div className="lower">
                                    <h4 className="label">Yritys</h4>
                                    <p>Kehitynyt nettisivuja ja odoo moduuleja</p>
                                </div>
                            </div>
                            <div className="experience-card">
                                <div className="upper">
                                    <h3 className="experience-title">Web Developer</h3>
                                    <h5 className="experience-job-type">Työharjoittelu</h5>
                                    <span className="experience-date">2019-2020</span>
                                </div>
                                <div className="hr"></div>
                                <div className="lower">
                                    <h4 className="label">Yritys</h4>
                                    <p>Kehitynyt nettisivuja ja odoo moduuleja</p>
                                </div>
                            </div>
                            <div className="experience-card">
                                <div className="upper">
                                    <h3 className="experience-title">Web Developer, Digimarkkinoinnin osaaja</h3>
                                    <h5 className="experience-job-type">Yrittäjyys, Myyntivoiman kumppanina</h5>
                                    <span className="experience-date">2020-2025</span>
                                </div>
                                <div className="hr"></div>
                                <div className="lower">
                                    <h4 className="label">Yritys</h4>
                                    <p>Kehitynyt nettisivuja ja odoo moduuleja</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default SkillsInfo


