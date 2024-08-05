import { useScroll,motion, useTransform } from "framer-motion";
import React, { useRef } from "react";
import img1 from '../assets/image2.png'
import img2 from "../assets/image3.png";
import img3 from "../assets/image4.png";
const AboutCard = ({content, i,range,targetScale,progress }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(progress, range, [1, targetScale]);


  return (
    <div
      ref={container}
      className=" md:h-screen flex justify-center items-center sticky  -top-[130px] sm:-top-10  md:top-[150px] xl:top-[100px]"
    
    >
      <motion.div
         style={{scale ,top:`calc(-10% + ${i * 25}px)`}} 
        className={` w-[350px] sm:w-[600px] sm:h-auto md:w-[1000px] h-[770px]  md:h-[550px] rounded-lg card relative `}
      >
          <img src={img2} alt="" className=" w-16 absolute top-6 left-4" />
          <img src={img3} alt="" className=" w-16 absolute right-4  bottom-6" />
        <img className=" absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-auto" src={img1} alt="" />
        <img className=" absolute rotate-180 top-0 left-1/2 -translate-x-1/2 w-[1000px] h-auto" src={img1} alt="" />
        {content}
      </motion.div>
    </div>
  );
};

export default AboutCard;
