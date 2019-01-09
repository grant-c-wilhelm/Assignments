import React from 'react';

const Button = ({on, ...props}) => {
    render(
        <div>
        <button {...props}>{on ? 'OFF' : "ON"}</button>
    </div>
    )
    
};
export default Button;