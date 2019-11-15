import React from 'react'

function BountyDisplay(props) {
    return (
        <div className="bountyDisplay-container" >
            <div className="bd-subContainer">
                <h1 className="bounty-name">{props.name}</h1>
                <img className="bounty-image" src={props.image} alt="" />
            </div>
        </div>
    ) 
}

export default BountyDisplay
