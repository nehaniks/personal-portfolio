import PixelEffect from "./pixelEffect";
import { Slide } from "react-awesome-reveal";

export default function About() {
  return (
    <Slide direction="up" triggerOnce>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col mx-2 md:mx-4 p-2">
          <h1 className="font-semibold text-3xl md:text-5xl pl-4 my-2">
            Hi, I am
          </h1>
          <div className="flex items-center justify-center">
            <PixelEffect />
          </div>
          <h3 className="my-4 px-2 md:px-4 rounded-2xl bg-gray-200 bg-opacity-75 font-bold dark:text-gray-900 text-xl md:text-3xl text-right">
            Web Developer
          </h3>
        </div>
      </div>
    </Slide>
  );
}
