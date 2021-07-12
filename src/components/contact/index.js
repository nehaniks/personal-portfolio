import IMAGES from "../../images/index";
import PDF from "../../pdf/Neha_Nikhat.pdf";
import { Zoom } from "react-awesome-reveal";

export default function Contact() {
  return (
    <div className="w-auto h-40 flex items-center justify-evenly bg-gray-200 dark:bg-gray-800">
      <Zoom duration={2000} triggerOnce>
        <div className="flex flex-col items-center m-2 md:m-2">
          <h3 className="text-center text-sm md:text-xl">
            Check my profile at:
          </h3>
          <a
            className="my-2 w-10 h-10 md:w-16 md:h-16 rounded-xl bg-gray-100"
            href="https://www.linkedin.com/in/neha-nikhat-5027a4141"
            target="_blank"
            rel="noreferrer"
          >
            <img className="rounded-xl" src={IMAGES.linkedin} alt="linkedin" />
          </a>
        </div>
      </Zoom>

      <Zoom duration={2000} triggerOnce>
        <div className="flex flex-col items-center m-1 md:m-2">
          <h3 className="text-center text-sm md:text-xl">Contact me:</h3>
          <a
            className="my-2 w-10 h-10 md:w-16 md:h-16 rounded-xl bg-gray-100"
            href="mailto: nehanikhat20@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={IMAGES.mail} alt="mail" />
          </a>
        </div>
      </Zoom>

      <Zoom duration={2000} triggerOnce>
        <div className="flex flex-col items-center m-1 md:m-2">
          <h3 className="text-center text-sm md:text-xl">
            Download my resume:
          </h3>
          <a
            className="my-2 w-10 h-10 md:w-16 md:h-16 rounded-xl bg-gray-100"
            href={PDF}
            target="_blank"
            rel="noreferrer"
          >
            <img src={IMAGES.download} alt="mail" />
          </a>
        </div>
      </Zoom>
    </div>
  );
}
