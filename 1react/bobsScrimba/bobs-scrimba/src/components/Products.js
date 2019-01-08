import React from 'react';
import VschoolProducts from './VschoolProducts';

const Product = (props) => {
    return (
        <div className="product">
            <h1>{props.name}</h1>
            <h2>${props.price}</h2>
            <h4>{props.description}</h4>
        </div>
    )
}
export default Products;