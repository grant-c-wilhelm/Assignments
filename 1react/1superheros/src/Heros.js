import React from 'react'
import herosList from './herosList'


const Heros = ({ alias, realname, power, hometown, ...props }) => {
    return (
        <div{...props}>
            <div className='data-text-display'>
                Alias: {alias} <br></br>
                Name: {realname}  <br></br>
                Power: {power} <br></br>
                Hometown: {hometown}  
            </div>
        </div>
    )
}
export default Heros;