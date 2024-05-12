"use client";


import EducationModal from "@/components/modals/EducationsModal";
import { useGetAllEducationQuery, useRemoveEducationMutation } from "@/redux/features/feathers/educations/educationApi";
import { TEducations } from "@/types";
import Link from "next/link";
import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { toast } from "sonner";

const DashboardEducationPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [editById, setEditById] = useState<string | null>(null);
  const { data, isLoading } = useGetAllEducationQuery(undefined);
  const [removeEducation, {isSuccess}] = useRemoveEducationMutation()

  if (isLoading) {
    return <div className="pl-[43%] text-3xl font-medium text-primary mt-12">Loading...</div>;
  }

  
 const handleDelete = (id: string) => {
  removeEducation(id);
    if (isSuccess) {
      toast.success("Education is deleted");
    }
 }

 const handleShowModal = () => {
  setShowModal(!showModal);
};

  return (
    <>
      <div className=" mx-auto flex flex-col shadow-2xl rounded-lg mt-5 mb-10 p-8 pt-2">
      <div className="flex justify-between items-center mb-2">
      <h1 className="text-xl mb-5 font-bold" >
        MY <span className="text-primary">Education</span>
      </h1>
      <Link href='/dashboard/educations/add-education'>
      <button className="btn hover:border-primary py-2 text-white">Add Education</button>
      </Link>
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
                <tr key={index}>
              <td className="text-center text-xl font-medium border border-slate-300">{index + 1}</td>
              <td className="text-xl font-medium px-3 border border-slate-300">{item?.name} </td>
              <td className="text-xl font-medium px-3 border border-slate-300">{item?.session} </td>
              <td className="px-6 py-3 w-1 mx-auto text-lg border border-slate-300">
                <BiEdit 
                  onClick={() => {setEditById(item?._id); handleShowModal();}} 
                className="size-10 p-2 rounded-full text-primary bg-gray-200 cursor-pointer" />
              </td>
              <td onClick={() => handleDelete(item._id)} className="px-6 py-3 w-1 mx-auto text-lg border border-slate-300">
              <MdDelete className="size-10 p-2 rounded-full text-red-500 bg-gray-200 cursor-pointer" />
              </td>
            </tr>
              ))
            }
          </tbody>
        </table>

          {showModal && ( <EducationModal
              onClose={() => {setShowModal(false) }} skillId={editById}/>
          )}


      </div>
    </>
  );
};

export default DashboardEducationPage;

