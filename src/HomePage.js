import "./App.css";
import Header1 from "./components/Header1";
import ReactLogo from "./components/ReactLogo";
import Courses from "./components/Courses";
import ProjectElementWeather from "./components/ProjectElementWeather";
import ProjectElementFarkle from "./components/ProjectElementFarkle";
import ProjectElementWordsOfLife from "./components/ProjectElementWordsOfLife"
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
      
      <div className={`projectsColumn project-entrance ${matches ? "coursesColumn-small" : ""}`}>
        <ProjectElementExpress />

        <ProjectElementWeather />

        <ProjectElementFarkle />

        <ProjectElementWordsOfLife />
      </div>

      <Footer />

    </div>
  );
}

export default HomePage;
