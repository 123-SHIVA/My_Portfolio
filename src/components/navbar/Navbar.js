import React from 'react';
import './navbar.css';
import logo from "../../assets/assets/logo.png"
import {Link} from "react-scroll";
import contactImg from "../../assets/assets/contact.png"
const Navbar = () => {
  return (
          <nav className='navbar'>
            <img src={logo} alt='' className='logo'/>
             <div className='desktopMenu'>
                <Link className='desktopMenuListItems'>Home</Link>
                <Link className='desktopMenuListItems'>About</Link>
                <Link className='desktopMenuListItems'>Portfolio</Link>
                <Link className='desktopMenuListItems'>Clients</Link>
             </div>
             <button className='desktopMenuBtn'>
                <img src={contactImg} alt='' className='desktopMenuImg'/>Contact Me
                
             </button>

          </nav>
  )
}

export default Navbar
