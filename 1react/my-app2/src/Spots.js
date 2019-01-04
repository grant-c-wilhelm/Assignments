import React from 'react';

const Spots = ({ place, price, timeToGo, ...props }) => {
    return (
        <div {...props}>
            <div>
                {place}
                {price}
                {timeToGo}
            </div>
        </div>
    )

}
export default Spots