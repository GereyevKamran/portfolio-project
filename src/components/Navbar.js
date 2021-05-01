import React from 'react'
import Logo from '../Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img className="logo" src={Logo} alt="Logo..."/>
    </a>
    <button 
      type="button"
      className="navbar-toggler"
      aria-label="Toggle navigation"
      data-target="#navbarSupportedContent" 
      data-toggle="collapse" 
      aria-controls="navbarSupportedContent" 
      aria-expanded="false" 
      >
        <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">How work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacts</a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar
