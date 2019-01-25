import React from 'react'

import EditForm from "./EditForm"

import {withToggler} from './Toggler'

function BotDetail({name, price, alive, toggler, on}) {
    return (
        <div>
            <h3>{name}</h3>
            <p>{price}</p>
            <p>{alive}</p>
            <button>X</button>
            <button onClick={toggle}>Edit</button>
            <EditForm inputs={{name, price, alive}} />
        </div>
    )
}

export default withToggler(BotDetail)
