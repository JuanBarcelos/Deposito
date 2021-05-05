import './styles.css';
import {ReactComponent as Logo} from './logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
  return (
    <nav className="main-navbar">
        <Logo />
        <Link to="/" className="logo-text"> Deposito Dois Irmãos</Link>
    </nav>
  )

}


export default Navbar;