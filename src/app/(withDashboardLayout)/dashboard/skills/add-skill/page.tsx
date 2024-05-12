'use client'
import { useCreateSkillMutation } from "@/redux/features/feathers/skills/skillApi";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const AddSkill = () => {
  const [addSkill, { isSuccess }] = useCreateSkillMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();



  const onSubmit: SubmitHandler<FieldValues> = (data) => {    
    addSkill(data);
          if (isSuccess) {
            toast.success("new skill has added");
            reset();
          }
  };

  return (
    <div className="w-[600px] mx-auto mt-8 shadow-2xl rounded-lg p-6">
      <form
        className="w-[500px] mx-auto space-y-5 border shadow rounded border-secondary p-4 lg:p-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-4xl font-semibold text-center mb-3">
          Add <span className="text-primary">Projecat </span>
        </h1>
        <div className="grid grid-cols-1 gap-4">
   
          <div className="space-y-2">
            <label className="text-xl">Title</label>
            <input
              id="Name"
              className="w-full border px-4 py-2 shadow-sm rounde "
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
        </div>

            <div className="text-end">
        <button className="btn-outline border-secondary px-3 py-2 border-1">Create Testimonial </button>
            </div>
      </form>
    </div>
  );
};

export default AddSkill;