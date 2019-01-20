import React from 'react'

import StrainsListTitle from './StrainsListTitle'
import StrainsDetails from './StrainsDetails'
import { withStrainData } from './DataProvider'

const Strains = ({ strainInfo }) => {
    const strainsComponents = strainInfo.map(strainsDetails => <StrainsDetails key={strainsDetails.id}  {...strainsDetails} />)
    return (
        <section>
            <StrainsListTitle />
            <div className='wrapper'>
                <div className={`${strainInfo}-strains`}>
                    <h2>{strainsComponents}</h2>
                </div>
            </div>
        </section>
    )
}
export default withStrainData(Strains)  