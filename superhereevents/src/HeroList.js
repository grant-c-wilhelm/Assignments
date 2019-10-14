import React from 'react'

function HeroList(props) {
    const tester = () => {
        alert(props.catchPhrase)
    }
    return (
        <div onClick= {tester} className="hero-box" key = {props.i}>
            <h1>{props.name}</h1>
            <h2>{props.show}</h2>
            <p>{props.catchPhrase}</p>
            <img src={props.imageName} alt="" />
        </div>
    )
}


export default HeroList
