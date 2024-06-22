"use client";

import { useEffect, useRef, useState } from "react";
import * as styles from "./DepartmentAnimations.css";

function useAnimation() {
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

  return { ref, isPerspective };
}

export const DataScienceAnimation = () => {
  const { ref, isPerspective } = useAnimation();

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
  const { ref, isPerspective } = useAnimation();

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <svg
        className={isPerspective ? styles.flush : ""}
        style={{ position: "absolute" }}
      >
        <rect
          x="45%"
          y="10%"
          width="6%"
          height="10%"
          fill="#eee"
          rx="1"
          ry="1"
          style={{
            rotate: "10deg",
          }}
        />
        <circle cx="47.5%" cy="17%" r="8%" fill="#eee" />
      </svg>
      <svg>
        <circle cx="25%" cy="30%" r="12%" stroke="#fff" strokeWidth="5%" />
        <rect x="22.5%" y="50%" width="4%" height="30%" fill="#fff" />
        <rect
          x="28%"
          y="50%"
          width="20%"
          height="5%"
          fill="#fff"
          rx="3"
          ry="3"
          style={{ transform: "rotate(10deg)" }}
          className={isPerspective ? styles.rightHand : ""}
        />
        <rect
          x="22%"
          y="60%"
          width="15%"
          height="5%"
          fill="#fff"
          rx="3"
          ry="3"
          style={{ transform: "rotate(-7deg)" }}
          className={isPerspective ? styles.leftHand : ""}
        />
      </svg>
    </div>
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
