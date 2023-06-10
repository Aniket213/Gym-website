import React, { useEffect, useRef } from 'react'
import '../../style/sections/Section2.css'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function Section2() {
  gsap.registerPlugin(ScrollTrigger);
  let called = useRef(false);

  useEffect(() => {
    if(called.current) return;
    called.current = true;
    gsap.from('.sec2anim', {
      x: 500,
      stagger: 0.2,
      opacity: 0,
      scrollTrigger: {
          trigger: '.section2',
          // markers: true,
          start: '20% 80%',
          end: '40% 80%',
          scrub: 2,
      }
    })
  }, [])

  return (
    <div className='section2' id='programs'>
        <img className='sec2img' src="./images/L4.png" alt="" />
        <div className="section2box">
          <p className='sectionshead'>
            <span className='sec2anim'>P</span>
            <span className='sec2anim'>R</span>
            <span className='sec2anim'>O</span>
            <span className='sec2anim'>G</span>
            <span className='sec2anim'>R</span>
            <span className='sec2anim'>A</span>
            <span className='sec2anim'>M</span>
            <span className='sec2anim'>S</span>
          </p>
          <div className="section2container">
            <div className="sec2box1 sec2box">
              <i className=" sec2boxicon fa-solid fa-dumbbell"></i>
              <p className='sec2boxhead'>Muscle Training</p>
              <p className='sec2boxpara'>This is our special program which contains personal training and helps you to gain the muslces super fast like hulk.</p>
              <button className='sec2boxbtn'><a href="#pricing">Join Now</a><i className=" sec2boxbtnicon fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="sec2box2 sec2box">
              <i className=" sec2boxicon fa-solid fa-person-running"></i>
              <p className='sec2boxhead'>Basic Yoga</p>
              <p className='sec2boxpara'>In addition with some basic muscle gain exercises we will do beginner to expert level yoga with our special trainers.</p>
              <button className='sec2boxbtn'><a href="#pricing">Join Now</a><i className=" sec2boxbtnicon fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="sec2box3 sec2box">
              <i className=" sec2boxicon fa-solid fa-fire"></i>
              <p className='sec2boxhead'>Fat Burning</p>
              <p className='sec2boxpara'>This is the most demanded program of all containg a bulk of cardio exercises to make you fit, muscular and sexy.</p>
              <button className='sec2boxbtn'><a href="#pricing">Join Now</a><i className=" sec2boxbtnicon fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="sec2box4 sec2box"></div>
          </div>
        </div>
    </div>
  )
}

