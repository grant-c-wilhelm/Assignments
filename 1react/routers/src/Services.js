import React from 'react'

import { Link } from 'react-router-dom'
import ServiceDetail from './ServiceDetail'
import ServicesContainer from './ServicesContainer'


function Services({ services }) {
    const serviceLinks = services.map((service => (
        <li key={service._id}><Link to={{ pathname: `/services/${service._id}`, state: { service } }}>{service.name}</Link></li>
    )))
    return (
        <div>
            <h1> Here are our services</h1>
            <ul>
                {serviceLinks}
            </ul>

        </div>
    )
}

export default Services
