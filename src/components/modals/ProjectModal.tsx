'use client'

import { useGetSingleProjectQuery, useUpdateProjectMutation } from "@/redux/features/feathers/projects/projectApi";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

interface ISkillModalProps {
    _id: string;
    name: string;
    image: string;
}

const ProjectModal = ({
    onClose,
    skillId,
  }: {
    onClose: () => void;
    skillId: string | null; 
  }) => {
    const { data:project } = useGetSingleProjectQuery(skillId ?? "");
    const [updateProject, { isSuccess }] = useUpdateProjectMutation();

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  

  
  
    const onSubmit: SubmitHandler<FieldValues> = (data) => {    
        updateProject({id: skillId || '', body: data});
            if (isSuccess) {
              toast.success("project is updated");
              onClose();
            }
    };
    return (
        <div className="fixed left-0 top-0 w-full h-full grid place-items-center bg-transparent backdrop-blur-[1px] z-50">
      <form
        className="w-[700px] mx-auto space-y-5 border shadow bg-slate-600 rounded border-secondary p-4 lg:p-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-between">
            
        <h1 className="text-2xl font-semibold text-center mb-3">
          Update <span className="text-primary">Projecat </span>
        </h1>
        <button onClick={onClose} className="bg-slate-800 text-secondary rounded px-5">
                Close
        </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
   

        <div className="space-y-2">
            <label className="text-xl">Name</label>
            <input
              id="Name"
              className="w-full text-gray-400 border px-4 py-2 shadow-sm rounde "
              placeholder={project?.name}
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
             placeholder={project?.image}
             {...register("image")} />
          </div>
          <div className="space-y-2">
            <label className="text-xl">Live Link</label>
            <input
              id="Link"
              className="w-full text-gray-400 border px-4 py-2 shadow-sm rounde"
              placeholder={project?.live_link}
              {...register("live_link", { required: true })}
            />
            {errors.title && (
              <span className="text-sm text-red-400">Live Link is required</span>
            )}
          </div>
          <div className="space-y-2 ">
            <label className="text-xl">Client Side Code</label>
            <input 
            id="client"
             className="w-full text-gray-400 border px-4 py-2 shadow-sm rounded" type="text" 
             placeholder={project?.client_side}
             {...register("client_side")} />
          </div>
          <div className="space-y-2 ">
            <label className="text-xl">Server Side Code</label>
            <input 
            id="server"
             className="w-full text-gray-400 border px-4 py-2 shadow-sm rounded" type="text" 
             placeholder={project?.server_side}
             {...register("server_side")} />
          </div>
          <div className="space-y-2 ">
            <label className="text-xl">Technologies</label>
            <input 
            id="technologies"
             className="w-full text-gray-400 border px-4 py-2 shadow-sm rounded" type="text" 
             placeholder={project?.technologies}
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

export default ProjectModal;