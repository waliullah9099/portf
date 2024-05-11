"use client";
import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector("#cursor");
    const cursor2 = document.querySelector("#cursor2");

    const handleMouseMove = (e) => {
      cursor.style.cssText =
        cursor2.style.cssText = `left:${e.clientX}px; top:${e.clientY}px;`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div id="cursor"></div>
      <div id="cursor2"></div>
    </div>
  );
};

export default Cursor;
