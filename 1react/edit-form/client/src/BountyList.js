import React from 'react'
import Bounties from './Bounties'


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
