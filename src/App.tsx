import "./App.css";
import AboutMe from "./Components/AboutMe";
import TechStack from "./Components/TechStack";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";
import Experience from "./Components/Experience";
import SideLink from "./Components/SideLink";
import Footer from "./Components/Footer";
import { useRef } from "react";
import { motion } from "framer-motion";

function App() {
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const expRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollTo = (ref: any) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth", // Add smooth scrolling effect
        block: "start", // Scroll to the top of the element
      });
    }
  };

  const item = {
    hidden: { opacity: 0, y: -50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };

  const container = {
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <>
      <div className="bg-custom-gray1 w-full h-full">
        <div>
          <div className="sticky top-0">
            <div className="flex justify-end bg-custom-gray1 opacity-70 w-full drop-shadow-lg">
              <motion.div
                className="flex justify-evenly items-center gap-8 px-8 py-4 text-custom-blue1"
                initial="hidden"
                animate="show"
                variants={container}
              >
                <motion.div
                  className="cursor-pointer hover:text-white"
                  onClick={() => scrollTo(aboutMeRef)}
                  variants={item}
                >
                  About me
                </motion.div>
                <motion.div
                  className="cursor-pointer hover:text-white"
                  onClick={() => scrollTo(projectsRef)}
                  variants={item}
                >
                  Projects
                </motion.div>
                <motion.div
                  className="cursor-pointer hover:text-white"
                  onClick={() => scrollTo(expRef)}
                  variants={item}
                >
                  Exp
                </motion.div>
                <motion.div
                  className="cursor-pointer hover:text-white"
                  onClick={() => scrollTo(contactRef)}
                  variants={item}
                >
                  Contact
                </motion.div>
                <a
                  className="border border-white hover:border-custom-blue1 px-4 py-1 rounded-md cursor-pointer hover:text-custom-blue1 text-white"
                  href=""
                  target="_blank"
                >
                  Resume
                </a>
              </motion.div>
            </div>
          </div>
          <div className="md:pl-48 px-4 md:mt-28 mt-12" ref={aboutMeRef}>
            <AboutMe />
          </div>
          <div className="md:left-0 px-4 mt-2 md:bottom-0 md:fixed">
            <SideLink />
          </div>
        </div>
        <div className="md:pl-48 px-4 mt-6">
          <TechStack />
          <div ref={projectsRef} className="md:mt-44 mt-6">
            <Projects />
          </div>
          <div ref={expRef} className="md:mt-44 mt-6">
            <Experience />
          </div>
          <div ref={contactRef} className="md:mt-96 md:pb-72 mt-6 pb-20">
            <ContactMe />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
