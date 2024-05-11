import { TSkills } from "@/types";
import Image from "next/image";
import React from "react";

const SkillBox = ({ skill }: { skill: TSkills }) => {
  return (
    <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer">
      <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-primary transition-all duration-500">
        <div className="flex -translate-y-[1px] justify-center">
          <div className="w-3/4">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 p-6">
          <div className="h-8 sm:h-10">
            <Image
              src={skill.image}
              alt={" slkill image"}
              width={40}
              height={40}
              className="h-full w-auto bg-transparent rounded-lg"
            />
          </div>
          <p className="text-white text-sm sm:text-lg uppercase">
            {skill.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillBox;
