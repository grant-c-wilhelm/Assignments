import React from 'react'

import SkierDetail from './SkierDetail.js';

import { withSkierContext } from './SkiInfoProvider.js';

// import skierInfo from './skierInfo.json';


const SkierList = ({ skierData }) => {
    // const skierComponents = skierInfo.map(skiers => <SkierDetail key={skiers._id} {...skiers} />)
    const skierComponents = skierData.map(skiers => <SkierDetail key={skiers._id} {...skiers} />)

    return (
        <div>
            {skierComponents}
        </div>
    )
}

export default withSkierContext(SkierList)
