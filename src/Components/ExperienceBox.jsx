import React, { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import img from "../assets/thumbnail1.png"
const ExperienceBox = ({ title, desc,company,date, }) => {
  const border = useRef();
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px,black,transparent)`;
  useEffect(() => {
    const updateMouse = (e) => {
      if (!border.current) return;
      const rect = border.current?.getBoundingClientRect();
      offsetX.set(e.x - rect.x);
      offsetY.set(e.y - rect.y);
    };
    window.addEventListener("mousemove", updateMouse);

    return () => {
      window.removeEventListener("mousemove", updateMouse);
    };
  }, []);

  return (
    <div className=" bg-reen-400 md:w-[350px] lg:w-[500px] h-auto flex flex-col justify-center items-center relative  rounded-xl px-10 py-5">
      <motion.div
        ref={border}
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
        className=" absolute inset-0 border-2 border-purple-100 rounded-xl "
      ></motion.div>
      <div className=" flex flex-col lg:flex-row justify-center items-center lg:justify-start gap-4 ">
        <img className=" w-32 object-cover rounded-lg" src={img} alt={title} />
        <div className=" flex flex-col justify-start items-start">
          <h3 className=" mt-6  font-semibold text-lg">{title}</h3>
          <h6 className=" font-medium uppercase mt-1">{company}</h6>
          <i className=" text-[13px] uppercase mt-1">{date}</i>
          <p className=" mt-2 text-md  text-white/60 ">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceBox;
