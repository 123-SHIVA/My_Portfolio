import React from 'react';
import './intro.css'
import bg from '../../assets/assets/myimg.png'
import btnImg from '../../assets/assets/hireme.png'
import { Link } from 'react-scroll';


const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Shivam</span><br/>full-Stack developer</span>
            <p className='intropara'>I am a skilled web desiner with experience in creating <br/>visually appealing and user friendly websites.</p>
            <Link ><button className='btn'><img src={btnImg} alt='hire me' className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt='Profile' className='bg'/>

    </section>
   
  )
}

export default Intro;
