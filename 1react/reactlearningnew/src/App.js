import './styles.css'
import React from 'react'
import Box from './Box.js'
import Turtles from './Turtles'
import VacationSpots from './VacationSpots'


function App() {

    return (
        <div>
            <Box boxClass='box1'
                title={"Grant"}
                subTitle={'Wilhelm'}
                information='lorem ipsum somthing or another'
            />
            <Box boxClass='box2'
                title={"Grant"}
                subTitle={'Wilhelm'}
                information='lorem ipsum somthing or another'
            />
            <Box boxClass='box3'
                title={"Grant"}
                subTitle={'Wilhelm'}
                information='lorem ipsum somthing or another' />
            <Box boxClass='box4'
                title={"Grant"}
                subTitle={'Wilhelm'}
                information='lorem ipsum somthing or another' />
            {/* <Turtles /> */}
            <div> <VacationSpots /></div>
        </div>
    )
}

export default App
