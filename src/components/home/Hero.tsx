/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import bg_bannar from "@/assets/images/bg_banner.png";
import bannar from "@/assets/images/bannar.webp";

const Hero = () => {
  return (
    <div
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
        <div className="flex justify-between text-secondary bg-opacity-40 relative">
          {" "}
          <div className="mt-[18%] md:mt-[12%] pb-24 relative">
            {" "}
            <h1 className="text-2xl font-bold mb-1">Hello I'm MD Waliullah</h1>
            <h2 className="text-2xl md:text-[35px] font-bold">
              Junior <span className="text-primary">FRONT END</span> Developer
            </h2>
            <p className="md:w-[500px] text-xl text-justify font-medium  my-4">
              I m a self-learner person. I am constantly gaining new skills in
              web development. By which I can give some good benefit to your
              Team. Besides, I am a hard-working and creative person
            </p>
            <a href="/waliullah_resume.pdf" download="waliullah resume.pdf">
              <button className="btn">Download Resume</button>
            </a>
          </div>
          <Image
            className="hidden md:block h-[593px] w-full "
            src={bannar}
            height={400}
            width={400}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
