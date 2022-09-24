import React from 'react'
import { RiMenu3Line,RiCloseLin} from 'react-icons/ri'
import logo1 from '../../assets/logo1.svg'
import './navbar.css'
//BEM-->Block Element Modifier
const Navbar = () => {
  
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
      <div className="gpt3__navbar-links_logo">
       <img src={logo1} alt="logo" height="50px" width="50px" />   
      </div>
      <div className="gpt3__navbar-links_container">
        <p><a href="#home">home</a></p>
        <p><a href="#wgpt3">What is gpt-3</a></p>
        <p><a href="#possibility">open AI</a></p>
        <p><a href="#features">Case stidies</a></p>
        <p><a href="#blog">library</a></p>
      </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
     
    </div>
  )
}

export default Navbar