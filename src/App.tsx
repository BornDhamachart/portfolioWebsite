import "./App.css";
import AboutMe from "./Components/AboutMe";
import TechStack from "./Components/TechStack";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";
import Experience from "./Components/Experience";
import SideLink from "./Components/SideLink";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
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
          <ContactMe />
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
