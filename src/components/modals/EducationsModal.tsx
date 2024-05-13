'use client'

import { useGetSingleEducationQuery, useUpdateEducationMutation } from "@/redux/features/feathers/educations/educationApi";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";


const EducationModal = ({
    onClose,
    skillId,
  }: {
    onClose: () => void;
    skillId: string | null; 
  }) => {
    const { data:education } = useGetSingleEducationQuery(skillId ?? "");
    const [updateEducation, { isSuccess }] = useUpdateEducationMutation();
          
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  

  
    const onSubmit: SubmitHandler<FieldValues> = (data) => {    
        updateEducation({id: skillId || '', body: data});
            if (isSuccess) {
              toast.success("education is updated");
              onClose();
            }
    };
    return (
        <div className="fixed left-0 top-0 w-full h-full grid place-items-center bg-transparent backdrop-blur-[1px] z-50">
      <form
        className="w-[500px] mx-auto space-y-5 border shadow bg-slate-600 rounded border-secondary p-4 lg:p-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-between">
            
        <h1 className="text-2xl font-semibold text-center mb-3">
          Update <span className="text-primary">Education </span>
        </h1>
        <button onClick={onClose} className="bg-slate-800 text-secondary rounded px-5">
                Close
        </button>
        </div>
        <div className="grid grid-cols-1 gap-4">
   

        <div className="space-y-2">
            <label className="text-xl">Title</label>
            <input
              id="title"
              className="w-full text-gray-400 border px-4 py-2 shadow-sm rounde"
              placeholder={education?.title}
              {...register("title")}
            />
          </div>


          <div className="space-y-2">
            <label className="text-xl">Institute Name</label>
            <input
              id="Name"
              className="w-full text-gray-400 border px-4 py-2 shadow-sm rounde "
              placeholder={education?.name}
              {...register("name")}
            />
           
          </div>
          

          <div className="space-y-2 ">
            <label className="text-xl">Institute Logo <span className="text-xs">(optional)</span> </label>
            <input 
            id="logo"
             className="w-full text-gray-400 border px-4 py-2 shadow-sm rounded" type="text" 
             placeholder={education?.icon}
             {...register("icon")} />
          </div>

          <div className="space-y-2 ">
            <label className="text-xl">Session <span className="text-xs">(or optional)</span> </label>
            <input 
            id="session"
             className="w-full text-gray-400 border px-4 py-2 shadow-sm rounded" type="text" 
             placeholder={education?.session}
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

export default EducationModal;