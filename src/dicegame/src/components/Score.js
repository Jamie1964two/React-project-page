import React, {useState, useEffect} from 'react';
import '../farkle_styles.css'


export default function Score(props) {

    const [matches, setMatches] = useState(window.matchMedia("(max-width: 400px)").matches)

  
    useEffect(() => {
  
      window
      .matchMedia("(max-width: 400px)")
      .addEventListener('change', e => setMatches( e.matches ));
    
    }, []);

    //console.log(props.fullResult)

    if(props.fullResult.score === 0){

        return(
            <div className="farkle_flexCenter">
                <h2 className="farkle_farkled">You're FARKLED!</h2>
                {props.newHighScore && 
                <h3 className="farkle_farkledh3">New High Score!</h3>
                }   
                <button className="farkle_playAgain" onClick={props.playAgain}>Play Again</button>
            </div>
        ) 

    }

    const scoreLinesFull = props.fullResult.scoreString.map( line => {
        return (
            <h4 className='farkle_scoreTextGrey'>{line}</h4>
        )
    })

    const scoreLinesKeep = props.keepResult.scoreString.map( line => {
        return (
            <h4 className="farkle_scoreText">{line}</h4>
        )
    })

    const scoreLinesTotal = props.total.map( (x,i) => {
        return (
            <h4 className="farkle_scoreTextGrey">{`${i+1} : ${x}`}</h4>
        )
    })


    return (

        <div>
            <div className={`farkle_scoreTextBox ${matches ? "farkle_scoreTextBox_column" : "farkle_scoreTextBox_row"}`}>
                <div>
                    <div className="farkle_fullKeepBox farkle_fullBox">
                        <h3 className="farkle_totals">Roll:</h3>
                        {scoreLinesTotal}
                    </div>
                    <h4 className="farkle_keepScoreText">{`Total: ${props.total.reduce( (partialSum, a) => partialSum + a, 0)}`}</h4>
                </div>
                <div className="farkle_fullKeepBox farkle_fullBox">
                    <h3 className="farkle_totals">On table:</h3>
                    {scoreLinesFull}
                </div>
                <div>
                    <div className="farkle_fullKeepBox">
                        <h3 className="farkle_scoreText farkle_totals">Held:</h3>
                        {scoreLinesKeep}
                    </div>
                    <h4 className="farkle_keepScoreText">{`Total: ${props.keepResult.score}`}</h4>
                </div>
            </div>
        </div>
    )

}
