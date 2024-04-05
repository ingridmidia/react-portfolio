function PrivateProject(props) {
  return (
    <>
      <div className="max-w-xl overflow-hidden bg-white rounded shadow-lg bt-3 mb-5 mx-4 md:mx-auto basis-1/2 flex-1">
        <img
          className="w-full h-57 object-cover"
          src={props.photo}
          alt="Card Image"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2">{props.name}</div>
          <p className="text-lg">
            {props.description} You can access the live page{" "}
            <a
              href={props.page}
              target="_blank"
              className="hover:bg-purple-100 text-blue-500 underline"
            >
              here.
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default PrivateProject;
