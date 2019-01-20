import React from 'react'

function EffectsDetails({ name, effects, medical, ...props }) {
    return (

        <section id="specificStrainDetails">
            <ul {...props}> 
                <div className='wrapper'>
                    <li>
                        <h3>{name}</h3>
                        <h5>{name} Effects: {effects.medical.join(' , ')}</h5>
                        
                    </li>
                </div>

            </ul>
        </section>

    )
}
export default EffectsDetails