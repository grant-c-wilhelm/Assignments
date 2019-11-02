import React from 'react'
import { Switch, Route } from "react-router-dom"
import About from "./About"
import Contact from "./Contact"
import Home from "./Home"
import NavBar from './NavBar'
import Form from './Form'
function App() {
  return (
    <div>
      <NavBar />
      <Form />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />

      </Switch>
    </div>
  )
}

export default App
