import React from 'react'

import StrainsListTitle from './StrainsListTitle'
import EffectsDetails from './EffectsDetails'
import { withStrainData } from './DataProvider'

const Effects = ({ strainInfo }) => {
    const effectsComponents = strainInfo.map(effectsDetails => <EffectsDetails key={effectsDetails.id} {...effectsDetails} />)
    return (
        <section>
            <div className='wrapper'>
                <div className={`${strainInfo}-effects`}>
                    <h2>{effectsComponents}</h2>

                </div>

            </div>



        </section>
    )
}


export default withStrainData(Effects) 