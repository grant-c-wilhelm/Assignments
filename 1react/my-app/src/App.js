import React from 'react';

import logo from "./assets/attachmentLogo.jpg";
import logo from "./assets/search.png";

const App = () => (
   <div className="container center">
        <nav className="menu">

            <h1 style={{
              'backgroundImage'
            }} className="menu__logo"></h1>///////////

            <div classNameName="menu__right">

                <ul className="menu__list">
                    <li className="menu__list-item"><a className="menu__link menu__link--active" href="#">Home</a></li>
                    <li className="menu__list-item"><a className="menu__link" href="#">About</a></li>
                    <li className="menu__list-item"><a className="menu__link" href="#">Portfolio</a></li>
                    <li className="menu__list-item"><a className="menu__link" href="#">Contact</a></li>
                </ul>

                <button className="menu__search-button"></button>
                <form className="menu__search-form hide" method="POST">
                    <input className="menu__search-input" placeholder="Type and hit enter"></input>
                </form>
            </div>
        </nav>
    </div>
  
 
  );

export default App;
