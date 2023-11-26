import resume from "../assets/resume.pdf";

function Resume() {
  return (
    <>
      <a href={resume}>
        <h4>Download my resume</h4>
      </a>
      <h5>Front-end Proficiencies</h5>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuerry</li>
        <li>Responsive Design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h5>Back-end Proficiencies</h5>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
    </>
  );
}

export default Resume;
