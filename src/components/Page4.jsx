import React from "react";
import { motion, useAnimation } from "framer-motion";
import gotoWhite from "../assets/gotWhite.png";
import gotoBlack from "../assets/gotoBlack.png";
import { useCursor } from "../context/useCustomCursor";
import Dendro from "../assets/White/ico/Anemo.ico";
import DendroDark from "../assets/Black/ico/Anemo.ico";
import { useMainDashContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Page4 = () => {
  const { textEnter, textLeave } = useCursor();
  const { isDarkMode } = useMainDashContext();
  const navigate = useNavigate();
  const projects = [
    {
      id: 1,
      name: "BlackHole",
      imageUrl:
        "https://ik.imagekit.io/vsn/port/blackhole.png?updatedAt=1707673554888",
      dis: "Peer-to-peer file sharing, Scalable and distributed file exchange",
      link: "https://github.com/Shiva-Tadigadapa/BlackHole",
    },
    {
      id: 2,
      name: "Re:Event",
      imageUrl:
        "https://ik.imagekit.io/vsn/port/rvent.png?updatedAt=1707673045432",
      dis: "A complete event management and RSVP tracking software application.",
      link: "https://rvent.vercel.app/",
    },
    {
      id: 3,
      name: "D-Validate",
      imageUrl:
        "https://ik.imagekit.io/vsn/port/dvalidate.png?updatedAt=1707673043560",

      dis: "A blockchain based certificate validation system.",
      link: "https://dvalidate.netlify.app/",
    },
    {
      id: 4,
      name: "Bankai",
      imageUrl:
        "https://ik.imagekit.io/vsn/port/bankai2.jpg?updatedAt=1707669907438",
      dis: "A complete CMS and supply chain system application .",
      link: "https://github.com/Shiva-Tadigadapa/bankai",
    },
    {
      id: 5,
      name: "LMSEDU",
      imageUrl:
        "https://ik.imagekit.io/vsn/port/lmsed.png?updatedAt=1707673555747",
      dis: "A university Learning management system.",
      link: "",
    },
    {
      id: 6,
      name: "Health-Byte",
      imageUrl:
        "https://ik.imagekit.io/vsn/port/healthybyte.png?updatedAt=1707674846498",
      dis: "Health care management with donation, crowdfunding, video conferencing, ecom features.",
      link: "https://github.com/Shiva-Tadigadapa/HealthByte-ByteBash-Hackathon",
    },

    // Add more projects here
  ];

  const bankai = (link) => {
    if (link) {
      window.open(link, "_blank");
    } else {
      navigate("/");
    }
  };
  const projectAnimations = projects.map(() => ({
    controlsImage: useAnimation(),
    controlsText: useAnimation(),
    controlsGoto: useAnimation(),
  }));

  return (
    <div className="lg:p-20  p-10 relative overflow-hidden">
      <div>
        <div className=" flex items-center gap-3">
          {isDarkMode ? (
            <img src={Dendro} className="w-7   h-7" alt="Dendro" />
          ) : (
            <img src={DendroDark} className="w-7   h-7" alt="Dendro" />
          )}
          <h1 className="lg:text-4xl text-2xl"> Selected Projects</h1>
        </div>
        <hr className="mt-5 border-[#2b262b] mb-5" />
      </div>
      {projects.map((project, index) => (
        <div key={project.id} className="relative">
          <motion.div
            className="lg:h-[200px] h-[150px] gap-5 flex items-center relative"
            whileHover={{ scale: 0.95 }}
            onClick={() => bankai(project.link)}
            onHoverStart={() => {
              projectAnimations[index].controlsImage.start({
                x: 50,
                opacity: 1,
                transition: { duration: 0.5 },
              });
              projectAnimations[index].controlsText.start({
                x: 375,
                transition: { duration: 0.5 },
              });
              projectAnimations[index].controlsGoto.start({
                x: 150,
                opacity: 0.6,
                transition: { duration: 0.5 },
              });
            }}
            onHoverEnd={() => {
              projectAnimations[index].controlsImage.start({
                x: -100,
                opacity: 0,
                transition: { duration: 0.5 },
              });
              projectAnimations[index].controlsText.start({
                x: 0,
                transition: { duration: 0.5 },
              });
              projectAnimations[index].controlsGoto.start({
                x: -100,
                opacity: 0,
                transition: { duration: 0.5 },
              });
            }}
          >
            <div className="flex   items-center">
              <motion.img
                src={project.imageUrl}
                alt={project.name}
                className="w-[30%] h-full hidden lg:block md:block overflow-hidden  rounded-xl border-2 border-zinc-800 -ml-20"
                animate={projectAnimations[index].controlsImage}
                initial={{ x: 0, opacity: 0 }}
              />
              <motion.h1
                className="lg:text-8xl text-5xl lg:-ml-[18rem]"
                initial={{ x: 0 }}
                animate={projectAnimations[index].controlsText}
                transition={{ duration: 0.5 }}
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                {project.name}
              </motion.h1>
            </div>
            {isDarkMode ? (
              <motion.img
                src={gotoWhite}
                alt="goto"
                className="lg:h-10 lg:w-10 h-8 w-8 absolute  right-10 lg:right-56 lg:top-0"
                initial={{ x: 0, opacity: 0.5 }}
                animate={projectAnimations[index].controlsGoto}
                transition={{ duration: 0.5 }}
              />
            ) : (
              <motion.img
                src={gotoBlack}
                alt="goto"
                className="lg:h-10 lg:w-10 h-8 w-8 absolute  right-10 lg:right-56 lg:top-0"
                initial={{ x: 0, opacity: 0.8 }}
                animate={projectAnimations[index].controlsGoto}
                transition={{ duration: 0.5 }}
              />
            )}
          </motion.div>
          <h1 className="absolute right-10 bottom-3 text-gray-400 text-sm discription">
            {project.dis}
          </h1>
          <hr className="mt-5 border-[#2b262b] mb-5" />
        </div>
      ))}
    </div>
  );
};

export default Page4;
