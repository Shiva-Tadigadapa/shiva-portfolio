import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useMainDashContext } from "../context/AppContext";
import { useCursor } from "../context/useCustomCursor";
import img9 from "../assets/White/ico/Cryo.ico";
import img10 from "../assets/spring.png";
import { motion } from "framer-motion";

const Page1 = () => {
  const { isDarkMode, setIsDarkMode } = useMainDashContext();
  const { textEnter, textLeave } = useCursor();
  const toggleDarkMode = (checked) => {
    setIsDarkMode(checked);
  };

  // const [time, setTime] = useState(getFormattedTime());

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setTime(getFormattedTime());
  //   }, 1000);

  //   return () => clearInterval(intervalId);
  // }, []);

  // function getFormattedTime() {
  //   const date = new Date();
  //   const hours = date.getHours();
  //   const minutes = date.getMinutes();
  //   const seconds = date.getSeconds();
  //   return `${hours}:${minutes}:${seconds}`;
  // }

  return (
    <div className="flex items-center p-10 justify-between">
      <h1
        className={`${
          isDarkMode ? "bg-dark text-light" : "bg-light"
        } lg:text-4xl puku ml-5 font-medium`}
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        BALA SHIVA T.
      </h1>
      <div>

        <div
          className="flex items-center  justify-center gap-2 lg:gap-5 "
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          <div>
            <h1 className="lg:text-lg text-xs font-semibold tracking-wider">
              OPEN TO WORK
            </h1>
            <h1 className="text-xs  tracking-widest">Based In India</h1>
          </div>
          {isDarkMode ? (
            <motion.img src={img9} alt="dendro" className="lg:h-9 lg:w-9 h-5 w-5 animate-spin-slow" />
          ) : (
            <motion.img src={img10} alt="dendro" className="h-9 w-9 animate-spin-slow" />
          )}
        </div>
      </div>
      <div className=" z-[999] fixed left-0 p-3  mt-6">
        <DarkModeSwitch
          style={{ marginBottom: "2rem" }}
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={20}
        />
      </div>
    </div>
  );
};

export default Page1;
