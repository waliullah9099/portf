"use client";

import { useCreateBlogMutation } from "@/redux/features/feathers/blogs/blogApi";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import JoditEditor from 'jodit-react';
import { toast } from "sonner";
import { useRef, useState } from "react";

const AddBlog = () => {

  const editor = useRef(null);
  const [content, setContent] = useState('');

  const [addBlog, { isSuccess }] = useCreateBlogMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();



  const onSubmit: SubmitHandler<FieldValues> = (data) => {    
             addBlog(data);
         
          if (isSuccess) {
            toast.success("blog has added");
            reset();
          }
  };

  return (
    <div className="w-[600px] md:w-4/5 mx-auto mt-8 shadow-2xl rounded-lg p-6">
      <form
        className="w-[500px] md:w-4/5 mx-auto space-y-5 border shadow rounded border-secondary p-4 lg:p-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-4xl font-semibold text-center mb-3">
          Add <span className="text-primary">Blog </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
   

        <div className="space-y-2">
            <label className="text-xl">Title</label>
            <input
              id="title"
              className="w-full text-gray-400 border px-4 py-2 shadow-sm rounde"
              placeholder="Title"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className="text-sm text-red-400">Title is required</span>
            )}
          </div>

          <div className="space-y-2 ">
            <label className="text-xl">Image </label>
            <input 
            id="image"
             className="w-full text-gray-400 border px-4 py-2 shadow-sm rounded" type="text" 
             placeholder="Image"
             {...register("image")} />
          </div>
          
        </div>

        <label className="text-xl mt-2">Post Content </label>
        <JoditEditor 
        
            ref={editor}
            value={content}

        />

            <div className="text-end">
                <button className="btn-outline border-secondary px-3 py-2 border-1">Submit </button>
            </div>
      </form>
    </div>
  );
};

export default AddBlog;

