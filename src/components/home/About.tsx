/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import image from "@/assets/images/about.svg";
import SocialIcons from "@/components/ui/SocialIcons";

const About = () => {
  return (
    <div id="about" className="bg-[#03202E] py-16 border-slate-600 border-b">
      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="flex flex-col md:flex-row gap-8 text-white">
          <Image
            className="w-full md:w-[53%] h-[404px] py-8 mt-2 px-12 pr-16 rounded bg-[#041B26]"
            src={image}
            height={400}
            width={400}
            alt="about me image"
          />
          <div className="px-8">
            <h1 className="font-bold text-4xl mb-3">
              <span className="text-primary">ABOUT</span> ME
            </h1>
            <p className="text-lg text-justify">
              I'm MD Waliullah and I am passionate about web development. My
              goal is to satisfy clients by understanding what they want for
              their website. I work a minimum of 13-14 hours every day because I
              love it. I am also student of Al Hadith And Islamic Studies,
              Kushtia
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
              <div className="about-details-card">
                <h3 className="text-gray-400 font-semibold text-lg">Email</h3>
                <h3>waliullah9099@gmail.com</h3>
              </div>
              <div className="about-details-card">
                <h3 className="text-gray-400 font-semibold text-lg">Phone</h3>
                <h3>(+88)01518 935317</h3>
              </div>
              <div className="about-details-card">
                <h3 className="text-gray-400 font-semibold text-lg">Address</h3>
                <h3>Islamic University, Kushtia</h3>
              </div>
              <div className="about-details-card">
                <h3 className="text-gray-400 font-semibold text-lg">Follow</h3>
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
