import "./App.css";
import AboutMe from "./Components/AboutMe";
import TechStack from "./Components/TechStack";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";
import Experience from "./Components/Experience";
import SideLink from "./Components/SideLink";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { useRef } from "react";

function App() {
  const contactMeRef = useRef<HTMLDivElement | null>(null);

  const scrollToDiv = () => {
    if (contactMeRef.current) {
      contactMeRef.current.scrollIntoView({
        behavior: "smooth", // Add smooth scrolling effect
        block: "start", // Scroll to the top of the element
      });
    }
  };

  return (
    <>
      <button onClick={scrollToDiv}>Scroll to Div</button>
      <div className="bg-ivory w-full h-full">
        <div>
          <div className="sticky top-0">
            <Navbar />
          </div>
          <div className="pl-28">
            <AboutMe />
          </div>
        </div>
        <div className="pl-28">
          <TechStack />
          <div className="h-64">test</div>
          <Projects />
          <div className="h-64">test</div>
          <Experience />
          <div className="h-64">test</div>
          <div ref={contactMeRef}>
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
