import React from 'react'

function StrainsDetails({ name, race, flavors, ...props }) {
    return (

        <section id="specificStrainDetails">
            <ul {...props}>
                <div className='individualDetails'>
                    <li>
                        <h3>Strain Name: {name}</h3>
                        <p>{name} Genetics: {race}</p>
                        <p>{name} Flavors: {flavors.join(", ")}</p>
                    </li>
                </div>

            </ul>
        </section>

    )
}
export default StrainsDetails
