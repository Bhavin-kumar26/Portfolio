import React, { useRef, useState } from "react";
import img1 from "../assets/image1.png";
import useMeasure from "react-use-measure";
import {
  useMotionTemplate,
  useMotionValue,
  useSpring,
  motion,
} from "framer-motion";
import Button from "./Button";
import Modal from "./Modal";
const ProjectsCard = ({ title, Mainimg, smallDesc,Images,BigDesc,link }) => {
  const [open, setOpen] = useState(false);
  const ROTATION_RANGE = 17;
  const HALF_ROTATION_RANGE = 17 / 2;
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <div>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          transform: "translateZ(75px)",
          transform,
        }}
        className="  md:w-[360px] lg:w-[460px] h-[650px] shadow-2xl  bg-[#0a0a32ab] rounded-xl md:p-5 shrink-0"
      >
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          className="flex flex-col justify-evenly  w-full h-full   p-2 "
        >
          <img
            style={{
              transform: "translateZ(50px)",
            }}
            className=" w-full h-1/2 object-cover"
            src={Mainimg}
            alt=""
          />
          <h4
            style={{
              transform: "translateZ(50px)",
            }}
            className=" font-bold text-lg my-1"
          >
            {title}
          </h4>
          <p
            style={{
              transform: "translateZ(50px)",
            }}
            className=" font-light text-white/70"
          >
            {smallDesc}
          </p>
          <div className=" flex justify-between items-center">
            <h5
              style={{
                transform: "translateZ(50px)",
              }}
              className=" mt-3  bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F082,#2FDBFE)] text-transparent bg-clip-text [-webkit-background-clip:text] text-lg font-bold"
            >
              <span>#React</span> <span>#Tailwind</span>
            </h5>
            <div>
              <button
                onClick={() => setOpen(!open)}
                className=" bg-white text-black w-30 rounded-full px-4 py-2 font-bold text-md cursor-pointer"
              >
                See More
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      {
        open && <Modal open={open} title={title} Images={Images} BigDesc={BigDesc} Mainimg={Mainimg} setOpen={setOpen} link={link}/>
      }
    </div>
  );
};

export default ProjectsCard;
