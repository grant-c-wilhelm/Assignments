import React from 'react';
import { Switch, Route } from "react-router-dom"
import AboutUs from './AboutUs';
import ContactUs from './Contact';
import Home from './Home';
import NavBar from './NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
       <Route exact path='/'  component={Home}/>
       <Route path='/about'   component={AboutUs}/>
       <Route path='/contact' component={ContactUs}/>
       
      </Switch>


    </div>
  );
}

export default App;
