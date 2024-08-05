import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" bg-[#010117] text-white md:px-20 py-[30px]">
      <div className="container flex flex-col sm:flex-row gap-3 sm:justify-between">
        <h6 className=" text-sm text-white/60 text-center">
          Copyright © 2024 Bhavin Kumar{" "}
        </h6>
        <div>
          <ul className=" flex justify-center gap-3 text-xl">
            <li>
              <a href="https://www.linkedin.com/in/bhavin-kumar-a-j-9b831a248" target="blank">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/Bhavin-kumar26" target="blank">
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
