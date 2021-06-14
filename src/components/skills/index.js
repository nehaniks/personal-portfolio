import IMAGES from "../../images/index";
import Progress from "./progress";

export default function Skills() {
  return (
    <div className="">
      <h1 className="flex items-center justify-center font-black text-3xl">
        <strong>MY SKILLS</strong>
      </h1>
      <div className="flex flex-wrap content-center justify-center">
        <div className="mx-10 my-10 px-10 flex flex-col items-center rounded-3xl bg-gray-200">
          <h3 className="font-bold text-xl">HTML5</h3>
          <Progress className="absolute z-10" color="#e34f26" value="80" />
          <div className="absolute z-20 my-10 w-24 h-24 rounded-full">
            <img className="p-2 h-24" src={IMAGES.html} alt="html"></img>
          </div>
        </div>

        <div className="mx-10 my-10 px-10 flex flex-col items-center rounded-3xl bg-gray-200">
          <h3 className="font-bold text-xl">CSS3</h3>
          <Progress className="absolute z-10" color="#264de4" value="70" />
          <div className="absolute z-10 my-10 w-24 h-24 rounded-full bg-gray-100">
            <img className="p-2 h-24" src={IMAGES.css} alt="css"></img>
          </div>
        </div>

        <div className="mx-10 my-10 px-10 flex flex-col items-center rounded-3xl bg-gray-200">
          <h3 className="font-bold text-xl">tailwindcss</h3>
          <Progress className="absolute z-10" color="#60a5fa" value="70" />
          <div className="absolute z-10 my-10 w-24 h-24 rounded-full bg-gray-100">
            <img
              className="rounded-full w-24 h-24"
              src={IMAGES.tailwind}
              alt="tailwind"
            ></img>
          </div>
        </div>

        <div className="mx-10 my-10 px-10 flex flex-col items-center rounded-3xl bg-gray-200">
          <h3 className="font-bold text-xl">React</h3>
          <Progress className="absolute z-10" color="#61dbfb" value="80" />
          <div className="absolute z-10 my-10 w-24 h-24 rounded-full bg-gray-100">
            <img className="h-24" src={IMAGES.react} alt="react"></img>
          </div>
        </div>

        <div className="mx-10 my-10 px-10 flex flex-col items-center rounded-3xl bg-gray-200">
          <h3 className="font-bold text-xl">JavaScript</h3>
          <Progress className="absolute z-10" color="#f0db4f" value="85" />
          <div className="absolute z-10 my-10 w-24 h-24 rounded-full bg-gray-100">
            <img className="h-24" src={IMAGES.js} alt="js"></img>
          </div>
        </div>

        <div className="mx-10 my-10 px-10 flex flex-col items-center rounded-3xl bg-gray-200">
          <h3 className="font-bold text-xl">Node.js</h3>
          <Progress className="absolute z-10" color="#3c873a" value="65" />
          <div className="absolute z-10 my-10 w-24 h-24 rounded-full bg-gray-100">
            <img
              className="object-contain h-24 w-24"
              src={IMAGES.nodejs}
              alt="nodejs"
            ></img>
          </div>
        </div>

        <div className="mx-10 my-10 px-10 flex flex-col items-center rounded-3xl bg-gray-200">
          <h3 className="font-bold text-xl">firebase</h3>
          <Progress className="absolute z-10" color="#ffcb2b" value="65" />
          <div className="absolute z-10 my-10 w-24 h-24 rounded-full bg-gray-100">
            <img
              className="object-contain h-24 w-24"
              src={IMAGES.firebase}
              alt="firebase"
            ></img>
          </div>
        </div>

        <div className="mx-10 my-10 px-10 flex flex-col items-center rounded-3xl bg-gray-200">
          <h3 className="font-bold text-xl">git</h3>
          <Progress className="absolute z-10" color="#211f1f" value="70" />
          <div className="absolute z-10 my-10 w-24 h-24 rounded-full bg-gray-100">
            <img className="h-24" src={IMAGES.git} alt="git"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
