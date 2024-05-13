function PrivateProject(props) {
  return (
    <div className="bg-white rounded shadow-lg bt-3 mb-5 mx-4">
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
          <div className="flex justify-around pt-4">
            <a
              href={props.page}
              target="_blank"
              className="bg-purple-800 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded mt-4 inline-block"
            >
              Visit Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivateProject;
