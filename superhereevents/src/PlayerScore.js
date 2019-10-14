import React from 'react'

function PlayerScore(props) {
    return (
        <div>
            <h1> Player Score: {props.playerScore}</h1>
            <h1> Clicks it Took: {props.clicksItTook}</h1>
        </div>
    )
}

export default PlayerScore
