import React, {Component} from 'react';

import Controls from './Controls';
import Grid from './Grid';

class Platform extends Component {
    constructor(){
        super();
        this.state={
            colors:['white','white','white','white'] //how many colors are there ?
        }
        this.handleSmallTime = this.handleSmallTime.bind(this);
        this.handlePartyDJ = this.handlePartyDJ.bind(this);//this is binding this constructor with the state to the handlesmalltime below, ALWAYS NEEDED!
    }

handleSmallTime(){
    this.setState(prevState => ({
        colors: prevState.colors.every(color => color === "black") 
        ? prevState.colors.map(color => 'white') :
          prevState.colors.map(color => 'black')  
    }))
}
handlePartyDJ(){
    this.setState(prevState => ({
        colors: prevState.colors.map((color, i) => i < prevState.colors.length / 2 ? "purple" : color)
    }))
}
    render(){
        const { colors } = this.state
        return (
            <div>
                <Controls handleSmallTime={this.handleSmallTime} handlePartyDJ = {this.handlePartyDJ} /> {/*same as below we are passing handlesmallTime thorught controls*/ }
                <Grid colors ={colors}/>        {/*the grid wants to know that the colors, so we pass colors through it*/ }

            </div>

        )
    }
}
export default Platform;