"use client";

import { useEffect, useRef, useState } from "react";
import * as styles from "./DepartmentAnimations.css";

export const DataScienceAnimation = () => {
  const [isPerspective, setIsPerspective] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsPerspective(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div ref={ref} style={{ position: "relative" }}>
      <svg
        className={isPerspective ? styles.bar : ""}
        style={{ position: "absolute" }}
      >
        <rect y="0%" width="30%" height="10%" fill="#333" />
        <rect y="20%" width="50%" height="10%" fill="#8e8e8e" />
        <rect y="40%" width="40%" height="10%" fill="#333" />
      </svg>
      <svg className={isPerspective ? styles.glass : ""}>
        <circle
          cy="50%"
          cx="50%"
          r="10%"
          fill="none"
          stroke="#fefefe"
          strokeWidth="5%"
        />

        <rect
          x="53%"
          y="0%"
          width="5%"
          height="30%"
          fill="#fefefe"
          transform="rotate(35, 0, 0)"
        />
      </svg>
    </div>
  );
};

export const BusinessAnimation = () => {
  return (
    <svg className={styles._stub}>
      <text y="10%" x="0" fill="#8e8e8e">
        Business Animation(Comming Soon)
      </text>
    </svg>
  );
};

export const DataEngineeringAnimation = () => {
  return (
    <svg className={styles._stub}>
      <text y="10%" x="0" fill="#8e8e8e">
        DataEngineering Animation(Comming Soon)
      </text>
    </svg>
  );
};
