import "../styles/Footer.css";

import linkedinLogo from "../assets/linkedin.png";
import githubLogo from "../assets/github.png";
import stackoverflowLogo from "../assets/stackoverflow.png";

function Footer() {
  return (
    <footer>
      <a
        href="https://www.linkedin.com/in/ingrid-miranda-979b72b2/"
        target="_blank"
      >
        <img src={linkedinLogo} alt="linkedin" />
      </a>
      <a href="https://github.com/ingridmidia" target="_blank">
        <img src={githubLogo} alt="github" />
      </a>
      <a
        href="https://stackoverflow.com/?newreg=cfd74ad8bb384f16a80474dfe751d943"
        target="_blank"
      >
        <img src={stackoverflowLogo} alt="stackoverflow" />
      </a>
    </footer>
  );
}

export default Footer;
