import React from 'react'
import Home from "./Home"
import Contact from "./Contact"
import About from "./About"
import NavBar from "./NavBar"

import { Switch, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />

      </Switch>
    </div>
  )
}

export default App

