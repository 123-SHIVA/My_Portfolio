import React from "react";
import { useRef } from "react";
import "./contact.css";
import walmart from "../../assets/assets/walmart.png";
import Adobe from "../../assets/assets/adobe.png";
import microsoft from "../../assets/assets/facebook.png";
import facebook from "../../assets/assets/facebook.png";
import facebookIcon from "../../assets/assets/facebook-icon.png";
import twitter from "../../assets/assets/twitter.png";
import instagram from "../../assets/assets/instagram.png";
import youtube from "../../assets/assets/youtube.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form=useRef();
  console.log("---------",form.current);
  const sendEmail=(e)=>{
    e.preventDefault();
    

    emailjs
    .sendForm('service_sh5xqgo', 'template_b0rbbfe', form.current, {
        publicKey: 'mKvys_HscvTzhmjMd',
    })
    .then(
        () => { alert("message send successfully"); e.target.reset()},
        (error) => {
            console.log('FAILED...', error.text);
        },
    );
};

  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          I have had the oppurtunity to work with a diverse group of companies.
          Some of notable companies I have worked with includes
        </p>
        <div className="clientImages">
          <img src={walmart} alt="walmart" className="clientImg" />
          <img src={Adobe} alt="adobe" className="clientImg" />
          <img src={microsoft} alt="microsoft" className="clientImg" />
          <img
            src={facebook}
            alt="facebook                                    "
            className="clientImg"
          />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">
          Contact Me </h1>
          <span className="contactDesc">
            Please fill out the form below to discuss any work oppurtunities.
          </span>
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
           <input type="text" className="name" placeholder="Your name"name="name"/>
           <input type="email" className="email" placeholder="Your email" name="email"/>
           <textarea name="message" rows="5" placeholder="Your message" className="msg"></textarea>
           <button type="submit" value='send' className="submitBtn">Submit</button>
           <div className="links">
            <img src={facebookIcon} alt="facebook" className="link"></img>
            <img src={twitter} alt="twitter" className="link"></img>
            <img src={instagram} alt="instagram" className="link"></img>
            <img src={youtube} alt="youtube" className="link"></img>
           </div>
          </form>
      </div>
    </section>
  );
};

export default Contact;
