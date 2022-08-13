import React from "react";
import WeatherApp from "./Weather-App/App";

export default function ProjectElementWeather() {

    return (
    
        <div className="projElContainer">
            <div className="infoBox">
                <h3 className="hmargin">Weather App</h3>
                <h4 className="hmargin">Enter a city to get the current weather</h4>
                <h5 className="hmargin">Built in React with Weatherbit and GeoDb Cities APIs </h5>
                <img className="projImg" alt="coding language logo" src={process.env.PUBLIC_URL+"languageLogos/"+"React.png"} />
                <img className="projImg" alt="coding language logo" src={process.env.PUBLIC_URL+"languageLogos/"+"WeatherAPI.png"} />
            </div>
            <WeatherApp />

        </div>
    )
}
