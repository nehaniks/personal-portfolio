import IMAGES from "../../images/index";

export default function Skills() {
  return (
    <div className="">
      <h1 className="flex items-center justify-center text-3xl">
        <strong>MY SKILLS</strong>
      </h1>
      <div className="flex flex-wrap content-center justify-center">
        <div className="mx-10 my-10 px-10 flex flex-col items-center rounded-3xl bg-gray-200">
          <h3 className="text-xl">HTML5</h3>
          <div className="my-10 p-2 w-28 h-28 rounded-full bg-gray-100">
            <img className="h-24" src={IMAGES.html} alt="html"></img>
          </div>
        </div>

        <div className="mx-10 my-10 px-10 flex flex-col items-center rounded-3xl bg-gray-200">
          <h3 className="text-xl">CSS3</h3>
          <div className="my-10 p-2 w-28 h-28 rounded-full bg-gray-100">
            <img className="h-24" src={IMAGES.css} alt="css"></img>
          </div>
        </div>

        <div className="mx-10 my-10 px-10 flex flex-col items-center rounded-3xl bg-gray-200">
          <h3 className="text-xl">tailwindcss</h3>
          <div className="my-10 p-2 w-28 h-28 rounded-full bg-gray-100">
            <img
              className="rounded-full w-24 h-24"
              src={IMAGES.tailwind}
              alt="tailwind"
            ></img>
          </div>
        </div>

        <div className="mx-10 my-10 px-10 flex flex-col items-center rounded-3xl bg-gray-200">
          <h3 className="text-xl">React</h3>
          <div className="my-10 p-2 w-28 h-28 rounded-full bg-gray-100">
            <img className="h-24" src={IMAGES.react} alt="react"></img>
          </div>
        </div>

        <div className="mx-10 my-10 px-10 flex flex-col items-center rounded-3xl bg-gray-200">
          <h3 className="text-xl">JavaScript</h3>
          <div className="my-10 p-2 w-28 h-28 rounded-full bg-gray-100">
            <img className="h-24" src={IMAGES.js} alt="js"></img>
          </div>
        </div>

        <div className="mx-10 my-10 px-10 flex flex-col items-center rounded-3xl bg-gray-200">
          <h3 className="text-xl">Node.js</h3>
          <div className="my-10 p-2 w-28 h-28 rounded-full bg-gray-100">
            <img
              className="object-contain h-24 w-24"
              src={IMAGES.nodejs}
              alt="nodejs"
            ></img>
          </div>
        </div>

        <div className="mx-10 my-10 px-10 flex flex-col items-center rounded-3xl bg-gray-200">
          <h3 className="text-xl">firebase</h3>
          <div className="my-10 p-2 w-28 h-28 rounded-full bg-gray-100">
            <img
              className="object-contain h-24 w-24"
              src={IMAGES.firebase}
              alt="nodejs"
            ></img>
          </div>
        </div>

        <div className="mx-10 my-10 px-10 flex flex-col items-center rounded-3xl bg-gray-200">
          <h3 className="text-xl">git</h3>
          <div className="my-10 p-2 w-28 h-28 rounded-full bg-gray-100">
            <img className="h-24" src={IMAGES.git} alt="git"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
