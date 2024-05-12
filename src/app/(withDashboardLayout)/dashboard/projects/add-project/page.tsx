'use client'

import { useCreateProjectMutation } from "@/redux/features/feathers/projects/projectApi";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const AddProject = () => {
  const [addproject, { isSuccess }] = useCreateProjectMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();



  const onSubmit: SubmitHandler<FieldValues> = (data) => {    
             addproject(data);
         
          if (isSuccess) {
            toast.success("new project has added");
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
          Add <span className="text-primary">Project </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
   
          <div className="space-y-2">
            <label className="text-xl">Name</label>
            <input
              id="Name"
              className="w-full text-gray-400 border px-4 py-2 shadow-sm rounde "
              placeholder="Name"
              {...register("name", { required: true })}
            />
            {errors.title && (
              <span className="text-sm text-red-400">Title is required</span>
            )}
          </div>
          <div className="space-y-2 ">
            <label className="text-xl">Image</label>
            <input 
            id="image"
             className="w-full text-gray-400 border px-4 py-2 shadow-sm rounded" type="text" 
             placeholder="Image URL Link"
             {...register("image")} />
          </div>
          <div className="space-y-2">
            <label className="text-xl">Live Link</label>
            <input
              id="Link"
              className="w-full text-gray-400 border px-4 py-2 shadow-sm rounde"
              placeholder="Live Link"
              {...register("live_link", { required: true })}
            />
            {errors.title && (
              <span className="text-sm text-red-400">Title is required</span>
            )}
          </div>
          <div className="space-y-2 ">
            <label className="text-xl">Client Side Code</label>
            <input 
            id="client"
             className="w-full text-gray-400 border px-4 py-2 shadow-sm rounded" type="text" 
             placeholder="Client Side Sode"
             {...register("client_side")} />
          </div>
          <div className="space-y-2 ">
            <label className="text-xl">Server Side Code</label>
            <input 
            id="server"
             className="w-full text-gray-400 border px-4 py-2 shadow-sm rounded" type="text" 
             placeholder="Client Side Sode"
             {...register("server_side")} />
          </div>
          <div className="space-y-2 ">
            <label className="text-xl">Technologies</label>
            <input 
            id="technologies"
             className="w-full text-gray-400 border px-4 py-2 shadow-sm rounded" type="text" 
             placeholder="Technologies"
             {...register("technologies")} />
          </div>




        </div>





            <div className="text-end">
        <button className="btn-outline border-secondary px-3 py-2 border-1">Submit </button>
            </div>
      </form>
    </div>
  );
};

export default AddProject;

