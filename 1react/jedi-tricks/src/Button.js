import React from 'react'


const Button = ({ children, style, ...props }) => {

    return (
        <button style={style} {...props} >
            {children}
        </button>
    )
}

export default Button;

export const styleButton = style => props => (
   
    <Button style = {style}{...props}>
        {props.children}
   
    </Button>
)

export const OKButton = styleButton({
    backgroundColor:'green',
})

export const XButton = styleButton({
    backgroundColor:'red',
})


