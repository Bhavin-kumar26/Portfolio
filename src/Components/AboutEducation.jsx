import React from "react";

const AboutEducation = () => {
  return (
    <div className=" p-5 md:p-20 flex flex-col gap-5">
      <h4 className=" font-bold text-2xl">Education</h4>
      <div>
        <h2 className=" font-semibold italic text-lg">
          Bachelor of Engineering (B.E.) in Computer Science
        </h2>{" "}
        <strong>Sethu Institute of Technology</strong> <br />
        <p className=" italic ">
          2022 – 2026 (Expected) <br />
        </p>
        <p className=" mt-1  ">
          Pursuing a degree in Computer Science, focusing on advanced topics and
          practical skills in software development and technology.
        </p>
      </div>
      <div>
        <h2 className=" font-semibold italic text-lg">High School</h2>
        <div>
          <h2 className=" font-semibold italic text-lg">
            Mahatma CBSE School, Madurai
          </h2>{" "}
          <p className=" italic ">
            2008 – 2022 
          </p>
          <p className=" mt-1">
            Completed schooling from Grade 1 to Grade 12, acquiring a strong
            foundation in core subjects and engaging in various extracurricular
            activities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutEducation;
