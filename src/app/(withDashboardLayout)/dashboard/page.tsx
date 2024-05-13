"use client"
import { useGetAllEducationQuery } from "@/redux/features/feathers/educations/educationApi";
import { useGetAllProjectQuery } from "@/redux/features/feathers/projects/projectApi";
import { useGetAllSkillQuery } from "@/redux/features/feathers/skills/skillApi";


const DashboardHomePage = () => {
  const {data: skills} = useGetAllSkillQuery(undefined)
  const {data: projects} = useGetAllProjectQuery(undefined)
  const {data: educations} = useGetAllEducationQuery(undefined)
 
  return (
   <div className="w-4/5 mx-auto mt-6">
    <h1 className="text-red-500 text-center text-xl mt-2 mb-8"> Welcome to portfolio <span className="text-primary font-medium">dashboard</span>  </h1>
    <div className=" grid grid-flow-col md:grid-cols-2 lg:grid-cols-4 gap-5">
      <div className="p-4 rounded shadow flex items-center justify-center text-2xl font-semibold bg-gray-600/40 size-40">
        <h1>Skill: {skills?.length}</h1>
      </div>
      <div className="p-4 rounded shadow flex items-center justify-center text-2xl font-semibold bg-gray-600/40 size-40">
        <h1>Project: {projects?.length}</h1>
      </div>
      <div className="p-4 rounded shadow flex items-center justify-center text-2xl font-semibold bg-gray-600/40 size-40">
        <h1>Blog: 3 {projects?.length}</h1>
      </div>
      <div className="p-4 rounded shadow flex items-center justify-center text-2xl font-semibold bg-gray-600/40 size-40">
        <h1>Education <span className="text-primary">&</span> Course: {educations?.length}</h1>
      </div>
    </div>
  </div>
  );
};

export default DashboardHomePage;
