import React from 'react' 

import ServicesContainer from './ServicesContainer'

 const ServiceDetail = ({name, _id, description, provider, price}) => {
     return (
        <div>
            <h2>{name}</h2>
            <h4>{price}</h4>
            <h4>{description}</h4>
            <h4>{provider}</h4>
            <h4>{_id}</h4>
        </div>
     )
 }

export default ServiceDetail; 
