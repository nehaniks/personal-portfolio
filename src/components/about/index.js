import PixelEffect from "./pixelEffect";
import { Slide } from "react-awesome-reveal";

export default function About() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center h-screen">
      <Slide direction="up" triggerOnce>
        <div className="p-2 m-2 flex items-center justify-center">
          <PixelEffect />
        </div>
      </Slide>

      <div className="p-2 m-2 flex flex-col w-4/5 sm:w-2/5 lg:w-2/6">
        <Slide direction="down" triggerOnce>
          <h1 className="my-2 font-semibold text-3xl md:text-5xl">Hi, I am</h1>
          <h1 className="font-black text-4xl md:text-6xl">Neha Nikhat</h1>
          <h3 className="px-2 md:px-4 my-4 rounded-2xl bg-gray-200 bg-opacity-75 font-bold dark:text-gray-900 text-xl md:text-3xl text-right">
            Web Developer
          </h3>
        </Slide>
      </div>
    </div>
  );
}
