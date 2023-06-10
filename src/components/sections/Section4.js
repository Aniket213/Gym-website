import React, { useEffect, useRef } from 'react'
import '../../style/sections/Section4.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function Section4() {
    gsap.registerPlugin(ScrollTrigger);
    let called = useRef(false);

    useEffect(() => {
      if(called.current) return;
      called.current = true;
      const t = gsap.timeline();
      t.from('.sec4anim', 2,  {
        yPercent: 100,
        opacity: 0, 
        scale: 0,
        stagger: 0.5,
        // color: '#f77f00',
        scrollTrigger: {
            trigger: '.section4',
            // markers: true,
            start: '20% 80%',
            end: '40% 80%',
            scrub: 2,
        }
      })
      .from('.dummy', 2,  {
        y: 200, 
        scale: 0,
        stagger: 0.5,
        scrollTrigger: {
            trigger: '.section4',
            // markers: true,
            start: '20% 70%',
            end: '40% 70%',
            scrub: 2,
        }
      })
  
    }, [])

  return (
    <div className='section4' id='trainers'>
        {/* <p className="section4head"> EXPERT TRAINERS</p> */}
        <p className="section4head">
            <span className='sec4anim'>E</span>
            <span className='sec4anim'>X</span>
            <span className='sec4anim'>P</span>
            <span className='sec4anim'>E</span>
            <span className='sec4anim'>R</span>
            <span className='sec4anim sec4animpadding'>T</span>
            <span className='sec4anim'>T</span>
            <span className='sec4anim'>R</span>
            <span className='sec4anim'>A</span>
            <span className='sec4anim'>I</span>
            <span className='sec4anim'>N</span>
            <span className='sec4anim'>E</span>
            <span className='sec4anim'>R</span>
            <span className='sec4anim'>S</span>
        </p>

        <div className="sec4boxcontainer">
            <div className="dummy">
                <div className="sec4box1 sec4box"></div>
                <div className="sec4trainerinfo">
                    <p className="sec4fame">Cardio Specialist</p>
                    <p className="sec4name">Sourabh Mishra</p>
                    <button className="sec4btn"><a href="#pricing">Join Now</a></button>
                </div>
            </div>
            <div className="dummy">
                <div className="sec4box2 sec4box"></div>
                <div className="sec4trainerinfo">
                    <p className="sec4fame">Muscle Trainer</p>
                    <p className="sec4name">Aniket Mittal</p>
                    <button className="sec4btn"><a href="#pricing">Join Now</a></button>
                </div>
            </div>
            <div className="dummy">
                <div className="sec4box3 sec4box"></div>
                <div className="sec4trainerinfo">
                    <p className="sec4fame">Fat Burner</p>
                    <p className="sec4name">Rajit Choudhary</p>
                    <button className="sec4btn"><a href="#pricing">Join Now</a></button>
                </div>
            </div>
            <div className="dummy">
                <div className="sec4box4 sec4box"></div>
                <div className="sec4trainerinfo">
                    <p className="sec4fame">Yoga Specialist</p>
                    <p className="sec4name">Bad girl</p>
                    <button className="sec4btn"><a href="#pricing">Join Now</a></button>
                </div>
            </div>
        </div>
    </div>
  )
}
