import React, { useState, useEffect } from "react";
import IMAGES from "../../images/index";

export default function Carrousel(props) {
  const [current, setCurrent] = useState(0);
  const length = props.slides.length - 1;

  useEffect(() => {
    setTimeout(() => {
      if (current === length) {
        setCurrent(0);
      } else {
        setCurrent((prevCount) => prevCount + 1);
      }
    }, 3000);
  }, [current]);

  return (
    <div>
      {props.slides.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <img src={IMAGES[props.projectName][slide]} alt={slide}></img>
            )}
          </div>
        );
      })}
    </div>
  );
}
