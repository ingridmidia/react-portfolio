import { AiFillGithub } from "react-icons/ai";

function Project(props) {
  return (
    <div className="bg-white rounded shadow-lg mb-3 mx-4">
      <div className="flex flex-col items-center mb-8 md:grid grid-cols-2 justify-center">
        <img
          className="w-full h-57 object-cover md:p-4"
          src={props.photo}
          alt="Card Image"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-4xl mb-4 md:text-center">
            {props.name}
          </div>
          <p className="text-xl leading-8">{props.description}</p>
          <p className="text-xl leading-8">
            <span className="font-bold">Skills:</span> {props.skills}
          </p>
          <div className="flex justify-around pt-4">
            {props.page && (
              <a
                href={props.page}
                target="_blank"
                className="bg-purple-800 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded mt-4 inline-block"
              >
                Visit Site
              </a>
            )}
            {props.repo && (
              <a
                href={props.repo}
                target="_blank"
                className="bg-purple-800 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded mt-4 inline-flex items-center"
              >
                <span>View Code</span>
                <AiFillGithub className="ml-2 text-2xl" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
