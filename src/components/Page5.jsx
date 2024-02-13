import React from "react";
import gotoWhite from "../assets/gotWhite.png";
import gotoBlack from "../assets/gotoBlack.png";
import { useCursor } from "../context/useCustomCursor";
import { useMainDashContext } from "../context/AppContext";

const Page5 = () => {
  const { isDarkMode } = useMainDashContext();
  const { textEnter, textLeave } = useCursor();
  return (
    <div className="p-20 justify-around gap-24 h-screen flex flex-col">
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl">Who stands behind your Work's?</h1>
        <h1
          className="w-[80%] tracking-wider  text-6xl"
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
            } border-2 px-8 py-5 text-4xl hover:bg-white/90 hover:text-black transition-all`}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            GET IN TOUCH
          </h1>
        </div>
        <div className="text-3xl items-start justify-between h-full gap-4 flex flex-col">
          <div className="flex group flex-col justify-center ">
            <div
              className="flex gap-10"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              <h1>Github</h1>
              {isDarkMode ? (
                <img src={gotoWhite} className="w-7 h-7" alt="gotoBlack" />
              ) : (
                <img src={gotoBlack} className="w-7 h-7" alt="gotoBlack" />
              )}
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
              className="  flex gap-10"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              <h1 className="">Linkedin</h1>
              {isDarkMode ? (
                <img src={gotoWhite} className="w-7 h-7" alt="gotoBlack" />
              ) : (
                <img src={gotoBlack} className="w-7 h-7" alt="gotoBlack" />
              )}
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
              className="flex gap-10"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              <h1 className="">Twitter</h1>
              {isDarkMode ? (
                <img src={gotoWhite} className="w-7 h-7" alt="gotoBlack" />
              ) : (
                <img src={gotoBlack} className="w-7 h-7" alt="gotoBlack" />
              )}
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
