import photo from "./assets/portfoliopicture.png";
import techBlog from "./assets/techblog.png";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function App() {
  return (
    <>
      <div className="min-h-screen bg-neutral-50">
        <section className="text-center p-10">
          <img
            src={photo}
            alt="Ingrid's picture"
            className="mb-10 w-80 mx-auto"
          />
          <h1 className="text-5xl py-2 text-purple-800 font-medium">
            Ingrid Miranda
          </h1>
          <h2 className="text-md py-5 leading-8 text-gray-800">
            I am currently learning to code through a Full Stack Bootcamp. I
            have skills in HTML, CSS and JavaScript. I have a master's degree in
            Education and bachelor's degree in Biological Science. I have worked
            as biology teacher in the past. I am from Brazil and have been
            living in Chicago for the past 5 years.
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
          <h2 className="text-4xl py-2 text-purple-800 font-medium text-center mb-2">
            Projects
          </h2>
          <div className="max-w-xl mx-auto overflow-hidden bg-white rounded shadow-lg px-2 mb-5">
            <img
              className="w-full object-cover"
              src={techBlog}
              alt="Card Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-800">
                The Tech Blog
              </div>
              <p className="text-gray-800 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                vel repudiandae cupiditate. Quae at quo adipisci voluptate
                explicabo, necessitatibus repudiandae nam exercitationem iste
                quis placeat dicta autem sint fugiat harum.
              </p>
            </div>
          </div>

          <div className="max-w-xl mx-auto overflow-hidden bg-white rounded shadow-lg bt-3 px-2 mb-5">
            <img
              className="w-full object-cover"
              src={techBlog}
              alt="Card Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-800">
                The Tech Blog
              </div>
              <p className="text-gray-800 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                vel repudiandae cupiditate. Quae at quo adipisci voluptate
                explicabo, necessitatibus repudiandae nam exercitationem iste
                quis placeat dicta autem sint fugiat harum.
              </p>
            </div>
          </div>

          <div className="max-w-xl mx-auto overflow-hidden bg-white rounded shadow-lg bt-3 px-2 mb-5">
            <img
              className="w-full object-cover"
              src={techBlog}
              alt="Card Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-800">
                The Tech Blog
              </div>
              <p className="text-gray-800 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                vel repudiandae cupiditate. Quae at quo adipisci voluptate
                explicabo, necessitatibus repudiandae nam exercitationem iste
                quis placeat dicta autem sint fugiat harum.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
