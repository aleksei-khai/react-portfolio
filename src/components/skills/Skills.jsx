import skills from "../../data/skills"


const Skills = () => {
  return (
    <div className="skills">
        <h4 className="label">Hallitut työkalut</h4>
        <div className="skills-list">
            {skills.map((item) => (
                <div className="skill-tool" key={item.id}>
                    <div className="logo-wrapper">
                        <img src={item.logo} alt={item.name} className="tool-logo" />
                    </div>
                    <div>
                        <span className="tool-name">{item.name}</span>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skills