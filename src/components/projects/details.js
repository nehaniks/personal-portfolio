import { useState } from "react";
import IMAGES from "../../images/index";

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
        <img
          src={IMAGES[props.projectName][props.slides[0]]}
          alt={props.slides[0]}
        />
      ) : (
        <div className="p-2 grid grid-cols-2 bg-gray-200">
          <div>
            <img
              src={IMAGES[props.projectName][props.slides[0]]}
              alt={props.slides[0]}
            />
          </div>
          <div className="mx-1 flex flex-col">
            <a
              className="mb-2 flex flex-row justify-evenly"
              href={props.projectLink}
            >
              <span className="text-center">View Project</span>
              <img
                className="mt-1 p-1 w-12 h-12 rounded-sm bg-gray-100"
                src={IMAGES.open}
                alt="Open Project"
              />
            </a>
            <a
              className="mt-2 flex flex-row justify-evenly"
              href={props.repoLink}
            >
              <span className="text-center">Project Repo</span>

              <img
                className="mt-1 p-1 w-12 h-12 rounded-sm bg-gray-100"
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
            <h1 className="text-xl">Description:</h1>
            <p className="mt-1 text-md">{props.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
