"use client";



import { useGetAllProjectQuery, useRemoveProjectMutation } from "@/redux/features/feathers/projects/projectApi";
import { TProject } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { toast } from "sonner";

const DashboardProjectsPage = () => {
  const { data } = useGetAllProjectQuery(undefined);
  const [removeProject,{isSuccess}] = useRemoveProjectMutation();
  const handleEdit = (id: string) => {
    console.log(id);
   }
   const handleDelete = (id: string) => {
    removeProject(id);
    if (isSuccess) {
      toast.success("project is deleted");
    }
   }
  return (
    <>
      <div className=" flex flex-col shadow-2xl rounded-lg mt-5 mb-10 p-5 pt-2 mx-6">
        <div className="flex justify-between items-center mb-2">
      <h1 className="text-xl mb-5 font-bold" >
        MY <span className="text-primary">PROJECTS</span>
      </h1>
      <Link href='/dashboard/projects/add-project'>
      <button className="btn hover:border-primary py-2 text-white">Add Project</button>
      </Link>
        </div>
          
        <table className="w-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="w-0 text- px-3 py-2 border border-slate-300">Serial</th>
              <th className="text- px-6 py-3 border border-slate-300">Name</th>
              <th className="text- px-6 py-3 border border-slate-300">Image</th>
              <th className=" px-6 py-3 border border-slate-300">Technologies</th>
              <th className="text- px-6 py-3 border border-slate-300">Edit</th>
              <th className="text- px-6 py-3 border border-slate-300">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              data?.map((item: TProject, index: number) => (
                <tr>
              <td className="text-center text-lg font-medium border border-slate-300">{index + 1}</td>
              <td className="text-lg font-medium text-center border border-slate-300">{item?.name} </td>
              <td className="text-center text-lg border border-slate-300">
              <Image
              className="w-16 rounded mx-auto"
                src={item?.image}
                height={50}
                width={50}
                alt="skill image"
              />
              </td>
              <td className="text- px-2 text-center border border-slate-300">{item?.technologies} </td>
              <td className="px-6 py-3 w-1 mx-auto text-lg border border-slate-300">
              <BiEdit onClick={() => handleEdit(item?._id)} className="size-10 p-2 rounded-full text-primary bg-gray-200 cursor-pointer" />

              </td>
              <td className="px-6 py-3 w-1 mx-auto text-lg border border-slate-300">
              <MdDelete onClick={() => handleDelete(item._id)} className="size-10 p-2 rounded-full text-red-500 bg-gray-200 cursor-pointer" />
              </td>
            </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashboardProjectsPage;
