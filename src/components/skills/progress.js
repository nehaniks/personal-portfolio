import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

export default function Progress(props) {
  const [progress, setProgress] = useState(0);
  const [offset, setOffset] = useState(0);
  const end = props.value;

  const center = 120 / 2;
  const radius = 120 / 2 - 15 / 2;
  const circumference = 2 * Math.PI * radius;

  const beginProgress = () => {
    if (progress < 1) {
      setProgress((prevCount) => prevCount + 1);
    }
  };

  useEffect(() => {
    if (progress > 0 && progress < end) {
      setTimeout(() => {
        setProgress((prevCount) => prevCount + 1);
      }, 1);

      const progressOffset = ((100 - progress) / 100) * circumference;
      setOffset(progressOffset);
    } else {
      const progressOffset = ((100 - progress) / 100) * circumference;
      setOffset(progressOffset);
    }
  }, [progress, circumference, end]);

  return (
    <Fade
      onVisibilityChange={(inView) => {
        if (inView) {
          beginProgress();
        }
      }}
    >
      <svg fill="#F3F4F6" width="120" height="120">
        <circle
          className="bg-blend-normal"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth="10"
        />
        <circle
          stroke={props.color}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="my-2 flex justify-center font-bold text-xl">
        <h3>{progress}%</h3>
      </div>
    </Fade>
  );
}
