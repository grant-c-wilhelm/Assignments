import React from 'react';
import { Route, Switch } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import NavBar from "./NavBar"
function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
      </Switch>


    </div>
  );
}

export default App;
