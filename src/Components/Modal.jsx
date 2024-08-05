import React from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

const Modal = ({ open, setOpen, title, Mainimg, Images, BigDesc, link }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={handleClose}
      className="fixed inset-0 z-50 bg-neutral-950/70  "
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{
          ease: "easeInOut",
        }}
        onClick={(e) => e.stopPropagation()}
        className="absolute bottom-0 h-[90vh] w-full overflow-y-scroll rounded-t-3xl mb-10 bg-neutral-900 p-1 md:p-10"
      >
        <div onClick={handleClose} className=" fixed  right-2 md:right-10 text-2xl cursor-pointer">
          <IoClose />
        </div>
        <div className=" flex flex-col justify-center items-center">
          {/* <img
            src={Mainimg}
            alt={title}
            className=" w-[400px] rounded-2xl object-cover"
          /> */}
          <h2 className=" text-2xl font-semibold mt-5"> {title} </h2>
          <p className=" text-sm font-light text-white/80 max-w-4xl text-center mt-2">
            {BigDesc}
          </p>
          <div className=" flex justify-center flex-col items-center">
            <h3 className=" text-lg md:text-2xl font-normal my-3">
              Here is the :
              <a
                href={link}
                target="blank"
                className=" font-light underline underline-offset-4"
              >
                {" "}
                Live Demo
              </a>
            </h3>
            <div className=" flex flex-col justify-center items-center">
              <div className=" flex items-start  w-[40%]">
                <h1 className=" mb-6 text-lg md:text-2xl font-bold tracking-tight">
                  Screenshots:
                </h1>
              </div>
              <div className=" flex flex-col justify-center items-center gap-10 ">
                {Images.map((image, index) => {
                  return (
                    <img className=" w-[80%] md:w-[70%]" src={image} alt="" />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
