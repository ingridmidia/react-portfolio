import Project from "./Project";
import PrivateProject from "./PrivateProject";
import techBlog from "../assets/techblog.png";
import basil from "../assets/basil.png";
import weather from "../assets/weather.png";
import quiz from "../assets/quiz.png";
import noteTaker from "../assets/notetaker.png";
import shelter from "../assets/shelter.png";
import ubx from "../assets/ubx.png";
import recipe from "../assets/recipe.png";

function Projects() {
  return (
    <section className="mb-2 pt-4">
      <PrivateProject
        photo={ubx}
        name="UBX Engenharia"
        description="A responsive single-page application built with Tailwind and React for UBX Engenharia, a Brazilian Engineering Company aiming to increase its digital presence."
        page="https://ubxengenharia.netlify.app/"
      />
      <Project
        photo={basil}
        name="Basil Budget Tracker"
        description="Full stack budget tracker that allow users to track their incomes and expenses to promote financial health."
        page="https://basil-budget-e685e272efd5.herokuapp.com/"
        repo="https://github.com/ingridmidia/mern-budget-app"
      />
      <Project
        photo={shelter}
        name="Amazing Cats"
        description="Full stack application that allow shelter staff to manage the cats available for adoption."
        page="https://cat-shelter-8ba255716a84.herokuapp.com/"
        repo="https://github.com/ingridmidia/cat-shelter"
      />
      <Project
        photo={recipe}
        name="What's For Dinner?"
        description="Web app that helps busy coding bootcamp students (among others) search for recipes featuring a user-provided ingredient."
        page="https://ingridmidia.github.io/recipe-finder/"
        repo="https://github.com/ingridmidia/recipe-finder"
      />
      <Project
        photo={techBlog}
        name="The Tech Blog"
        description="A CMS-style blog, where developers can publish their blog posts and comment on other developers’ posts as well."
        page="https://ingrid-tech-blog-5ff7d16ff03b.herokuapp.com/"
        repo="https://github.com/ingridmidia/tech-blog"
      />
      <Project
        photo={quiz}
        name="JavaScript Quiz"
        description="A timed Javascript quiz with multiple-choice questions. When the quiz is done you can store your score and see the highscores in another page."
        page="https://ingridmidia.github.io/javascript-quiz/"
        repo="https://github.com/ingridmidia/javascript-quiz"
      />
      <Project
        photo={weather}
        name="Weather Dashboard"
        description="A weather dashboard allows users to search for the 5-day weather outlook for multiple cities."
        page="https://ingridmidia.github.io/weather-dashboard/"
        repo="https://github.com/ingridmidia/weather-dashboard"
      />
      <Project
        photo={noteTaker}
        name="Note Taker"
        description="A note taker that can be used to write, save, and delete notes."
        page="https://ingrid-note-taker-12eb8ba2343b.herokuapp.com/notes"
        repo="https://github.com/ingridmidia/note-taker"
      />
    </section>
  );
}

export default Projects;
