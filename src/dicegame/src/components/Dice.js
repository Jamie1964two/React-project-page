import React, {useEffect, useState} from 'react';
import { wobble } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import '../farkle_styles.css';

const styles = {
    wobble: {
    animation: 'x 0.2s',
    animationName: Radium.keyframes(wobble, 'wobble')
    },
    noWobble: {
    }
}

export default function Dice(props) {

    const keep = props.diceSetting.keep;
    const fixed = props.diceSetting.fixed;
    const value = props.diceSetting.value;
    const keepDiceToggle = props.keepDiceToggle;
    const noOfRolls = props.noOfRolls;

    // console.log("dice value: " + value);
    
    const dicePattern = [[0,0,0,0,1,0,0,0,0],[0,0,1,0,0,0,1,0,0],[0,0,1,0,1,0,1,0,0,0],[1,0,1,0,0,0,1,0,1],[1,0,1,0,1,0,1,0,1],[1,0,1,1,0,1,1,0,1]]
    const [roll, setRoll] = useState(value-1);
    const [wobble, setWobble] = useState(true);
    //const [keep, setKeep] = useState(false);

    useEffect( () => {
        function rollDice() {
            if(keep) return;
            let i = 0;
            setWobble(prev=>true)
            function roll() {
                i++; 
                if (i > 3) {
                    setRoll(value-1)
                    console.log("setting roll to: " + value)
                } else {
                    setRoll(Math.floor(Math.random()*6));
                }
                if (i>3) {
                    setWobble(prev=>false); 
                    return
                };
                setTimeout(roll,50);
            }
            roll()
        }
        rollDice()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[noOfRolls]  
    )

   // useEffect(rollDice,[value]);

    return (
        <div>
        <StyleRoot>
            <div className={`farkle_dice farkle_grid ${props.frontPage ? "" : keep ? "farkle_diceShrink" : "farkle_diceGrow"} ${fixed ? "farkle_diceGrey" : ""} ${props.frontPage ? "frontPageDice" : ""}`} onClick={keepDiceToggle} style={ wobble ? styles.wobble : styles.noWobble}>
                <div className={`farkle_dot ${dicePattern[roll][0] ? "" : 'farkle_bckgrnd'} ${props.frontPage ? "dotSize-small" : ""}`}></div>
                <div className={`farkle_dot ${dicePattern[roll][1] ? "" : 'farkle_bckgrnd'} ${props.frontPage ? "dotSize-small" : ""}`}></div>
                <div className={`farkle_dot ${dicePattern[roll][2] ? "" : 'farkle_bckgrnd'} ${props.frontPage ? "dotSize-small" : ""}`}></div>
                <div className={`farkle_dot ${dicePattern[roll][3] ? "" : 'farkle_bckgrnd'} ${props.frontPage ? "dotSize-small" : ""}`}></div>
                <div className={`farkle_dot ${dicePattern[roll][4] ? "" : 'farkle_bckgrnd'} ${props.frontPage ? "dotSize-small" : ""}`}></div>
                <div className={`farkle_dot ${dicePattern[roll][5] ? "" : 'farkle_bckgrnd'} ${props.frontPage ? "dotSize-small" : ""}`}></div>
                <div className={`farkle_dot ${dicePattern[roll][6] ? "" : 'farkle_bckgrnd'} ${props.frontPage ? "dotSize-small" : ""}`}></div>
                <div className={`farkle_dot ${dicePattern[roll][7] ? "" : 'farkle_bckgrnd'} ${props.frontPage ? "dotSize-small" : ""}`}></div>
                <div className={`farkle_dot ${dicePattern[roll][8] ? "" : 'farkle_bckgrnd'} ${props.frontPage ? "dotSize-small" : ""}`}></div>
            </div>
        </StyleRoot>
        {/* <button onClick={rollDice}>Roll</button> */}
        </div>
    )
}