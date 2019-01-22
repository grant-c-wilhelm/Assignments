import React from 'react'

import StrainsListTitle from './StrainsListTitle'
import StrainsDetails from './StrainsDetails'
import HeaderStrains from './HeaderStrains'
import { withStrainData } from './DataProvider'
import StrainsBanner from './StrainsBanner';

const Strains = ({ strainInfo }) => {
    const strainsComponents = strainInfo.map(strainsDetails => <StrainsDetails key={strainsDetails.id}  {...strainsDetails} />)
    return (
        <section>
            <HeaderStrains />
            <StrainsBanner />
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