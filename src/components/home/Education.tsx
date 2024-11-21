import EducationBox from "@/components/ui/EducationBox";
import { TEducations } from "@/types";

const Education = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/educations`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const educations: TEducations[] = await res.json();
  return (
    <div
      id="education"
      className="bg-[#20303F] py-16 border-slate-600 border-b"
    >
      <div className="max-w-7xl mx-auto px-8">
        <h1 className="text-center text-white font-bold text-4xl mb-3 snap-center">
          MY <span className="text-primary">EDUCATIONS</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          {educations.slice(0, 4).map((item) => (
            <EducationBox key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
