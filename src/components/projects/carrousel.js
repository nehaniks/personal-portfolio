import React, { useState, useEffect } from "react";
import { Zoom, Fade } from "react-awesome-reveal";
import IMAGES from "../../images/index";

export default function Carrousel(props) {
  const [current, setCurrent] = useState(0);
  const length = props.slides.length - 1;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (current === length) {
        setCurrent(0);
      } else {
        setCurrent((prevCount) => prevCount + 1);
      }
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [current, length]);

  return (
    <Zoom triggerOnce>
      {props.slides.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <Fade duration={2000}>
                <img src={IMAGES[props.projectName][slide]} alt={slide}></img>
              </Fade>
            )}
          </div>
        );
      })}
    </Zoom>
  );
}
