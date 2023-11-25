import "../styles/Project.css";

function Project(props) {
  return (
    <>
      <div className="project-container">
        <a href={props.page} target="_blank">
          <h3 className="project-name">{props.name}</h3>
        </a>
        <a href={props.repo} target="_blank">
          <img src={props.github} alt="github" className="github" />
        </a>
      </div>
      <img src={props.photo} alt="project" className="project-photo" />
    </>
  );
}

export default Project;
