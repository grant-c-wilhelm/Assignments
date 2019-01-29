import React from 'react'
import bounties from './bounties.json'


import { withBountyContext } from './BountyProvider'
import BountyDetail from './BountyDetail';

function BountyList({ bounties }) {

    const bountyComponents = bounties.map(bounty => <BountyDetail key={bounty._id} {...bounty} />)

    return (
        <div>
            {bountyComponents}
        </div>
    )
}

export default withBountyContext(BountyList);
