import React, {useState, useEffect} from 'react';
import './farkle_styles.css'
import DiceBoard from './components/DiceBoard';
import Score from './components/Score';
import calcScore from './calculate_score';
//import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

function Farkle() {

  //const { width, height } = useWindowSize()

  function diceInitialise() {
    const array = [];
    for (let i = 0; i < 6; i++) {
      array.push({fixed: false, keep: false, value: Math.floor(Math.random()*6+1)})
    }
    //console.log(array)
    return array;
  }

  function diceReRoll() {

    if(checkScoringDice() === false) return;

    const newScore = total.reduce( (partial,a) => partial + a, 0) + keepResult.score
    if( newScore > highScore) {
      setHighScore(newScore);
      setNewHighScore(true);
    }

    let array = [];
    for (let i = 0; i < 6; i++) {
      if(!diceArray[i].keep) {
        array.push({keep: false, value: Math.floor(Math.random()*6+1)})
      } else {
        array.push({keep: true, fixed: true, value: diceArray[i].value})
      }
    }

    if (diceArray.every( x => x.keep === true)) {
      array = diceInitialise()
    }

    //console.log(array);
    setDiceArray(array);
    setTotal( prev => [...prev, keepResult.score])
    setNoOfRolls(prev=>prev+1);

  }

  function celebrate() {
    if(newHighScore) setFireConfetti(true);
  }

  function checkScoringDice() {

    let allowReroll = true;
    
    for(let i = 0; i<diceArray.length; i++) {
      if(diceArray[i].fixed) continue;
      if(!diceArray[i].keep) continue;
      if(diceArray[i].value === 1 || diceArray[i].value === 5) continue;
      
      let searchValue = diceArray[i].value;
      let track = 0;
      
      for( let j=0; j<diceArray.length; j++) {
        if(diceArray[j].value === searchValue && diceArray[j].fixed === false && diceArray[j].keep === true) track++;
      }
      
      if(track < 3) {
      allowReroll = false;
      let array = [];
      for (let k = 0; k < 6; k++) {
        if( k === i ) {
          array.push({keep: false, fixed: false, value: diceArray[i].value})
        } else {
          array.push({keep: diceArray[k].keep, fixed: diceArray[k].fixed, value: diceArray[k].value})
        }
      }
      setDiceArray(array)
      }
    }

    return allowReroll;
  }

  function keepDiceToggle(index) {
    const array = [];
    for (let i = 0; i < 6; i++) {
      if(i == index && !diceArray[i].fixed) {
        array.push({keep: !diceArray[i].keep, fixed: false, value: diceArray[i].value})
      } else {
        array.push(diceArray[i])
      }
    }
    setDiceArray(array);
    //console.log(array)
    //console.log("keepdicetoggle")
  }

  function playAgain() {
    setDiceArray(()=>diceInitialise());
    setNoOfRolls(0);
    setFullResult({ "score": 0, "scoreString": ""});
    setKeepResult({ "score": 0, "scoreString": ""});
    setTotal([])
    setNewHighScore(false);
    setFireConfetti(false)
  }

  const [diceArray, setDiceArray] = useState(()=>diceInitialise());
  const [noOfRolls, setNoOfRolls] = useState(0);
  const [fullResult, setFullResult] = useState({ "score": 0, "scoreString": ""});
  const [keepResult, setKeepResult] = useState({ "score": 0, "scoreString": ""});
  const [total, setTotal] = useState([])
  const [highScore, setHighScore] = useState(0);
  const [newHighScore, setNewHighScore] = useState(false);
  const [fireConfetti, setFireConfetti] = useState(false);
  
  useEffect( () => {
    const fullArray = diceArray.filter(x => !x.fixed).map( x => x.value );
    const keepArray = diceArray.filter(x => !x.fixed).filter(x => x.keep).map( x => x.value );

    const fullArrayScore = calcScore(fullArray);
    const keepArrayScore = calcScore(keepArray);

    setFullResult(fullArrayScore);
    setKeepResult(keepArrayScore);
  }, [diceArray]
  )


  const [matches, setMatches] = useState(window.matchMedia("(max-width: 500px)").matches)

  
  useEffect(() => {

    window
    .matchMedia("(min-width: 500px)")
    .addEventListener('change', e => setMatches( e.matches ));
  
  }, []);

  return (
    <div className={`farkle_App`}>
        { fireConfetti && <Confetti
      width={"3000px"}
      height={"3000px"}
    /> }
      <div className="farkle_highScore">
        <h2>{`High Score: ${highScore}`}</h2>
      </div>

      <h1 className="farkle_h1">Farkle</h1>
      <div className="farkle_lineUpButtons">
      <DiceBoard noOfRolls={noOfRolls} diceArray={diceArray} keepDiceToggle={keepDiceToggle} />
      
      { fullResult.score != 0 &&
      <div className="farkle_buttonBox">
{/*         <button 
          className={farkle_`${keepResult.score == 0 ? "disable_button" : "active_button"} button`} 
          onClick={keepResult.score == 0 ? null : diceReRoll}
          
        >
          Bank
        </button> */}

        <h3>Select at least one scoring combination then roll again </h3>
        <button 
          className={`${keepResult.score === 0 ? "farkle_disable_button" : "farkle_active_button"} farkle_button`}  
          onClick={keepResult.score === 0 ? null : diceReRoll}
        >
          Roll Again
        </button>

      </div>
}
      </div>
      
      <div className="farkle_scoreBox">
      <Score 
        diceArray={diceArray} 
        keepResult={keepResult} 
        fullResult={fullResult}
        total={total}
        playAgain={playAgain}
        newHighScore={newHighScore}
        celebrate={celebrate}
      />
      </div>

      <div style={{"width": "80%", "margin-top":"40px"}}>
        <h4 style={{"color":"#999"}}>This game is a single player version of the popular game Farkle.</h4>
        <h4 style={{"color":"#999"}}>You must roll at least one scoring dice each turn or it's game over!</h4>
        <h4 style={{"color":"#999"}}>To score, roll a one (100 points), five (50 points) or three of a kind.</h4>
        <h4 style={{"color":"#999"}}>Each turn decide which dice to keep and then roll the rest again.</h4>
        
      </div>
      
    </div>
  );
}

export default Farkle;
