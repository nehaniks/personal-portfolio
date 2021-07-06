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
    <div
      onMouseEnter={() => shrink()}
      onMouseLeave={() => expand()}
      className="lg:h-72 xl:h-80"
    >
      {isHidden ? (
        <Carrousel projectName={props.projectName} slides={props.slides} />
      ) : (
        <div className="p-2 grid grid-cols-2 bg-gray-200 dark:bg-gray-800">
          <div>
            <Carrousel projectName={props.projectName} slides={props.slides} />
          </div>
          <div className="mx-1 flex flex-row md:flex-col">
            <a
              className="md:mb-2 flex flex-col items-center md:flex-row md:justify-evenly"
              href={props.projectLink}
            >
              <span className="font-semibold text-center">View Project</span>
              <img
                className="mt-1 p-1 w-10 h-10 md:w-12 md:h-12 rounded-sm bg-gray-100"
                src={IMAGES.open}
                alt="Open Project"
              />
            </a>
            <a
              className="md:mt-2 flex flex-col items-center md:flex-row md:justify-evenly"
              href={props.repoLink}
            >
              <span className="font-semibold text-center">Project Repo</span>

              <img
                className="mt-1 p-1 w-10 h-10 md:w-12 md:h-12 rounded-sm bg-gray-100"
                src={IMAGES.repo}
                alt="Repository"
              />
            </a>
          </div>
          <div className="mt-2 col-span-2">
            <div className="flex flex-row justify-evenly">
              {props.skills.map((skill, i) => {
                return (
                  <div
                    className="rounded-full w-10 h-10 md:w-12 md:h-12 bg-gray-100 p-1"
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
          <div className="mt-2 col-span-2">
            <h1 className="font-semibold text-lg md:text-xl">Description:</h1>
            <p className="mt-1 text-md">{props.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
