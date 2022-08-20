import "./App.css";
import Header1 from "./components/Header1";
import ReactLogo from "./components/ReactLogo";
import Courses from "./components/Courses";
import ProjectElementWeather from "./components/ProjectElementWeather";
import ProjectElementFarkle from "./components/ProjectElementFarkle";


function HomePage() {
  return (
    <div className="App">

      <div style={{"position":"absolute","z-index":"-1"}}> 
      <ReactLogo />
      </div>
      
      <div className="header">
        <Header1 />
      </div>
      
      <div className="coursesColumn learning-log-ascend">
        <Courses />
      </div>
      
      <div className="projectsColumn project-entrance">
        <ProjectElementWeather />

        <ProjectElementFarkle />
      </div>

    </div>
  );
}

export default HomePage;
