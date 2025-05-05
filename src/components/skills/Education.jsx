import education from "../../data/education"


const Education = () => {
  return (
    <div className="education">
        <h4 className="label">Koulutus</h4>
        <div className="education-list">
            {education.map((item, index) => (
                <div className="item" key={index}>
                    <span className="year">{item.year}</span>
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
        </div>
  )
}

export default Education