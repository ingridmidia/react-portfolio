import photo from "./assets/portfoliopicture.png";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Project from "./components/Project";
import PrivateProject from "./components/PrivateProject";
import techBlog from "./assets/techblog.png";
import basil from "./assets/basil.png";
import weather from "./assets/weather.png";
import quiz from "./assets/quiz.png";
import noteTaker from "./assets/notetaker.png";
import shelter from "./assets/shelter.png";
import ubx from "./assets/ubx.png";
import recipe from "./assets/recipe.png";

function App() {
  return (
    <>
      <div className="min-h-screen bg-neutral-50">
        <section className="text-center p-8">
          <img
            src={photo}
            alt="Ingrid's picture"
            className="mb-10 w-80 mx-auto"
          />
          <h1 className="text-5xl py-2 text-purple-800 font-medium md:text-7xl">
            Ingrid Miranda
          </h1>
          <h2 className="text-md py-5 leading-8 md:text-lg">
            Full Stack Web Developer blending a background in Biology and
            Education with recent certification in Full Stack Development from
            Northwestern University. Excited to merge communication and teaching
            skills with newfound tech knowledge to contribute to a dynamic
            development team.
          </h2>
          <div className="text-5xl flex justify-center gap-16 text-purple-800">
            <a href="https://github.com/ingridmidia" target="_blank">
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ingrid-miranda-979b72b2/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
          </div>
        </section>

        <section className="mb-2">
          <h2 className="text-4xl py-2 text-purple-800 font-medium text-center mb-3">
            Projects
          </h2>
          <div className="md:grid grid-cols-2 gap-6 p-6 xl:grid-cols-3">
            <PrivateProject
              photo={ubx}
              name="UBX Engenharia"
              description="A responsive single page application built with Tailwind and React for a Brazilian Engineering Company."
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
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
