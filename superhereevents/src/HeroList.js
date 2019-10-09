import React from 'react'

function HeroList(props) {
    return (
        <div className="hero-box" key = {props.i}>
            <h1>{props.name}</h1>
            <h2>{props.show}</h2>
            <p>{props.catchPhrase}</p>
            <img src={props.imageName} alt="" />
        </div>
    )
}


export default HeroList
