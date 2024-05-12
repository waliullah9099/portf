"use client";


import { useGetAllEducationQuery } from "@/redux/features/feathers/educations/educationApi";
import { TEducations } from "@/types";
import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const DashboardEducationPage = () => {
  const { data } = useGetAllEducationQuery(undefined);
 const handleEdit = (id: string) => {
  console.log(id);
 }
 const handleDelete = (id: string) => {
  console.log(id);
 }
  return (
    <>
      <div className=" mx-auto flex flex-col shadow-2xl rounded-lg mt-5 mb-10 p-8 pt-2">
      <div className="flex justify-between items-center mb-2">
      <h1 className="text-xl mb-5 font-bold" >
        MY <span className="text-primary">Education</span>
      </h1>
      <button className="btn hover:border-primary py-2 text-white">Add Education</button>
        </div>
        <table className="w-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="w-0 text- px-3 py-2 border border-slate-300">Serial</th>
              <th className="text- px-6 py-3 border border-slate-300">Name</th>
              <th className="text- px-6 py-3 border border-slate-300">Session</th>
              <th className="text- px-6 py-3 border border-slate-300">Edit</th>
              <th className="text- px-6 py-3 border border-slate-300">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              data?.map((item: TEducations, index: number) => (
                <tr>
              <td className="text-center text-xl font-medium border border-slate-300">{index + 1}</td>
              <td className="text-xl font-medium px-3 border border-slate-300">{item?.name} </td>
              <td className="text-xl font-medium px-3 border border-slate-300">{item?.session} </td>
              <td className="px-6 py-3 w-1 mx-auto text-lg border border-slate-300">
              <BiEdit onClick={() => handleEdit(item._id)} className="size-10 p-2 rounded-full text-primary bg-gray-200 cursor-pointer" />
              </td>
              <td onClick={() => handleDelete(item._id)} className="px-6 py-3 w-1 mx-auto text-lg border border-slate-300">
              <MdDelete className="size-10 p-2 rounded-full text-red-500 bg-gray-200 cursor-pointer" />
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

export default DashboardEducationPage;

