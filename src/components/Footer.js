import React, { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser';
import '../style/Footer.css'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function Footer() {
  gsap.registerPlugin(ScrollTrigger);
  let called = useRef(false);

  useEffect(() => {
    if(called.current) return;
    called.current = true;

    gsap.from('.footer', {
        y: 100,
        scrollTrigger: {
            trigger: '.footer',
            // markers: true,
            start: '0% 80%',
            end: '40% 80%',
            scrub: 2,
        }
    })
  })

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [msg, setmsg] = useState("");
  const footerform = useRef();

  const footersendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_6ezrld9', 'template_te1asbs', footerform.current, 'FGnXf-_jeCjzh21Bo')
      .then((result) => {
          console.log(result.text);
          setname("");
          setemail("");
          setmsg("");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='footer'>
        <div className="footercontainer">
          <div className="quicklinks footerchild">
            <div className="footerhead">Quick Links</div>
            <div className="linkscontainer">
              <a href="#home">Home</a>
              <a href="#pricing">Pricing</a>
              <a href="#programs">Programs</a>
              <a href="#trainers">Trainers</a>
              <a href="#bmi">BMI</a>
              <a href="#chooseus">Choose Us</a>
            </div>
          </div>
          <div className="footertimings footerchild">
            <div className="footerhead">Gym Timings</div>
            <div className="timingscontainer">
              <p className='timingsbox'>Monday : <span className='timings'>4:00am - 11:30pm</span></p>
              <p className='timingsbox'>Tuesday : <span className='timings'>4:00am - 11:30pm</span></p>
              <p className='timingsbox'>Wednesday : <span className='timings'>4:00am - 11:30pm</span></p>
              <p className='timingsbox'>Thursday : <span className='timings'>4:00am - 11:30pm</span></p>
              <p className='timingsbox'>Friday : <span className='timings'>4:00am - 11:30pm</span></p>
              <p className='timingsbox'>Saturday : <span className='timings'>5:00am - 11:30pm</span></p>
              <p className='timingsbox'>Sunday : <span className='timings'>Closed</span></p>
            </div>
          </div>
          <div className="footercontact footerchild">
            <div className="footerhead">Contact Details</div>
            <div className="contactcontainer">
              <div className="contactchild"><i className="contacticon fa-solid fa-phone"></i> 91-6378355363</div>
              <div className="contactchild"><i className="contacticon fa-solid fa-envelope"></i> aniketmittal222@gmail.com</div>
              <div className="contactchild"><i className="contacticon fa-solid fa-location-dot"></i> Chandigarh, India - 135003</div>
            </div>
            <div className="contactsocialmedia">
              <a href="https://www.linkedin.com/in/aniket213" rel="noreferrer" target="_blank"><i className="contactsocialicon fa-brands footerfacebook fa-facebook"></i></a>
              <a href="https://www.linkedin.com/in/aniket213" rel="noreferrer" target="_blank"><i className="contactsocialicon fa-brands footerlinkedin fa-linkedin-in"></i></a>
              <a href="https://www.linkedin.com/in/aniket213" rel="noreferrer" target="_blank"><i className="contactsocialicon fa-brands footerinstagram fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/aniket213" rel="noreferrer" target="_blank"><i className="contactsocialicon fa-brands footertwitter fa-twitter"></i></a>
            </div>
          </div>
          <div className="footernewsletter footerchild">
            <div className="footerhead">Newsletter</div>
            <form ref={footerform} onSubmit={footersendEmail} className="footerform" autoComplete='off'>
              <p className="footerformpara">Subscribe for updates</p>
              <input className='footerformmail' type="text" name="user_name" id="" placeholder='Name' value={name} onChange={(e)=>{setname(e.target.value)}} required/>
              <input className='footerformmail' type="email" name="user_email" id="" placeholder='Email' value={email} onChange={(e)=>{setemail(e.target.value)}} required/>
              <input className='footerformfeedback' type="text" name="message" id="" placeholder='Feedback' value={msg} onChange={(e)=>{setmsg(e.target.value)}} required/>
              <input className='footerformbtn' type="submit" value="Submit" />
            </form>
          </div>
        </div>
    </div>
  )
}
