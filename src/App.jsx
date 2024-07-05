// App.js
import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Holder from "./pages/Holder";
import Loader from "./pages/Loader";
import "./App.css";
import { useCursor } from "../src/context/useCustomCursor";
import { getVariants } from "../src/context/variants";
import { useMainDashContext } from "../src/context/AppContext";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const { isDarkMode } = useMainDashContext();
  const { mousePosition, cursorVariant } = useCursor();

  const variants = getVariants(mousePosition);

  const [landingLoaded, setLandingLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLandingLoaded(true);
    }, 2800);
  }, []);

  return (
    <>
      {mousePosition ? (
        <>
          <motion.div
            className={`cursor ${
              isDarkMode ? "bg-white" : "bg-black"
            } h-3 w-3 rounded-full fixed z-50 pointer-events-none`}
            style={{
              top: `${mousePosition.y}px`,
              left: `${mousePosition.x}px`,
            }}
          />
          <motion.div
            className={`cursor-style h-10 w-10 fixed z-50 pointer-events-none -top-2 -left-1 border rounded-full  ${
              isDarkMode ? "border-white" : "border-black"
            }`}
            variants={variants}
            animate={cursorVariant}
          />
        </>
      ) : null}
      {landingLoaded ? (
        <Holder />
      ) : (
        <AnimatePresence>
          <motion.div
            className="bg-black w-full h-[100vh] items-center justify-center flex flex-col"
            exit={{
              y: 500,
              transition: {},
            }}
          >
            <Loader xl={"xl"} />
          </motion.div>
        </AnimatePresence>
      )}
      <Analytics />
      <SpeedInsights />
    </>
  );
};

export default App;
