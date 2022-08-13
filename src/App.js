import logo from "./logo.svg";
import "./App.css";
import Header1 from "./components/Header1";
import ReactLogo from "./components/ReactLogo";
import Courses from "./components/Courses";
import WeatherApp from "./components/Weather-App/App";
import ProjectElementWeather from "./components/ProjectElementWeather";

function App() {
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

      {/*       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
