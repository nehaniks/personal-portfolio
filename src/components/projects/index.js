import Data from "../..//data.json";
import Details from "./details";

export default function Projects() {
  return (
    <div className="mx-auto min-h-screen">
      <h1 className="mb-2 md:mb-8 flex items-center justify-center font-black text-3xl">
        <strong>MY PROJECTS</strong>
      </h1>
      <div className="p-4 mx-4 grid grid-rows-1 lg:grid-cols-2 md:gap-8">
        {Data.map((project) => {
          return (
            <div key={project.id} className="p-4">
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
