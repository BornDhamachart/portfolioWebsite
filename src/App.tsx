import "./App.css";
import AboutMe from "./Components/AboutMe";
import TechStack from "./Components/TechStack";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";
import Experience from "./Components/Experience";
import SideLink from "./Components/SideLink";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import resume from "./assets/Resume_Dhamachart Chanprasartsuk.pdf";

function App() {
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const expRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

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
        <nav className="bg-custom-gray1 opacity-90 w-full drop-shadow-lg fixed top-0 z-50">
          <div className="w-full flex flex-wrap items-center justify-end p-4">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-2xl rounded-lg md:hidden hover:bg-custom-gray2 focus:outline-none focus:ring-2 focus:ring-custom-gray2 text-custom-blue1"
            >
              <GiHamburgerMenu />
            </button>
            <div
              className={`items-center justify-between w-full md:flex md:w-auto ${
                !isOpen && "hidden"
              }`}
            >
              <motion.div
                className="flex flex-col md:flex-row justify-evenly items-center gap-8 px-8 text-custom-blue1"
                initial="hidden"
                animate="show"
                variants={container}
              >
                <motion.div
                  className="cursor-pointer hover:text-custom-gray2"
                  onClick={() => scrollTo(aboutMeRef)}
                  variants={item}
                >
                  About me
                </motion.div>
                <motion.div
                  className="cursor-pointer hover:text-custom-gray2"
                  onClick={() => scrollTo(projectsRef)}
                  variants={item}
                >
                  Projects
                </motion.div>
                <motion.div
                  className="cursor-pointer hover:text-custom-gray2"
                  onClick={() => scrollTo(expRef)}
                  variants={item}
                >
                  Exp
                </motion.div>
                <motion.div
                  className="cursor-pointer hover:text-custom-gray2"
                  onClick={() => scrollTo(contactRef)}
                  variants={item}
                >
                  Contact
                </motion.div>
                <a
                  className="border border-white hover:border-custom-blue1 px-4 py-1 rounded-md cursor-pointer hover:text-custom-blue1 text-white"
                  href={resume}
                  target="_blank"
                >
                  Resume
                </a>
              </motion.div>
            </div>
          </div>
        </nav>

        <div className="md:pl-48 px-4 pt-36" ref={aboutMeRef}>
          <AboutMe />
        </div>
        <div className="md:left-0 px-4 mt-2 md:bottom-0 md:fixed">
          <SideLink />
        </div>
        <div className="md:pl-48 px-4 mt-16">
          <TechStack />
          <div ref={projectsRef} className="md:mt-56 mt-6">
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
