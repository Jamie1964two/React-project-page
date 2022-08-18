import logo from "./logo.svg";
import "./App.css";
import Header1 from "./components/Header1";
import ReactLogo from "./components/ReactLogo";
import Courses from "./components/Courses";
import WeatherApp from "./components/Weather-App/App";
import ProjectElementWeather from "./components/ProjectElementWeather";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="App">
      
      <div className="header">
        <Header1 />
      </div>
      
      <div className="coursesColumn">
        <Courses />
      </div>
      
      <div className="projectsColumn">
        <ProjectElementWeather />
      </div>

      <ReactLogo />

      <Link to="/Farkle">Farkle</Link>

    </div>
  );
}

export default HomePage;
