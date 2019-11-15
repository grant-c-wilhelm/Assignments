import React from 'react'
import NavBar from "./NavBar.js"
import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";
import { Switch, Route } from "react-router-dom";
function MainView() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </div>
    )
}

export default MainView
