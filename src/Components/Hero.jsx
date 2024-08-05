import React from "react";
import Button from "./Button";
import { CiLocationArrow1 } from "react-icons/ci";

const Hero = () => {
  return (
    <div className=" pb-20 flex justify-center items-center  h-screen text-white ">
      <div className="container mx-auto px-1 ">
        <div className="absolute inset-0 h-screen w-full bg-[linear-gradient(to_right,#80808012_2px,transparent_2px),linear-gradient(to_bottom,#80808012_2px,transparent_2px)] bg-[#010117] bg-[size:45px_45px] -z-10" />
        <div className=" flex justify-center items-center flex-col">
          <h5 className=" uppercase tracking-widest font-light text-xs text-center text-blue-100 max-w-80">
            dynamic web magic with react js
          </h5>
          <h1 className=" text-center text-[40px] md:text-5xl lg:text-6xl font-bold max-w-[50rem] mt-3 ">
          Designing Tomorrow’s Web Experiences  <span className=" text-[#c5b3ef]">Today</span>
          </h1>
          <h2 className=" mt-6 text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-[1.3rem] font-medium ">Hi! I'm Bhavin Kumar, a Frontend Developer based in India</h2>
          <div className=" mt-6 sm:mt-4">
          <Button title={"Show my work"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
