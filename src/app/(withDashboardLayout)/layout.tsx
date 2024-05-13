import Navbar from "@/components/shared/navbar/Navbar";
import Link from "next/link";
import { BiHome } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { MdDashboard, MdOutlinePostAdd } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const items = [
    <li key="item1">
      <Link href="/dashboard" className="flex items-center gap-1">
        {" "}
        <MdDashboard /> Dashboard
      </Link>
    </li>,
    <li key="item1">
      <Link href="/dashboard/skills" className="flex items-center gap-1">
        {" "}
        <GiSkills /> Skils
      </Link>
    </li>,
    
    <li key="item3">
      <Link href="/dashboard/projects" className="flex items-center gap-1">
        <GrProjects /> Projects
      </Link>
    </li>,
    <li key="item4">
      <Link href="/dashboard/educations" className="flex items-center gap-1">
        {" "}
        <MdCastForEducation />
        Educations
      </Link>
    </li>,
    <li key="item2">
    <Link href="/dashboard/blogs" className="flex items-center gap-1">
      <MdOutlinePostAdd /> Blogs
    </Link>
  </li>,
        <li key="item5">
        <Link href="/" className="flex items-center gap-1">
          {" "}
          <BiHome /> Home
        </Link>
      </li>,
  ];
  return (
    <>
      <div className=" flex">
        <aside className="flex flex-[2] bg-gray-700 h-screen p-4 pr-12 fixed">
          <ul className="flex flex-col space-y-3 text-lg font-medium text-secondary">
            {items}
          </ul>
        </aside>
        <div className="flex flex-[5] pl-[175px]">{children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
