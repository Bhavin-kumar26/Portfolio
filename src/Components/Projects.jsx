import React from "react";
import ProjectsCard from "./ProjectsCard";
import { data } from "../asset";
const Projects = () => {
  return (
    <div id="projects" className="  bg-[#010117] py-[72px]">
      <div className=" flex flex-col justify-center items-center  mb-16">
        <h4 className=" text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3">
          My <span className=" text-[#c5b3ef]">Projects</span>  
        </h4>
        <p className=" text-white/80 font-light">
          A small selection of recent projects.
        </p>
      </div>

      <div className="  flex justify-center md:max-w-[1248px] mx-auto flex-wrap gap-10 px-4">
        {data.map((items, index) => {
          return (
            <div key={index} className="project-card-wrapper  ">
              <ProjectsCard  {...items} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
