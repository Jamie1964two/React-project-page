import React from "react";

export default function ProjectElementExpress() {

    return (
    
        <div className="projElContainer learning-log-item">
            
            <div className="infoBox">
                <h2 className="h2margin">Express</h2>
                <h4 className="hmargin">Three projects using Express servers and  Mongo databases</h4>
                <h6 className="hmargin">Builds use Mongoose, Postman and JWT Authentication</h6>
                <div className="projImgBox">
                    <img className="projImg reactNativeImg" alt="Node logo" src={process.env.PUBLIC_URL+"languageLogos/"+"node2.png"} />
                   
                    <img className="projImg reactNativeImg" alt="mongodb logo" src={process.env.PUBLIC_URL+"languageLogos/"+"mongo.png"} />

                    <img className="projImg reactNativeImg" alt="express logo" src={process.env.PUBLIC_URL+"languageLogos/"+"postman.png"} />

                    <img className="projImg reactNativeImg" alt="express logo" src={process.env.PUBLIC_URL+"languageLogos/"+"jwt.png"} />

                </div>
            </div>
            
            <div className="infoBox" style={{"margin-bottom":"0"}}>
                <img className="expressLargeImg" alt="express logo" src={process.env.PUBLIC_URL+"languageLogos/"+"express2.png"} />
                <div>
                <h4>View code on GitHub</h4>
                <a className="projectalinks expressLinks" href="https://github.com/Jamie1964two/Node-Express-3">#1</a>
                <a className="projectalinks expressLinks" href="https://github.com/Jamie1964two/Node-Express-4">#2</a>
                <a className="projectalinks expressLinks" href="https://github.com/Jamie1964two/Node-Express-5">#3</a>
                </div>
            </div>
        </div>
    )
}
