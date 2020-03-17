import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './index.css'
import Header from "./Header.js"
import Navbar from "./Navbar.js"
import Registry from './Registry'
import Location from './Location'
import Home from './Home'
import When from './When'
function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/location" component={Location} />
        <Route path="/registry" component={Registry} />
        <Route path="/when" component={When} />
      </Switch>

    </div>
  );
}

export default App;
