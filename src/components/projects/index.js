import Data from "../..//data.json";
import Details from "./details";

export default function Projects() {
  return (
    <div>
      <h1 className="flex items-center justify-center font-black text-3xl">
        <strong>MY PROJECTS</strong>
      </h1>
      <div className="my-8 grid grid-cols-2">
        {Data.map((project) => {
          return (
            <div className="mx-8 mb-12 h-auto" key={project.id}>
              <Details
                projectName={project.projectName}
                slides={project.images}
                projectLink={project.projectLink}
                repoLink={project.repoLink}
                skills={project.skills}
                description={project.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
