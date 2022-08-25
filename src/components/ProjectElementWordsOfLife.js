import React from "react";


export default function ProjectElementWeather() {

    return (
    
        <div className="projElContainer learning-log-item">
            
            <div className="infoBox">
                <h2 className="h2margin">Play Store App</h2>
                <h4 className="hmargin">Inspirational Bible based App available for download on the GooglePlay Store</h4>
                <h6 className="hmargin">Built with React-Native using the Expo platform</h6>
                <div className="projImgBox">
                    <img className="projImg reactNativeImg" alt="react-native logo" src={process.env.PUBLIC_URL+"languageLogos/"+"react-native.png"} />
                    <img className="projImg expoImg" alt="expo logo" src={process.env.PUBLIC_URL+"languageLogos/"+"Expo.png"} />
                </div>
            </div>
            
            <div className="infoBox">
                <img className="playStoreImg" alt="playstore logo" src={process.env.PUBLIC_URL+"languageLogos/"+"playstore.webp"} />
                <a className="projectalinks" href="https://play.google.com/store/apps/details?id=com.jamie1964two.wordsoflife&hl=en&gl=US">View on PlayStore</a>
                <a className="projectalinks" href="https://github.com/Jamie1964two/wordsoflife">GitHub</a>
            </div>
        </div>
    )
}
