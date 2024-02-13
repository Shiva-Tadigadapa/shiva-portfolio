import React, { useEffect } from "react";
import img9 from "../assets/White/ico/Electro.ico";
import img10 from "../assets/Black/ico/Electro.ico";
import { useCursor } from "../context/useCustomCursor";
import { useMainDashContext } from "../context/AppContext";

const Page2 = () => {
  const { isDarkMode} = useMainDashContext();
  const {textEnter, textLeave } = useCursor();

  useEffect(() => {
    const canvas = document.getElementById("circleTextCanvas");
    const ctx = canvas.getContext("2d");

    const drawCircularText = (text, radius, centerX, centerY, angle) => {
      const characters = text.split("");

      characters.forEach((char, index) => {
        const charAngle = angle + (index * (Math.PI * 2)) / characters.length;

        const x = centerX + Math.cos(charAngle) * radius;
        const y = centerY + Math.sin(charAngle) * radius;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(charAngle + Math.PI / 2);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "15px bold puku sans-serif"; // Set font size and weight
        ctx.letterSpacing = 10; // Set letter spacing
        ctx.fillStyle = isDarkMode ? "white" : "black"; // Set text color to white in dark mode, otherwise black
        ctx.fillText(char, 0, 0);
        ctx.restore();
      });
    };

    const text = "SCROLL DOWN ";
    const radius = 40;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const angle = Math.PI / 2;

    drawCircularText(text, radius, centerX, centerY, angle);

    // Draw the image
    const img = new Image();
    img.src = isDarkMode ? img9 : img10;
    img.onload = () => {
      const imgWidth = 20; // Set image width
      const imgHeight = 20; // Set image height
      const imgX = centerX - imgWidth / 2;
      const imgY = centerY - imgHeight / 2;
      ctx.drawImage(img, imgX, imgY, imgWidth, imgHeight);
    };
  }, [isDarkMode]);

  return (
    <>
      <div className="p-14 flex flex-col relative">
        <div>
          <h1 className="text-9xl font-semibold tracking-wide ">FULLSTACK </h1>
          <h1 className="text-9xl font-semibold px-14 tracking-wide">
            DEVELOPER
          </h1>
        </div>
        <div className="scroll-down ml-[85%] mt-[8%] overflow-hidden ">
          <canvas
            id="circleTextCanvas"
            className="h-24 w-48 overflow-hidden animate-spin-slow" // Increase height and width
            width="200" // Adjust canvas size
            height="100"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          />
          {/* <img src={whiteScroll} className="h-20 w-20 animate-bounce" alt="" /> */}
        </div>
      </div>
    </>
  );
};

export default Page2;
