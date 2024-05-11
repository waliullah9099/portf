import { TService } from "@/types";
import Image from "next/image";

const Services = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/services`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const services: TService[] = await res.json();

  return (
    <div
      id="services"
      className="bg-[#04263cf4] py-16 border-slate-600 border-b"
    >
      <div className="max-w-7xl mx-auto px-8">
        <h1 className="text-center text-white font-bold text-4xl mb-3 snap-center">
          MY <span className="text-primary">SERVICES</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          {services?.map((item: TService, index: number) => (
            <div
              className="group flex items-center justify-center flex-col bg-[#334155] py-5 px-6 rounded hover:-translate-y-4 transition-all duration-500 delay-75 hover:shadow-xl border border-slate-900"
              key={index}
            >
              <Image
                className="w-[320px] h-[270px] rounded shadow-lg group-hover:scale-95 group-hover:shadow-xl transition-all duration-500 delay-75 "
                src={item.path}
                height={300}
                width={300}
                alt="service"
              />
              <h1 className="text-2xl font-bold pt-6 pb-3 text-white">
                {item.title}
              </h1>
              <p className="text-lg text-secondary">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
