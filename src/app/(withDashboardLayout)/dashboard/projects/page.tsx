"use client";

import { useGetAllProjectQuery } from "@/redux/features/feathers/projects/projectApi";
import { TProject } from "@/types";
import Image from "next/image";
import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const DashboardProjectsPage = () => {
  const { data } = useGetAllProjectQuery(undefined);
  console.log(data);
  return (
    <div>
      <h1 className="text-primary">
        Here Is My All <span className="text-primary">Project</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-6">
        {data?.map((item: TProject) => (
          <div
            key={item._id}
            className="relative cursor-pointer border border-slate-700 p-4 rounded w-[580px ]"
          >
            <div className="relative overflow-hidden group">
              <Image
                src={item.image}
                height={400}
                width={400}
                alt="project image"
                className="h-[300px] rounded-sm transition-transform duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100">
                <div className="text-white text-center">
                  <h1 className="font-dmserif text-3xl font-bold mb-2">
                    {item.name}
                  </h1>
                  <p className="text-lg italic">{item.technologies}</p>
                  <div className="mt-8">
                    <a
                      className="border border-gray-400 mr-3 py-2 px-3 rounded-sm shadow"
                      href={item.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Link
                    </a>
                    <a
                      className="border border-gray-400 mr-3 py-2 px-3 rounded-sm shadow"
                      href={item.client_side}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Client Sise
                    </a>
                    <a
                      className="border border-gray-400 mr-3 py-2 px-3 rounded-sm shadow"
                      href={item.server_side}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Server Sise
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-5">
              <p className="text-lg italic text-secondary border border-gray-600 bg-[#031621] px-2 py-2 rounded">
                {item.name}
              </p>
              <p className="text-secondary border border-gray-600 bg-[#031621] px-2 py-2 rounded">
                {item.project_type}
              </p>
              <div className="flex gap-3 text-secondary border border-gray-600 bg-[#031621] px-4 py-2 rounded">
                <BiEdit className="size-6 text-primary" />
                <MdDelete className="size-6 text-red-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardProjectsPage;
