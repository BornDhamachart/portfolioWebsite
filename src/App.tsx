import "./App.css";
import AboutMe from "./Components/AboutMe";
import TechStack from "./Components/TechStack";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import SideLink from "./Components/SideLink";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div className="bg-ivory w-full h-full relative pl-28">
        <div>
          <div className="sticky top-0">
            <Navbar />
          </div>
          <AboutMe />
          <TechStack />
          <Projects />
          <Experience />
          <ContactMe />
        </div>
        <div className="left-0 bottom-0 fixed">
          <SideLink />
        </div>
      </div>
    </>
  );
}

export default App;
