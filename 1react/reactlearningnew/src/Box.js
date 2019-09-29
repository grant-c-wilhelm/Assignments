import React from 'react'

function Box(props) {
    return (
        <div className={`${props.boxClass}`} >
           <p>{props.title}</p>
           <p>{props.subTitle}</p>
           <p>{props.information}</p>

        </div>
    )
}

export default Box
