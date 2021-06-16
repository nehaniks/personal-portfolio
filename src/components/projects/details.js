import { useState } from "react";
import the_venue_1 from "../../images/projects/the_venue/the_venue_1.png";
import IMAGES from "../../images/index";

export default function Details() {
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
        <img src={the_venue_1} alt="the venue" />
      ) : (
        <div className="p-2 grid grid-cols-2 bg-gray-200">
          <div>
            <img src={the_venue_1} alt="the venue" />
          </div>
          <div className="mx-1 flex flex-col">
            <a className="mb-2 flex flex-row justify-evenly" href="">
              <span className="text-center">View Project</span>
              <img
                className="mt-1 p-1 w-12 h-12 rounded-sm bg-gray-100"
                src={IMAGES.open}
                alt="Open Project"
              />
            </a>
            <a
              className="mt-2 flex flex-row justify-evenly"
              href="https://github.com/nehaniks/the_venue"
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
              <div className="rounded-full w-12 h-12 bg-gray-100 p-1">
                <img
                  src={IMAGES.html}
                  alt="html"
                  className="rounded-full"
                ></img>
              </div>

              <div className="rounded-full w-12 h-12 bg-gray-100 p-1">
                <img src={IMAGES.css} alt="css" className="rounded-full"></img>
              </div>

              <div className="rounded-full w-12 h-12 bg-gray-100 p-1">
                <img
                  src={IMAGES.react}
                  alt="react"
                  className="rounded-full"
                ></img>
              </div>
            </div>
          </div>
          <div className="mt-2 col-span-2">
            <h1 className="text-xl">Description:</h1>
            <p className="mt-1 text-md">
              Landing page with picture caroussel, countdown timer, navigation
              bar, google location finder
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
