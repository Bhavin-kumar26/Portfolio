import React, { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";

const Contact = () => {
  const handleClick = () => {
    window.location.href =
      "mailto:ajbhavinkumar@gmail.com?subject=Hello&body=Just saying hello!";
  };

  return (
    <div id="contact" className="  bg-[#010117] text-white py-[40px] md:py-[72px]">
      <div className=" flex flex-col justify-center items-center">
        <h4 className=" text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3">
          Hire <span className=" text-[#c5b3ef]">Me</span>
        </h4>
        <p className=" text-white/80 text-center">
          Reach out to me today and let's work together
        </p>
        <div>
          {" "}
          <button
            onClick={handleClick}
            className=" relative inline-flex h-12 w-full md:w-60 overflow-hidden mt-6 rounded-lg p-[1px] focus:outline-none"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span
              className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
         bg-slate-950 px-7  font-bold  text-white backdrop-blur-3xl gap-2   `}
            >
              Say Hello
              {/* <FaLocationArrow className=" text-lg" /> */}
            </span>
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
