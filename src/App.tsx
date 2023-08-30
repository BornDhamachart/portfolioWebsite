import "./App.css";
import AboutMe from "./Components/AboutMe";
import TechStack from "./Components/TechStack";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";
import Experience from "./Components/Experience";
import SideLink from "./Components/SideLink";
import Footer from "./Components/Footer";
import { useRef } from "react";

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

  return (
    <>
      <div className="bg-custom-gray1 w-full h-full">
        <div>
          <div className="sticky top-0">
            <div className="flex justify-end bg-custom-black opacity-70 w-full drop-shadow-lg">
              <div className="flex justify-evenly items-center gap-8 px-8 py-4 text-custom-blue1 hover:text-white">
                <div
                  className="cursor-pointer"
                  onClick={() => scrollTo(aboutMeRef)}
                >
                  About me
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => scrollTo(projectsRef)}
                >
                  Projects
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => scrollTo(expRef)}
                >
                  Exp
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => scrollTo(contactRef)}
                >
                  Contact
                </div>
                <a
                  className="border border-white hover:border-custom-blue1 px-4 py-1 rounded-lg cursor-pointer hover:text-custom-blue1 text-white"
                  href=""
                  target="_blank"
                >
                  Test
                </a>
              </div>
            </div>
          </div>
          <div className="pl-28 mt-16" ref={aboutMeRef}>
            <AboutMe />
          </div>
        </div>
        <div className="pl-28">
          <TechStack />
          <div ref={projectsRef}>
            <Projects />
          </div>
          <div ref={expRef}>
            <Experience />
          </div>
          <div ref={contactRef}>
            <ContactMe />
          </div>

          <Footer />
        </div>
        <div className="left-0 bottom-0 fixed">
          <SideLink />
        </div>
      </div>
    </>
  );
}

export default App;
