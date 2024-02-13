import React from "react";
import { useCursor } from "../context/useCustomCursor";
import { useMainDashContext } from "../context/AppContext";

const Page3 = () => {
  const {textEnter, textLeave } = useCursor();
  const { isDarkMode } = useMainDashContext();

  return (
    <div>
      <h1
        className="text-7xl p-20"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        {" "}
        <span className={`${isDarkMode ? "text-purple-200" : "text-black/50"}`}>
          Unlimited
        </span>{" "}
        full-stack{" "}
        <span
          className={`${isDarkMode ? "text-zinc-600" : "text-[#414141] "} mr-4`}
        >
          development
        </span>{" "}
        services{" "}
        <span className={`${isDarkMode ? "text-yellow-200" : "text-zinc-400"}`}>
          ∞
        </span>{" "}
        Ongoing{" "}
        <span
          className={`${
            isDarkMode ? "text-purple-200" : "text-black/50 "
          } ml-3`}
        >
          support{" "}
          <span className={`${isDarkMode ? "text-zinc-400" : "text-zinc-400"}`}>
            &
          </span>{" "}
          revisions
        </span>{" "}
        → Flexible and{" "}
        <span className={`${isDarkMode ? "text-zinc-600" : "text-[#414141]"}`}>
          adaptable.
        </span>
      </h1>
    </div>
  );
};

export default Page3;
