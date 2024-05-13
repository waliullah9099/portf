"use client"

/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import bannar from "@/assets/images/bannar.webp";
import { motion } from "framer-motion";

const Hero = () => {
  const intro = {
    hidden: { opacity: 0.5, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  const introChildren = {
    hidden: { opacity: 0, scale: 0.3 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <motion.div
      className="mt-16 md:mt-[72px] border-slate-600 border-b"
      style={{
        backgroundImage: `url(https://i.ibb.co/LrQ9HQW/banner-optimized-50.png)`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0F172A] opacity-70"></div>

      <div id="home" className="max-w-7xl mx-auto px-8 relative">
        {" "}
        <motion.div className="flex justify-between text-secondary bg-opacity-40 relative">
          {" "}
          <motion.div variants={intro}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.4,
              staggerChildren: 0.3,
            }} className="mt-[18%] md:mt-[12%] pb-24 relative">
            {" "}
            {/* <div> */}

            <motion.h1 variants={introChildren} className="text-2xl font-bold mb-1">Hello I'm MD Waliullah</motion.h1>
            <motion.h2 variants={introChildren} className="text-2xl md:text-[35px] font-bold">
              Junior <span className="text-primary">FRONT END</span> Developer
            </motion.h2>
            <motion.p variants={introChildren} className="md:w-[500px] text-xl text-justify font-medium  my-4">
              I m a self-learner person. I am constantly gaining new skills in
              web development. By which I can give some good benefit to your
              Team. Besides, I am a hard-working and creative person
            </motion.p>
            <motion.a variants={introChildren} href="/waliullah_resume.pdf" download="waliullah resume.pdf">
              <button className="btn">Download Resume</button>
            </motion.a>
            {/* </div> */}
          </motion.div>
          <motion.span  initial={{ x: 200, scale: 0.6 }}
            animate={{ x: 0, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.5,
            }}>
          <Image
           
           className="hidden md:block h-[593px] w-full "
           src={bannar}
           height={400}
           width={400}
           alt=""
           />
           </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
