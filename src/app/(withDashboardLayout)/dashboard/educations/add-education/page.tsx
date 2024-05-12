'use client'

import { useCreateEducationMutation } from "@/redux/features/feathers/educations/educationApi";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const AddEducation = () => {
  const [addEducation, { isSuccess }] = useCreateEducationMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();



  const onSubmit: SubmitHandler<FieldValues> = (data) => {    
             addEducation(data);
         
          if (isSuccess) {
            toast.success("education has added");
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
          Add <span className="text-primary">Education </span>
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


          <div className="space-y-2">
            <label className="text-xl">Institute Name</label>
            <input
              id="Name"
              className="w-full text-gray-400 border px-4 py-2 shadow-sm rounde "
              placeholder="Institute Name"
              {...register("name", { required: true })}
            />
            {errors.title && (
              <span className="text-sm text-red-400">Title is required</span>
            )}
          </div>
          

          <div className="space-y-2 ">
            <label className="text-xl">Institute Logo <span className="text-xs">(optional)</span> </label>
            <input 
            id="logo"
             className="w-full text-gray-400 border px-4 py-2 shadow-sm rounded" type="text" 
             placeholder="Institute Logo"
             {...register("icon")} />
          </div>

          <div className="space-y-2 ">
            <label className="text-xl">Session <span className="text-xs">(or optional)</span> </label>
            <input 
            id="session"
             className="w-full text-gray-400 border px-4 py-2 shadow-sm rounded" type="text" 
             placeholder="Session"
             {...register("session")} />
          </div>

        </div>

            <div className="text-end">
        <button className="btn-outline border-secondary px-3 py-2 border-1">Submit </button>
            </div>
      </form>
    </div>
  );
};

export default AddEducation;

