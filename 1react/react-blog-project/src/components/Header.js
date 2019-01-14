import React from 'react';

import NavBar from './NavBar'

import { PageHeader } from 'react-bootstrap'
import { Jumbotron } from 'react-bootstrap'
const Header = () => (
    <Jumbotron id='mainHeadDiv'  >
        <NavBar />
        <img className='headImage' src={require('../assets/images/home-bg.jpg')} />            
        

    </Jumbotron>




);

export default Header;
