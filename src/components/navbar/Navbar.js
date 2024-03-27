import React, { useState } from 'react';
import './navbar.css';
import logo from "../../assets/assets/logo.png"
import {Link} from "react-scroll";
import contactImg from "../../assets/assets/contact.png"
import menu from '../../assets/assets/menu.png'
const Navbar = () => {
  const [showMenu,setShowMenu]=useState(false)
  return (

          <nav className='navbar'>
            <img src={logo} alt='' className='logo'/>
             <div className='desktopMenu'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItems'>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItems'>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItems'>Portfolio</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItems'>Clients</Link>
             </div>
             <button className='desktopMenuBtn' onClick={()=>{
               document.getElementById('contact').scrollIntoView({behavior:'smooth' ,offset:'-100'})
             }}>
                <img src={contactImg} alt='' className='desktopMenuImg'/>Contact Me
                
             </button>

             <img src={menu} alt='menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>

             <div className='navMenu' style={{display:showMenu?'flex':'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItems'onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItems'onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItems'onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='listItems'onClick={()=>setShowMenu(false)}>Clients</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItems'onClick={()=>setShowMenu(false)}>Contact</Link>
             </div>

          </nav>
  )
}

export default Navbar
