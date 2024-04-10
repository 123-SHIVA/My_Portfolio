import React from 'react';
import './intro.css'
import bg from '../../assets/assets/myimg.png'
import btnImg from '../../assets/assets/hireme.png'
import resume from '../../Shivam.pdf';

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='introName'>Shivam</span><br/>full-Stack developer</span>
        <p className='intropara'>I am a skilled web designer with experience in creating <br/>visually appealing and user-friendly websites.</p>
        <a href={resume} download='Shivam kuamr ojha resume'>
          <button className='btn'>
            <img src={btnImg} alt='hire me' className='btnImg'/>
            Hire me
          </button>
        </a>
      </div>
      <img src={bg} alt='Profile' className='bg'/>
    </section>
  )
}

export default Intro;
