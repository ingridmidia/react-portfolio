import photo from "../assets/portfoliopicture.png";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Me() {
  return (
    <section className="text-center p-6 shapedividers_com-1046">
      <div className="flex flex-col items-center mb-10 md:grid grid-cols-2 justify-center">
        <img
          src={photo}
          alt="Ingrid's picture"
          className="mb-2 w-52 mx-auto md:w-80 md:mb-10"
        />
        <div>
          <h1 className="text-5xl py-2 text-purple-800 font-medium md:text-7xl">
            Ingrid Miranda
          </h1>
          <h2 className="text-xl py-3 leading-8">
            Full Stack Web Developer blending a background in Biology and
            Education with recent certification in Full Stack Development from
            Northwestern University. Excited to merge communication and teaching
            skills with newfound tech knowledge to contribute to a dynamic
            development team.
          </h2>
          <div className="text-5xl flex justify-center gap-16 text-purple-800 mb-6">
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
        </div>
      </div>
    </section>
  );
}

export default Me;
