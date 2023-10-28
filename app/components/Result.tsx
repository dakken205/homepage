"use client";

import { useEffect, useRef, useState } from "react";
import * as styles from "@/app/about/page.css";

type ResultProps = {
  date: string;
  title: string;
  children: React.ReactNode;
};

export default function Result({ date, title, children }: ResultProps) {
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
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={isPerspective ? styles.resultItem : ""} ref={ref}>
      <p className={styles.resultItemDate}>{date}</p>
      <h3 className={styles.resultItemTitle}>{title}</h3>
      {children}
    </div>
  );
}
