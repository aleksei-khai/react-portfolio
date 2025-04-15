import { wordpress, elementor, activecampaign, odoo } from "../../assets/img/img_index"
import SectionTitle from "../sectionTitle/SectionTitle"
import "./Skills.css"
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
                        <div className="education">
                        <h4 className="label">Koulutus</h4>
                        <ul className="education-list">
                            <li className="item">
                                <span className="year">2019-2020</span>
                                <p>Digimarkkinoinnin osaaja TAKK</p>
                            </li>
                            <li className="item">
                                <span className="year">2019</span>
                                <p>YKI kielitutkinnot</p>
                            </li>
                            <li className="item">
                                <span className="year">2014-2016</span>
                                <p>Yliopisto - Maisteri</p>
                            </li>
                            <li className="item">
                                <span className="year">2010-2014</span>
                                <p>Yliopisto - Kandidaatti</p>
                            </li>
                            <li className="item">
                                <span className="year">2008-2010</span>
                                <p>IT Academy</p>
                            </li>
                        </ul>
                        </div>
                        <div className="skills">
                        <h4 className="label">Minkä parissa olen työskennellyt</h4>
                            <div className="skills-list">
                                <div className="skill-tool">
                                    <div className="logo-wrapper">
                                        <img src={wordpress} alt="wordpress" className="tool-logo" />
                                    </div>
                                    <div>
                                        <span className="tool-name">WordPress</span>
                                        <p>Nettisivujen toteutus</p>
                                    </div>
                                </div>
                                <div className="skill-tool">
                                    <div className="logo-wrapper">
                                        <img src={elementor} alt="elementor" className="tool-logo" />
                                    </div>
                                    <div>
                                        <span className="tool-name">Elementor</span>
                                        <p>Page Builder</p>
                                    </div>
                                </div>
                                <div className="skill-tool">
                                    <div className="logo-wrapper">
                                        <img src={odoo} alt="odoo" className="tool-logo" />
                                    </div>
                                    <div>
                                        <span className="tool-name">Odoo</span>
                                        <p>ERP / CRM</p>
                                    </div>
                                </div>
                                <div className="skill-tool">
                                    <div className="logo-wrapper">
                                        <img src={activecampaign} alt="activecampaign" className="tool-logo" />
                                    </div>
                                    <div>
                                        <span className="tool-name">ActiveCampaign</span>
                                        <p>Sähköpostimarkkinointialusta</p>
                                    </div>
                                </div>
                                <div className="skill-tool">
                                    <div className="logo-wrapper">
                                        <img src={activecampaign} alt="wordpress" className="tool-logo" />
                                    </div>
                                    <div>
                                        <span className="tool-name">ActiveCampaign</span>
                                        <p>Sähköpostimarkkinointialusta</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="work-exp">
                    <h3 className="work-exp">Työkokemus</h3>
                    <div className="experience-info">
                        <div className="experience-card">
                            <div className="upper">
                                <h4 className="experience-title">Työnantaja</h4>
                                <p className="experience-date">2010-2016</p>
                                <p className="experience-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                            </div>
                            <div className="hr"></div>
                            <div className="lower">
                                <h4 className="label">Smth</h4>
                                <p>Kehitynyt nettisivuja ja odoo moduuleja</p>
                            </div>
                        </div>
                        <div className="experience-card">
                            <div className="upper">
                                <h4 className="experience-title">Työnantaja</h4>
                                <p className="experience-date">2010-2016</p>
                                <p className="experience-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                            </div>
                            <div className="hr"></div>
                            <div className="lower">
                                <h4 className="label">Smth</h4>
                                <p>Kehitynyt nettisivuja ja odoo moduuleja</p>
                            </div>
                        </div>
                        <div className="experience-card">
                            <div className="upper">
                                <h4 className="experience-title">Työnantaja</h4>
                                <p className="experience-date">2010-2016</p>
                                <p className="experience-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                            </div>
                            <div className="hr"></div>
                            <div className="lower">
                                <h4 className="label">Smth</h4>
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


