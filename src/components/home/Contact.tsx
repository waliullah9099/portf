"use client";
import { Inputs } from "@/types";
import { useForm, SubmitHandler } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div id="contact" className="bg-[#051924] py-16 border-slate-600 border-b">
      <div className="max-w-7xl mx-auto px-8">
        <h1 className="text-center text-white font-bold text-4xl mb-3 snap-center">
          <span className="text-primary">CONTACT</span> ME
        </h1>
        <div className="flex flex-col md:flex-row gap-12 mt-8">
          <div className="border-2 border-slate-800 shadow-2xl py-6 px-8 rounded md:w-full">
            <h1 className="text-center text-lg font-semibold text-white pb-3">
              Get in touch
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className=" space-y-4">
              <input
                placeholder="Your Name"
                className="input"
                {...register("name", { required: true })}
              />
              {errors.name && <span>Name is required</span>}
              <input
                placeholder="Your Email"
                className="input"
                {...register("email", { required: true })}
              />
              {errors.email && <span>Email is required</span>}
              <input
                placeholder="Subject"
                className="input"
                {...register("subject")}
              />
              <textarea
                placeholder="Your Message"
                className="input h-44"
                {...register("description", { required: true })}
              />
              {errors.description && <span>Description is required</span>}
              <input
                className="btn bg-transparent border text-secondary hover:border-primary hover:text-black hover:bg-primary w-full"
                type="submit"
              />
            </form>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116717.97795833701!2d89.04235947573255!3d23.909581585772145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe965536b7d61f%3A0x28fea367efdb38c9!2sKushtia!5e0!3m2!1sen!2sbd!4v1706743578503!5m2!1sen!2sbd"
            height="521"
            allowFullScreen
            loading="lazy"
            className="rounded-md w-full"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
