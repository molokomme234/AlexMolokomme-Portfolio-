import data from "../../data/index.json";

export default function Projects() {
  return (
    <section className="projects--section" id="projects">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">My Personal</p>
          <h2 className="sections--heading">Projects</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.projects?.map((item, index) => (
          <div key={index} className="projects--section--card">
            <div className="projects--section--card--details">
              <h3 className="project--name">{item.project_name}</h3>
              <p className="text-md project--description">{item.description}</p>
              <p className="text-md project--tools">Tools Used: {item.tools_used}</p>
            </div>
            <div className="projects--section--card--image">
              <img src={item.src} alt={`${item.project_name} Screenshot`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


