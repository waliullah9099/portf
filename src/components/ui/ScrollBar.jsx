"use client";

import { useEffect } from "react";

const ScrollBar = () => {
  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    const scrollPercentage = () => {
      const scrollProgress = document.getElementById("progress");
      const progressValue = document.getElementById("progress-value");
      const pos = document.documentElement.scrollTop;
      const calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (pos === 0) {
        scrollProgress.style.display = "none";
      } else {
        scrollProgress.style.display = "";
        let scrollValue = Math.round((pos * 100) / calcHeight);
        let valueContent = "⇧";
        scrollProgress.style.background = `conic-gradient(#24a0d1  ${scrollValue}%,#2b294f ${scrollValue}%)`;
        progressValue.textContent = `${valueContent}`;
      }
    };

    // Execute scrollPercentage when the scroll event occurs
    window.addEventListener("scroll", scrollPercentage);
    // Execute scrollPercentage when the window loads
    window.addEventListener("load", scrollPercentage);

    // Clean up event listeners when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollPercentage);
      window.removeEventListener("load", scrollPercentage);
    };
  }, []); // Run only once when the component mounts

  return (
    <div>
      <div id="progress">
        <span onClick={scrollToTop} id="progress-value"></span>
      </div>
    </div>
  );
};

export default ScrollBar;
