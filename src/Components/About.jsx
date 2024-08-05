import React, { useRef } from "react";
import AboutCard from "./AboutCard";
import { useScroll, motion, useTransform } from "framer-motion";
import AboutMe from "./AboutMe";
import AboutEducation from "./AboutEducation";
import AboutSkills from "./AboutSkills";

const About = () => {
  const projects = [
    {
      content: <AboutMe />,
    },
    {
      content: <AboutEducation />,
    },
    {
      content: <AboutSkills />,
    },
  ];
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <div ref={container} id="about" className="  bg-[#010117]">
      <h1 className=" text-white font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl text-center">
        Get to Know About <span className=" text-[#c5b3ef]">Me</span>  
      </h1>
      <div className=" px-5  mt-5 lg:pt-20">
        {projects.map((project, index) => {
          const targetScale = 1 - (projects.length - index) * 0.05;
          return (
            <AboutCard
              key={index}
              i={index}
              {...project}
              progress={scrollYProgress}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </div>
  );
};

export default About;
