import React from 'react'

import EditForm from './EditForm';
import { withToggler } from './Toggler'
import { withBountyContext } from './BountyProvider'


function BountyDetail({ _id, name, price, alive, toggle, on, editBounty }) {
    return (
        <div>
            <h2>{name}</h2>
            <h2>${price}</h2>
            <h2>Status: {alive ? "Alive" : "Dead"}</h2>
            <button>X</button>
            <button onClick={toggle}>edit</button>
            {on && <EditForm
                inputs={{ name, price, alive }}
                submit={inputs => editBounty(_id, inputs)} />}

        </div>
    )
}

export default withBountyContext(withToggler(BountyDetail))
