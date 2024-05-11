"use client";

import { useGetAllEducationQuery } from "@/redux/features/feathers/educations/educationApi";
import { TEducations, TSkills } from "@/types";
import Image from "next/image";
import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const DashboardEducationPage = () => {
  const { data } = useGetAllEducationQuery(undefined);
  console.log(data);
  return (
    <div>
      <h1 className="text-primary">
        Here Is My All <span className="text-primary">Education</span>
      </h1>
      <div className="grid grid-cols-2 gap-5 p-6">
        {data?.map((item: TEducations) => (
          <div
            key={item._id}
            className="flex gap-4 items-center justify-between py-7 px-5 rounded shadow border border-neutral-200 group hover:-translate-y-1 transition-all duration-500"
          >
            <Image
              src={item.icon}
              height={70}
              width={70}
              className="rounded group-hover:scale-90 transition-all duration-500"
              alt="institute image"
            />
            <div className="flex flex-col gap-2">
              <h1 className=" font-medium text-xl">{item.title}</h1>
              <div className="flex items-center gap-4">
                <h1 className="">{item.name}</h1>
                <h4 className=" text-sm">({item.session})</h4>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <BiEdit className="size-6 text-primary" />
              <MdDelete className="size-6 text-red-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardEducationPage;
