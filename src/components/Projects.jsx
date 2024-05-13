import Project from "./Project";
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
      <Project
        photo={ubx}
        name="UBX Engenharia"
        description="A responsive single-page application built with Tailwind and React for UBX Engenharia, a Brazilian Engineering Company aiming to increase its digital presence."
        page="https://ubxengenharia.netlify.app/"
        skills="React and Tailwind"
      />
      <Project
        photo={basil}
        name="Basil Budget Tracker"
        description="Full stack budget tracker that allows users to track their incomes and expenses to promote financial health, using lists and graphs."
        page="https://basil-budget-e685e272efd5.herokuapp.com/"
        repo="https://github.com/ingridmidia/mern-budget-app"
        skills="React, CSS, MUI, Express.js, Node.js, GraphQL and MongoDB"
      />
      <Project
        photo={shelter}
        name="Amazing Cats"
        description="Full stack application that allows shelter staff to manage the cats available for adoption in each location."
        page="https://cat-shelter-8ba255716a84.herokuapp.com/"
        repo="https://github.com/ingridmidia/cat-shelter"
        skills="Handlebars, CSS, Express.js, Node.js and MySQL"
      />
      <Project
        photo={recipe}
        name="What's For Dinner?"
        description="Web app that helps busy coding bootcamp students (among others) search for recipes featuring a user-provided ingredient."
        page="https://ingridmidia.github.io/recipe-finder/"
        repo="https://github.com/ingridmidia/recipe-finder"
        skills="HTML, CSS, Bulma, JavaScript and 3rd Party API’s"
      />
      <Project
        photo={techBlog}
        name="The Tech Blog"
        description="A CMS-style blog, where developers can publish their blog posts and comment on other developers’ posts as well."
        page="https://ingrid-tech-blog-5ff7d16ff03b.herokuapp.com/"
        repo="https://github.com/ingridmidia/tech-blog"
        skills="Handlebars, CSS, Bootstrap, Express.js, Node.js and MySQL"
      />
      <Project
        photo={quiz}
        name="JavaScript Quiz"
        description="A timed Javascript quiz with multiple-choice questions. When the quiz is done you can store your score and see the highscores in another page."
        page="https://ingridmidia.github.io/javascript-quiz/"
        repo="https://github.com/ingridmidia/javascript-quiz"
        skills="HTML, CSS and Javascript"
      />
      <Project
        photo={weather}
        name="Weather Dashboard"
        description="A weather dashboard allows users to search for the 5-day weather outlook for multiple cities."
        page="https://ingridmidia.github.io/weather-dashboard/"
        repo="https://github.com/ingridmidia/weather-dashboard"
        skills="HTML, CSS, Bootstrap, Javascript and 3rd Party API’s"
      />
      <Project
        photo={noteTaker}
        name="Note Taker"
        description="A note taker that can be used to write, save, and delete notes."
        page="https://ingrid-note-taker-12eb8ba2343b.herokuapp.com/notes"
        repo="https://github.com/ingridmidia/note-taker"
        skills="HTML, CSS, Express.js and Node.js"
      />
    </section>
  );
}

export default Projects;
