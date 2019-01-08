import React from 'react';

import Products from './Products';
import VschoolProducts from './VschoolProducts';


const ProductComps = () => {
    const Components = VschoolProducts.map((product) => {
        return (
            <Products key = {product} 
            name = {name.product} 
            price = {price.product} 
            description = {description.product} 
            />
        )
    })
    return (
        <div>
            {Components}
        </div>
        
    )
}

export default ProductComps;