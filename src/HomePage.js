import "./App.css";
import Header1 from "./components/Header1";
import ReactLogo from "./components/ReactLogo";
import Courses from "./components/Courses";
import ProjectElementWeather from "./components/ProjectElementWeather";
import ProjectElementFarkle from "./components/ProjectElementFarkle";
import ProjectElementWordsOfLife from "./components/ProjectElementWordsOfLife";
import ProjectEasyBank from "./components/ProjectEasyBank";
import ProjectReactMeetups from "./components/ProjectReactMeetups";
import ContactInfo from "./components/ContactInfo";
import ProjectElementExpress from './components/ProjectElementExpress'
import React, {useState, useEffect} from 'react';
import Footer from './components/Footer'


function HomePage() {

  const [matches, setMatches] = useState(window.matchMedia("(max-width: 1080px)").matches)

  
  useEffect(() => {

    window
    .matchMedia("(max-width: 1080px)")
    .addEventListener('change', e => setMatches( e.matches ));
  
  }, []);


  return (
    <div className={`App ${matches ? "App-small" : ""}`} >

      <div style={{"position":"absolute","z-index":"-1"}}> 
      <ReactLogo />
      </div>

      <div className="contactInfoBox">
        <ContactInfo />
      </div>
      
      <div className={`header ${matches ? "header-small" : ""}`}>
        <Header1 />
      </div>
      
      <div className={`coursesColumn learning-log-ascend ${matches ? "coursesColumn-small" : ""}`}>
        <Courses />
      </div>
      
      <div className={`projectsColumn ${matches ? "coursesColumn-small" : ""}`}>

        <div className="project-entrance" style={{"animation-delay": "-0.1s"}}><ProjectReactMeetups /></div>

        <div className="project-entrance" style={{"animation-delay": "0.1s"}}><ProjectEasyBank /></div>
        
        <div className="project-entrance" style={{"animation-delay": "0.3s"}}><ProjectElementExpress /></div>

        <div className="project-entrance" style={{"animation-delay": "0.5s"}}><ProjectElementWeather /></div>

        <div className="project-entrance" style={{"animation-delay": "0.7s"}}><ProjectElementFarkle /></div>

        <div className="project-entrance" style={{"animation-delay": "0.9s"}}><ProjectElementWordsOfLife /></div>

      </div>

      <Footer />

    </div>
  );
}

export default HomePage;
