import Project from "../components/Project";

import githubLogo from "../assets/github.png";
import techBlog from "../assets/techblog.png";
import noteTaker from "../assets/notetaker.png";
import textEditor from "../assets/texteditor.png";
import scheduler from "../assets/scheduler.png";
import weather from "../assets/weather.png";
import quiz from "../assets/quiz.png";

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
      <Project
        photo={noteTaker}
        page="https://ingrid-note-taker-12eb8ba2343b.herokuapp.com/notes"
        github={githubLogo}
        repo="https://github.com/ingridmidia/note-taker"
        name="Note Taker"
      />
      <Project
        photo={textEditor}
        page="https://ingrid-text-editor-e97369b3cf06.herokuapp.com/"
        github={githubLogo}
        repo="https://github.com/ingridmidia/text-editor"
        name="Text Editor"
      />
      <Project
        photo={scheduler}
        page="https://ingridmidia.github.io/work-day-scheduler/"
        github={githubLogo}
        repo="https://github.com/ingridmidia/work-day-scheduler"
        name="Work Day Scheduler"
      />
      <Project
        photo={weather}
        page="https://ingridmidia.github.io/weather-dashboard/dashboard.html?q=seoul"
        github={githubLogo}
        repo="https://github.com/ingridmidia/weather-dashboard"
        name="Weather Dashboard"
      />
      <Project
        photo={quiz}
        page="https://ingridmidia.github.io/javascript-quiz/"
        github={githubLogo}
        repo="https://github.com/ingridmidia/javascript-quiz"
        name="JavaScript Quiz"
      />
    </>
  );
}

export default Portfolio;
