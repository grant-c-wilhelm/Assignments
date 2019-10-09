import React, { Component } from 'react'
import './style.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //My Counter
            clickCount: 0,
            //Start Colors
            box1Color: 'red',
            box2Color: 'yellow',
            box3Color: 'white',
            box4Color: 'white',
            //Color Arrays
            boxColorArray:
                ['red', 'white', 'blue'],
            boxTwoColorArray:
                ['LightGoldenRodYellow', 'aqua', 'firebrick', 'darkslategray', 'indigo', 'lightsteelblue', 'lightseagreen', 'yellowgreen', 'violet'],
            shadesOfPinkArray: 
                ['deeppink','hotpink','lightpink','MediumVioletRed','PaleVioletRed','Pink']
        }

    }
    changeColorWhite = () => {
        this.state.box1Color === 'black' ?
            this.setState({ box1Color: 'white' }) :
            this.setState({ box1Color: 'black' })
    }
    counter = (arr) => {
        this.state.clickCount >= (arr.length - 1) ?
            this.setState({ clickCount: 0 }) :
            this.setState({ clickCount: this.state.clickCount + 1 })
    }

    americanColors = () => {
        this.setState({ box1Color: this.state.boxColorArray[this.state.clickCount] })
        this.setState({ box2Color: this.state.boxColorArray[this.state.clickCount] })
        this.setState({ box3Color: this.state.boxColorArray[this.state.clickCount] })
        this.setState({ box4Color: this.state.boxColorArray[this.state.clickCount] })
 
        this.counter(this.state.boxColorArray)
    }
    nineColors = () => {
        this.setState({ box2Color: this.state.boxTwoColorArray[this.state.clickCount] })
        this.setState({ box3Color: this.state.boxTwoColorArray[this.state.clickCount] })
        this.counter(this.state.boxTwoColorArray)
    }
    shadesOfPink = () => {
        this.setState({ box1Color: this.state.shadesOfPinkArray[this.state.clickCount] })
        this.setState({ box4Color: this.state.shadesOfPinkArray[this.state.clickCount] })
        this.counter(this.state.shadesOfPinkArray)
    }
    crazyNess = () => {
        this.nineColors()
        this.shadesOfPink()
    }


    render() {

        const boxStyle = {
            backgroundColor: this.state.box1Color
        }
        const boxStyleTwo = {
            backgroundColor: this.state.box2Color
        }
        const boxStyleThree = {
            backgroundColor: this.state.box3Color,
        }
        const boxStyleFour = {
            backgroundColor: this.state.box4Color,
        }


        return (
            <div>
                <div>
                    <div className="box" style={boxStyle}></div>
                    <div className="box" style={boxStyleTwo}></div>
                </div>
                <div>
                    <div className="box-two" style={boxStyleThree}></div>
                    <div className="box-two" style={boxStyleFour}></div>
                </div>
                <button onClick={this.americanColors} >Tap</button>
                <button onClick={this.nineColors} >Taperoo!</button>
                <button onClick={this.shadesOfPink} >Pinks!</button>
                <button onClick={this.crazyNess} >Crzy!!</button>
            </div>
        )

    }
}



export default App