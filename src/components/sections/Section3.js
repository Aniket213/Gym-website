import React, { useEffect, useRef } from 'react'
import '../../style/sections/Section3.css'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function Section3() {
    gsap.registerPlugin(ScrollTrigger);
    let called = useRef(false);

    useEffect(() => {
      if(called.current) return;
      called.current = true;
      gsap.from('.sec3anim', {
        x: 100,
        opacity: 0,
        stagger: 0.5,
        // scale: 0,
        scrollTrigger: {
            trigger: '.section3',
            // markers: true,
            start: 'top top',
            end: '150% top',
            scrub: 4,
            pin: true,
        }
      })
  
    }, [])


  return (
    <div className='section3' id='chooseus'>
        <div className="section3box">
            <img className='sec3img' src="./images/girl3.png" alt="gym girl" />

            <div className="sec3content">
                <p className="sec3smallhead">BEST REASON</p>
                <p className="sec3head sec3anim">Why Choose Us ?</p>
                <p className="sec3para sec3anim"><i className="sec3tick fa-solid fa-check"></i>  Modern gym filled with high tech equipment's</p>
                <p className="sec3para sec3anim"><i className="sec3tick fa-solid fa-check"></i>  Atmosphere full of fun, Motivation and excitement.</p>
                <p className="sec3para sec3anim"><i className="sec3tick fa-solid fa-check"></i>  Amazing trainers and coaches with years of experience.</p>
                <p className="sec3para sec3anim"><i className="sec3tick fa-solid fa-check"></i>  Affordable prices and extra discount for new members.</p>
                <div className="sec3contentbox">
                    <div className="sec3box1 sec3box sec3anim">
                        <p className="sec3num">200 +</p>
                        <p className="sec3numbelow">Total Members</p>
                    </div>
                    <div className="sec3box2 sec3box sec3anim">
                        <p className="sec3num">50 +</p>
                        <p className="sec3numbelow">Skilled Trainers</p>
                    </div>
                    <div className="sec3box3 sec3box sec3anim">
                        <p className="sec3num">25 +</p>
                        <p className="sec3numbelow">Great Programs</p>
                    </div>
                    <div className="sec3box4 sec3box sec3anim">
                        <p className="sec3num">100 +</p>
                        <p className="sec3numbelow">National Awards</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
