import the_venue_1 from "../../images/projects/the_venue/the_venue_1.png";
import the_venue_2 from "../../images/projects/the_venue/the_venue_2.png";
import ipl_1 from "../../images/projects/ipl/ipl_1.png";

export default function Projects() {
  return (
    <div>
      <h1 className="flex items-center justify-center text-3xl">
        <strong>MY PROJECTS</strong>
      </h1>
      <div className="my-8 grid grid-cols-2">
        <div className="mx-8 mb-12">
          <img src={the_venue_1} alt="the venue" />
        </div>
        <div className="mx-8 mb-12">
          <img src={the_venue_2} alt="the venue" />
        </div>
        <div className="mx-8 mb-12">
          <img src={ipl_1} alt="ipl" />
        </div>
      </div>
    </div>
  );
}
