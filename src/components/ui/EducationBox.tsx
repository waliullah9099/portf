import { TEducations } from "@/types";
import Image from "next/image";

const EducationBox = ({ item }: { item: TEducations }) => {
  return (
    <div className="flex gap-4 items-center p-7 rounded shadow border border-neutral-600 group hover:-translate-y-3 bg-[#141F31] transition-all duration-500">
      <Image
        src={item.icon}
        height={60}
        width={70}
        className="rounded group-hover:scale-90 transition-all duration-500"
        alt="institute image"
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-white font-medium text-xl">{item.title}</h1>
        <div className="flex items-center gap-4">
          <h1 className="text-white">{item.name}</h1>
          <h4 className="text-secondary text-sm">({item.session})</h4>
        </div>
      </div>
    </div>
  );
};

export default EducationBox;
