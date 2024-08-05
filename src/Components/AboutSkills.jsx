import React from "react";

const AboutSkills = () => {
  const data = [
    {
      icon: <i className=" text-6xl devicon-html5-plain colored" />,
      name: "HTML 5",
    },
    {
      icon: <i className=" text-6xl devicon-css3-plain colored" />,
      name: "CSS 3",
    },
    {
      icon: <i className=" text-6xl devicon-javascript-plain colored"></i>,
      name: "JAVASCRIPT",
    },
    {
      icon: <i className=" text-6xl devicon-react-original colored"></i>,
      name: "REACT",
    },
    {
      icon: <i className=" text-6xl devicon-tailwindcss-original"></i>,
      name: "TAILWIND CSS",
    },
    {
      icon: <i className="text-6xl devicon-framermotion-original"></i>,
      name: `FRAMER`,
    },
    {
      icon: <i className=" text-6xl devicon-redux-original colored"></i>,
      name: "REDUX",
    },
    {
      icon: <i className=" text-6xl devicon-git-plain colored"></i>,
      name: "GIT",
    },
    {
      icon: <i className=" text-6xl devicon-github-original"></i>,
      name: "GITHUB",
    },
    {
      icon: <i className="text-6xl devicon-vercel-original"></i>,
      name: " VERCEL",
    },
  ];
  return (
    <div className=" p-5 md:p-20  w-full ">
      <h2 className=" text-2xl font-bold text-center mb-10">My Skills</h2>
      <div className=" grid grid-cols-2 md:grid-cols-4  lg:grid-cols-5 gap-10">
        {data.map(({ icon, name },index) => {
          return (
            <div key={index} className=" flex flex-col justify-center items-center gap-2">
              {icon}
              <h3 className=" font-semibold">{name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutSkills;
