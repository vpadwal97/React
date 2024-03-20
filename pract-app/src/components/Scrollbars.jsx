// App.js
import React from "react";

const Scrollbars = () => {
  window.addEventListener("scroll", () => {
    const scrollbar = document.getElementById("sbar");
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercentage = (window.scrollY / scrollHeight) * 100;
    scrollbar.style.width = scrollPercentage + "%";
  });

  return (
    <>
      <div
        // className="scroll-container position-absolute bottom-0"
        style={{ height: "6px", width: "100%", backgroundColor: "aliceblue" }}
      >
        <div
          className="scroll-bar"
          id="sbar"
          style={{ height: "5px", width: "0%", backgroundColor: "blueviolet" }}
        ></div>
      </div>
    </>
  );
};

export default Scrollbars;
