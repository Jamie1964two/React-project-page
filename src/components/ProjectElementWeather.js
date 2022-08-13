import React from "react";
import WeatherApp from "./Weather-App/App";

export default function ProjectElementWeather() {

    return (
    
        <div className="projElContainer">
            <div className="infoBox">
                <h2 className="h2margin">Weather App</h2>
                <h4 className="hmargin">Enter a city to get the current weather</h4>
                <h6 className="hmargin">Built in React with Weatherbit and GeoDb Cities APIs </h6>
                <div className="projImgBox">
                    <img className="projImg" alt="coding language logo" src={process.env.PUBLIC_URL+"languageLogos/"+"React.png"} />
                    <img className="projImg" alt="coding language logo" src={process.env.PUBLIC_URL+"languageLogos/"+"WeatherAPI.png"} />
                </div>
            </div>
            <WeatherApp />

        </div>
    )
}
