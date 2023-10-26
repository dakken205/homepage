"use client";

import { useEffect } from "react";
import Vivus from "vivus";

export default function App() {
  useEffect(() => {
    new Vivus("signature", {
      duration: 150,
      file: "/signature.svg",
      type: "oneByOne",
    });
  }, []);

  return <div id="signature" />;
}
