import React from 'react'

import StrainsDetails from './StrainsDetails'
import {withStrainData} from './DataProvider'

const Strains = ({strainInfo}) => {
    const strainsComponents = strainInfo.map(strainsDetails => <StrainsDetails key= {strainsDetails.id}  {...strainsDetails} /> )
    return (
        <div className={`${strainInfo}-strains`}> 
            <h1>this will have lists of strains</h1>
            <h2>{strainsComponents}</h2>
        </div>

    )

}
export default withStrainData(Strains) 