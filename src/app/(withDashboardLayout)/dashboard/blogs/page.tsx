"use client";

import SkillsModal from "@/components/modals/SkillsModal";
import { useGetAllBlogQuery, useRemoveBlogMutation } from "@/redux/features/feathers/blogs/blogApi";
import { TSkills } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { toast } from "sonner";

const DashboardBlogPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [editById, setEditById] = useState<string | null>(null);
  const { data, isLoading } = useGetAllBlogQuery(undefined);
  const [removeBlog, {isSuccess}] = useRemoveBlogMutation();


  if (isLoading) {
    return <div className="pl-[43%] text-3xl font-medium text-primary mt-12">Loading...</div>;
  }



   const handleDelete = (id: string) => {
    removeBlog(id);
    if (isSuccess) {
      toast.success("skill is deleted");
    }
   } 


   const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className=" md:w-4/5 mx-auto flex flex-col shadow-2xl rounded-lg mt-5 mb-10 p-8 pt-2">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-xl mb-5 font-bold" >
             MY <span className="text-primary">BLOGS</span>
            </h1>
        <Link href='/dashboard/blogs/add-blog'>
          <button className="btn hover:border-primary py-2 text-white">Add Blog</button>
        </Link>
          </div>
          <table className="w-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="w-0 text- px-3 py-2 border border-slate-300">Serial</th>
              <th className="text- px-6 py-3 border border-slate-300">Name</th>
              <th className="text- px-6 py-3 border border-slate-300">Image</th>
              <th className="text- px-6 py-3 border border-slate-300">Edit</th>
              <th className="text- px-6 py-3 border border-slate-300">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              data?.map((item: TSkills, index: number) => (
                <tr key={index}>
              <td className="text-center text-lg font-medium border border-slate-300">{index + 1}</td>
              <td className="text-xl font-medium text-center border border-slate-300">{item?.name} </td>
              <td className="text-center text-lg border border-slate-300">
              <Image
              className="w-12 mx-auto"
                src={item?.image}
                height={40}
                width={40}
                alt="skill image"
              />
              </td>
              <td className="px-6 py-3 w-1 mx-auto text-lg border border-slate-300">
                 <BiEdit
                     onClick={() => {setEditById(item?._id); handleShowModal();}} 
                     className="size-10 p-2 rounded-full text-primary bg-gray-200 cursor-pointer" />
              </td>
              <td className="px-6 py-3 w-1 mx-auto text-lg border border-slate-300">
              <MdDelete onClick={() => handleDelete(item._id)} className="size-10 p-2 rounded-full text-red-500 bg-gray-200 cursor-pointer" />
              </td>
            </tr>
              ))
            }
          </tbody>
          </table>

{/* 
          {showModal && ( <SkillsModal

              onClose={() => {setShowModal(false) }} skillId={editById}/>
           
           )} */}

      </div>
    </>
  );
};

export default DashboardBlogPage;
