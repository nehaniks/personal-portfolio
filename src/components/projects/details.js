import { useState } from "react";
import IMAGES from "../../images/index";
import Carrousel from "./carrousel";

export default function Details(props) {
  const [isHidden, setIsHidden] = useState(true);

  const shrink = () => {
    setIsHidden(false);
  };

  const expand = () => {
    setIsHidden(true);
  };

  return (
    <div onMouseEnter={() => shrink()} onMouseLeave={() => expand()}>
      {isHidden ? (
        <Carrousel projectName={props.projectName} slides={props.slides} />
      ) : (
        <div className="grid grid-cols-2 bg-gray-300">
          <div className="p-1 xs:p-2">
            <Carrousel projectName={props.projectName} slides={props.slides} />
          </div>
          <div className="p-1 xs:p-2">
            <h1 className="font-semibold text-sm md:text-xl text-black">
              Description:
            </h1>
            <p className="sm:mt-2 text-xs sm:text-base text-black overscroll-auto overflow-y-scroll h-14 xs:h-auto lg:h-16 xl:h-auto">
              {props.description}
            </p>
          </div>

          <div className="p-0 xs:p-2 lg:p-0 xl:p-2 col-span-2">
            <div className="flex flex-row justify-evenly">
              {props.skills.map((skill, i) => {
                return (
                  <div
                    className="p-1 flex items-center w-10 h-10 xs:w-12 xs:h-12 rounded-full bg-gray-100"
                    key={i}
                  >
                    <img
                      src={IMAGES[skill]}
                      alt={skill}
                      className="rounded-full"
                    ></img>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-0 sm:p-2 lg:p-0 xl:p-2 col-span-2 flex flex-row justify-evenly">
            <div className="flex flex-row items-center justify-center sm:flex-col">
              <span className="font-thin sm:font-semibold text-center text-black">
                View Project
              </span>
              <a className="flex justify-center" href={props.projectLink}>
                <img
                  className="mt-1 p-1 w-8 h-8 xs:w-12 xs:h-12 rounded-sm"
                  src={IMAGES.open}
                  alt="Open Project"
                />
              </a>
            </div>

            <div className="flex flex-row items-center justify-center sm:flex-col">
              <span className="font-thin sm:font-semibold text-center text-black">
                Project Repo
              </span>
              <a className="flex justify-center" href={props.repoLink}>
                <img
                  className="mt-1 p-1 w-8 h-8 xs:w-12 xs:h-12 rounded-sm"
                  src={IMAGES.repo}
                  alt="Repository"
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
