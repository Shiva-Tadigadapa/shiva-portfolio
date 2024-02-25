import React, { useEffect } from "react";
import img9 from "../assets/White/ico/Electro.ico";
import img10 from "../assets/Black/ico/Electro.ico";
import { useCursor } from "../context/useCustomCursor";
import { useMainDashContext } from "../context/AppContext";
import { motion } from "framer-motion";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
  const { isDarkMode } = useMainDashContext();
  const { textEnter, textLeave } = useCursor();

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
      <div className="lg:p-14 p-10 lg:mt-0 flex flex-col relative">
        <div className="     select-none ">
          <motion.h1
            className="lg:text-9xl md:text-8xl sm:text-6xl  text-5xl font-semibold tracking-wide "
            initial={{ opacity: 0, y: -400 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            FULLSTACK{" "}
          </motion.h1>
          <motion.h1
            className="lg:text-9xl md:text-8xl sm:text-6xl  text-5xl font-semibold px-8 lg:px-14 tracking-wide"
            initial={{ opacity: 0, y: -600 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            DEVELOPER
          </motion.h1>
        </div>
        <motion.div
          className="scroll-down lg:ml-[85%] ml-[30%] mt-[8%] overflow-hidden "
          initial={{ opacity: 0, y: 500 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <canvas
            id="circleTextCanvas"
            className="h-24 w-48 hidden lg:block overflow-hidden animate-spin-slow" // Increase height and width
            width="200" // Adjust canvas size
            height="100"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          />
          {/* <img src={whiteScroll} className="h-20 w-20 animate-bounce" alt="" /> */}
        </motion.div>
      </div>
    </>
  );
};

export default Page2;
