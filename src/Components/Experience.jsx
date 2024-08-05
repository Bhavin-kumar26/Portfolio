import React from "react";
import ExperienceBox from "./ExperienceBox";

const Experience = () => {
  const features = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "Codsoft",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      date: "March 2024 - April 2024",
      className: "md:col-span-2",
      thumbnail: "src/assets/thumbnail1.png",
    },
    {
      id: 2,
      title: "Frontend Developer Intern",
      company: "Octanet",
      date: "July 2024 - August 2024",
      desc: "Developed and maintained user-facing features using modern frontend technologies at Octanet.",
      className: "md:col-span-2",
      thumbnail: "src/assets/thumbnail1.png",
    },
  ];
  return (
    <div id="experience" className="  bg-[#010117] text-white py-[72px] p-3">
      <div className=" flex justify-center items-center flex-col">
        <h4 className=" text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3">
          My Work   <span className=" text-[#c5b3ef]">Experience</span> 
        </h4>
        <div className=" flex flex-col sm:flex-row gap-5 mt-8 ">
          {features.map((items, index) => (
            <ExperienceBox key={index} {...items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
