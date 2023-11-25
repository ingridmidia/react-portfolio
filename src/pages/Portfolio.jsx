import Project from "../components/Project";

import square from "../assets/square.png";
import githubLogo from "../assets/github.png";
import techBlog from "../assets/techblog.png";

function Portfolio() {
  return (
    <>
      <Project
        photo={techBlog}
        page="https://ingrid-tech-blog-5ff7d16ff03b.herokuapp.com/"
        github={githubLogo}
        repo="https://github.com/ingridmidia/tech-blog"
        name="The Tech Blog"
      />
    </>
  );
}

export default Portfolio;
