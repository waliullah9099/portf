import { TProject } from "@/types";
import Image from "next/image";

const Projects = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/projects`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const projects: TProject[] = await res.json();

  return (
    <div id="projects" className="bg-[#041218] py-16 border-slate-600 border-b">
      <div className="max-w-7xl mx-auto px-8 relative">
        <h1 className="text-center text-white font-bold text-4xl mb-3 snap-center">
          MY RECENT <span className="text-primary"> PROJECTS</span>
        </h1>
        {/* extra div to set blur background  */}
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 absolute top-80 left-80 md:w-40 md:h-60 py-3 blur-3xl"></div>
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 absolute top-80 right-80 md:w-40 md:h-60 py-3 blur-3xl"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {projects.slice(0, 6).map((project: TProject, index: number) => (
            <div
              key={index}
              className="custom-card overflow-hidden bg-[#041218] group relative cursor-pointer border border-slate-700 p-4 rounded"
            >
              <div className="relative overflow-hidden group">
                <Image
                  src={project.image}
                  height={400}
                  width={400}
                  alt="project image"
                  className="h-[300px] rounded-sm transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100">
                  <div className="text-white text-center">
                    <h1 className="font-dmserif text-3xl font-bold mb-2">
                      {project.name}
                    </h1>
                    <p className="text-lg italic hidden md:block space-y-3">
                      {project.technologies}
                    </p>
                    <div className="mt-8">
                      <a
                        className="border border-gray-400 mr-3 py-2 px-3 rounded-sm shadow block mt-3 md:inline"
                        href={project.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Link
                      </a>
                      <a
                        className="border border-gray-400 mr-3 py-2 px-3 rounded-sm shadow block mt-3 md:inline"
                        href={project.client_side}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Client Side
                      </a>
                      <a
                        className="border border-gray-400 mr-3 py-2 px-3 rounded-sm shadow block mt-3 md:inline"
                        href={project.server_side}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Server Side
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-5">
                <p className="text-lg italic text-white">{project.name}</p>
                <p className="text-secondary border border-gray-600 rounded-sm bg-[#031621] px-5 py-2">
                  {project.project_type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

{
  /* <div
              key={index}
              className="relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
            >
              <Image
                src={project.image}
                height={400}
                width={400}
                alt="project image"
                className="rounded-sm shadow-md h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  {project.name}
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {project.technologies}
                </p>
              </div>
            </div> */
}
