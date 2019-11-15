import React, { Component } from 'react'
import MainView from './MainView'
import BountyDisplay from './BountyDisplay'
import axios from 'axios'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    axios.get("https://s3.amazonaws.com/v-school/data/hitlist.json")
      .then(response => {
        console.log(response)
        this.setState({
          data: response.data
        })
      })
      .catch(error => console.log(error))

  }
  render() {
    const mappedData = this.state.data.map(indivData =>
      <BountyDisplay
        name={indivData.name}
        image={indivData.image}
      />
    )
 
    return (
      <div>
        <MainView />
        <div className="bounty-container">
          {mappedData}
        </div>

      </div>
    )
  }
}
