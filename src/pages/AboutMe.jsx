import photo from "../assets/portfoliopicture.png";

import "../styles/AboutMe.css"

function AboutMe() {
  return (
    <div className="grid">
      <img src={photo} alt="Ingrid's photo" id="photo"/>
      <p id="about">
        I am currently learning to code through a Full Stack Bootcamp. I have
        skills in HTML, CSS and JavaScript. I have a master's degree in
        Education and bachelor's degree in Biological Science. I have worked as
        biology teacher in the past. I am from Brazil and have been living in
        Chicago for the past 5 years.
      </p>
    </div>
  );
}

export default AboutMe;
