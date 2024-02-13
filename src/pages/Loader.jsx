import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCursor } from "../context/useCustomCursor";

const Loader = (props) => {
  const { xl } = props;
  const [removeText, setRemoveText] = useState(false);
  const { mousePosition, cursorVariant, textEnter, textLeave } = useCursor();

  useEffect(() => {
    setTimeout(() => {
      setRemoveText(true);
    }, 2000);
  }, []);

  const text = "Welcome to my portfolio";
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.12, staggerDirection: 0.04*2 },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: -400,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <AnimatePresence>
      {/* <div className=" h-[100vh] w-full bg-black "> */}
      {!removeText && (
        <motion.div
          className={`flex   font-bold   text-white text-5xl justify-center items-center`}
          variants={container}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {words.map((word, index) => (
            <motion.span
              variants={child}
              style={{ marginRight: "5px" }}
              key={index}

              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      )}
      {/* </div> */}
    </AnimatePresence>
  );
};

export default Loader;
