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
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItems'>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-30} duration={500} className='desktopMenuListItems'>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItems'>Portfolio</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItems'>Clients</Link>
             </div>
             <button className='desktopMenuBtn' onClick={()=>{
               document.getElementById('contact').scrollIntoView({behavior:'smooth' ,offset:'-100'})
             }}>
                <img src={contactImg} alt='' className='desktopMenuImg'/>Contact Me
                
             </button>

          </nav>
  )
}

export default Navbar
