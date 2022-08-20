import React from "react";
import Dice from '../dicegame/src/components/Dice'
import { Link } from "react-router-dom";


export default function ProjectElementFarkle() {

    return (
    
        <div className="projElContainer learning-log-item">
            <div className="infoBox">
                <h2 className="h2margin">Dice Game</h2>
                <h4 className="hmargin">Single player dice game based on the rules of Farkle</h4>
                {/* <h6 className="hmargin">Built in React</h6> */}
                <div className="projImgBox">
                    <img className="projImg" alt="coding language logo" src={process.env.PUBLIC_URL+"languageLogos/"+"React.png"} />
                </div>
            </div>

          
            <div className="infoBox">
            <div className="projEldiceBox">
                <Dice noOfRolls={0} diceSetting={{fixed: false, keep: false, value: 1}} keepDiceToggle={()=>{}} frontPage={true} />
                <Dice noOfRolls={0} diceSetting={{fixed: false, keep: false, value: 3}} keepDiceToggle={()=>{}} frontPage={true} />
                <Dice noOfRolls={0} diceSetting={{fixed: false, keep: false, value: 5}} keepDiceToggle={()=>{}} frontPage={true} />
                {/* <img className="projImg" alt="dice project" src={process.env.PUBLIC_URL+"projectImages/"+"farkle.png"} /> */}
            </div>
            <Link to="/Farkle"><button className="dicePlayButton">Play</button></Link>
            </div>
    
        </div>
    )
}
