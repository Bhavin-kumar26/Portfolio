import React from "react";
import Button from "./Button";
import { Link } from "react-scroll";
import { FaLocationArrow } from "react-icons/fa6";

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
            Designing Tomorrow’s Web Experiences{" "}
            <span className=" text-[#c5b3ef]">Today</span>
          </h1>
          <h2 className=" mt-6 text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-[1.3rem] font-medium ">
            Hi! I'm Bhavin Kumar, a Frontend Developer based in India
          </h2>
          <div className=" mt-6 sm:mt-4">
            <Link 
            to="projects" 
            spy={true} 
            smooth={true} 
            offset={10} 
            duration={1000} 
            className=" relative inline-flex h-12 w-full md:w-60 overflow-hidden rounded-lg p-[1px] focus:outline-none">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span
                className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
         bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2  `}
              >
                Show my work
                <FaLocationArrow className=" text-lg" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
