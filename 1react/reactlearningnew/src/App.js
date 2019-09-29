import './styles.css'
import React from 'react'
import Box from './Box.js'


function App() {

    return (
        <div>
          <Box boxClass = 'box1' title = "Grant" subTitle='Wilhelm'information = 'lorem ipsum somthing or another' />
          <Box boxClass = 'box2'/>
          <Box boxClass = 'box3'/>
          <Box boxClass = 'box4'/>

        </div>
    )
}

export default App
