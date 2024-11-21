import About from "@/components/home/About";
import Blogs from "@/components/home/Blogs";
import Contact from "@/components/home/Contact";
import Education from "@/components/home/Education";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import Services from "@/components/home/Services";
import Skills from "@/components/home/Skills";

const Page = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Education />
      <Skills />
      <Projects />
      <Blogs />
      <Contact />
    </>
  );
};

export default Page;
