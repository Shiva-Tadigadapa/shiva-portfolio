import React from "react";
import { useMainDashContext } from "../context/AppContext";
import { motion } from "framer-motion";
import Page1 from "../components/Page1";
import Page2 from "../components/Page2";
import Page3 from "../components/Page3";
import Page4 from "../components/Page4";
import Page5 from "../components/Page5";

const Holder = () => {
  const { isDarkMode } = useMainDashContext();

  return (
    <>
      {/* {isDarkMode && (
        <motion.div
          className={'h-screen z-[999] bg-white opacity-0 absolute inset-0'}
          initial={{ opacity: 0.5, y: 0 }}
          animate={{ opacity: 0.5, y: -1000 }}
          transition={{ duration: 1 }}
        ></motion.div>
      )}
      {!isDarkMode && (
        <motion.div
          className="h-screen z-[999] bg-black absolute inset-0"
          initial={{ opacity: 0.5, y: 0 }}
          animate={{ opacity: 0.5, y: -1000 }}
          transition={{ duration: 1 }}
        ></motion.div>
      )} */}

      <motion.div
        className={`bg-${isDarkMode ? "dark" : "light"} text-${
          isDarkMode ? "light" : "dark"
        }  lg:max-w-[1500px]  select-none lg:select-auto overflow-hidden flex flex-col justify-center   h-full`}
      >
        <motion.div
          initial={{ opacity: 0, y: -400 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Page1 />
        </motion.div>
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
      </motion.div>
    </>
  );
};

export default Holder;
