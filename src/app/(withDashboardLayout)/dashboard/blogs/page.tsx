"use client";
import { useGetAllBlogQuery } from "@/redux/features/feathers/blogs/blogApi";
import { TSkills } from "@/types";
import Image from "next/image";
import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const DashboardSkillPage = () => {
  const { data } = useGetAllBlogQuery(undefined);
  console.log(data);
  return (
    <div>
      <h1 className="text-primary">
        Here Is My All <span className="text-primary">Skills</span>
      </h1>
      <div className="grid grid-cols-3 gap-5 p-6">
        {data?.map((item: TSkills) => (
          <div
            key={item._id}
            className="w-72 border shadow rounded flex items-center justify-between gap-4 p-3"
          >
            <div className="flex gap-4 items-center">
              <Image
                src={item?.image}
                height={70}
                width={70}
                alt="skill image"
              />
              <h1> {item?.name} </h1>
            </div>
            <div className="flex gap-2">
              <BiEdit className="size-6 text-primary" />
              <MdDelete className="size-6 text-red-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardSkillPage;
