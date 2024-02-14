import React from "react";
import gotoWhite from "../assets/gotWhite.png";
import gotoBlack from "../assets/gotoBlack.png";
import { useCursor } from "../context/useCustomCursor";
import { useMainDashContext } from "../context/AppContext";

const Page5 = () => {
  const { isDarkMode } = useMainDashContext();
  const { textEnter, textLeave } = useCursor();
  const handleGetInTouchClick = () => {
    window.location.href = "mailto:shivatadigadapa@gmail.com?subject=Inquiry";
  };
  return (
    <div className="lg:p-20 p-10 justify-around gap-24 lg:h-full flex flex-col">
      <div className="flex flex-col gap-8">
        <h1 className="lg:text-4xl text-2xl">Who stands behind your Work's?</h1>
        <h1
          className="lg:w-[80%] tracking-wider  text-4xl lg:text-6xl"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          Full-stack coding maestro with{" "}
          <span className="text-zinc-500"> 4 years </span>of diverse development
          expertise.<span className=" text-zinc-500">.</span>
          <span className=" text-zinc-700">.</span>
        </h1>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center justify-center group">
          <h1
            className={`rounded-full ${
              isDarkMode ? " border-white" : "border-black"
            } border-2 px-4 py-5 lg:px-8 lg:py-5 lg:text-4xl hover:bg-white/90 hover:text-black transition-all`}
            onClick={handleGetInTouchClick}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            GET IN TOUCH
          </h1>
        </div>
        <div className="lg:text-3xl items-start justify-between h-full lg:gap-4 flex flex-col">
          <div className="flex group flex-col justify-center ">
            <div
              className="flex gap-6 lg:gap-10"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              <a
                href="https://github.com/Shiva-Tadigadapa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <h1>Github</h1>
                {isDarkMode ? (
                  <img src={gotoWhite} className="w-7 h-7" alt="gotoBlack" />
                ) : (
                  <img src={gotoBlack} className="w-7 h-7" alt="gotoBlack" />
                )}
              </a>
            </div>
            <hr
              className={` ${
                isDarkMode ? "border-white" : "border-black"
              } border-b-2 w-0 group-hover:w-full`}
              style={{ transition: "width 0.3s ease-out" }}
            />
          </div>
          <div className="flex group flex-col justify-center ">
            <div
              className="  flex gap-3 lg:gap-10"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              <a
                href="https://linkedin.com/in/tbalashiva/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <h1 className="">Linkedin</h1>
                {isDarkMode ? (
                  <img src={gotoWhite} className="w-7 h-7" alt="gotoBlack" />
                ) : (
                  <img src={gotoBlack} className="w-7 h-7" alt="gotoBlack" />
                )}
              </a>
            </div>
            <hr
              className={` ${
                isDarkMode ? "border-white" : "border-black"
              } border-b-2 w-0 group-hover:w-full`}
              style={{ transition: "width 0.3s ease-out" }}
            />
          </div>
          <div className="flex group flex-col justify-center ">
            <div
              className="flex gap-5 lg:gap-10"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <h1 className="">Twitter</h1>
                {isDarkMode ? (
                  <img src={gotoWhite} className="w-7 h-7" alt="gotoBlack" />
                ) : (
                  <img src={gotoBlack} className="w-7 h-7" alt="gotoBlack" />
                )}
              </a>
            </div>
            <hr
              className={` ${
                isDarkMode ? "border-white" : "border-black"
              } border-b-2 w-0 group-hover:w-full`}
              style={{ transition: "width 0.3s ease-out" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5;
