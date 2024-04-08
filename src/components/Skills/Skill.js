import React from 'react'
import './skill.css';
import UIDesign from "../../assets/assets/ui-design.png"
import WebDesign from "../../assets/assets/website-design.png"
import AppDesign from "../../assets/assets/app-design.png"

let data=[
    {
        img:UIDesign,
        text:"UI/UX Designer",
        para:"This is a demo text,you can write your own text here.",
    },
    {
        img:WebDesign,
        text:"Website Design",
        para:"This demo text can be changed while making the production ready website."
    },
    {
        img:AppDesign,
        text:"App Design",
        para:"You can write text related to mobile app development."
    }
]

const Skill = () => {
  return (
   <section id='skills'>
    <span className='skillTitle'>What I do</span>
    <span className='skillDesc'>
        I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.I have a strong understanding of design and a keen eye for detail.I am proficient in HTML,CSS,and javascript ,as well as design website such as ITC Online and udemyClone
    </span>

    <div class="container">
    <label for="htmlRange">HTML:</label>
    <input type="range" min="0" max="100" value="90" id="htmlRange" class="rangeInput"/>
    <div class="percentageDisplay" id="htmlPercentage">90%</div>
</div>

<div class="container">
    <label for="cssRange">CSS:</label>
    <input type="range" min="0" max="100" value="90" id="cssRange" class="rangeInput"/>
    <div class="percentageDisplay" id="cssPercentage">90%</div>
</div>

<div class="container">
    <label for="javascriptRange">JavaScript:</label>
    <input type="range" min="0" max="100" value="90" id="javascriptRange" class="rangeInput"/>
    <div class="percentageDisplay" id="javascriptPercentage">90%</div>
</div>

<div class="container">
    <label for="reactjsRange">React JS:</label>
    <input type="range" min="0" max="100" value="90" id="reactjsRange" class="rangeInput"/>
    <div class="percentageDisplay" id="reactjsPercentage">90%</div>
</div>
    {/* <div className='skillBars'>
    {data.map((item, index) => (
    <div key={index} className='skillBar'>
        <img src={item.img} alt='Sorry!' className='skillBarImg'/>
        <div className='skillBarText'>
            <h2>{item.text}</h2>
            <p>{item.para}</p>
        </div>
    </div>
))}

    </div> */}
   </section>
  )
}

export default Skill
