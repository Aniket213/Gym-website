import React, { useEffect, useRef } from 'react'
import '../../style/sections/Section6.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function Section6() {
  gsap.registerPlugin(ScrollTrigger);
  let called = useRef(false);
  useEffect(() => {
    if(called.current) return;
    called.current = true;

    gsap.from('.sec6anim', {
      yPercent: 100,
      opacity: 0, 
      scale: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.section6',
        // markers: true,
        start: '20% 80%',
        end: '50% 80%',
        scrub: 2,
      }
    })

  }, [])
  
  return (
    <div className='section6' id="pricing">
        {/* <p className="section6head">PRICING PLAN</p> */}
        <p className="section6head">
          <span className="sec6anim">P</span>
          <span className="sec6anim">R</span>
          <span className="sec6anim">I</span>
          <span className="sec6anim">C</span>
          <span className="sec6anim">I</span>
          <span className="sec6anim">N</span>
          <span className="sec6anim sec6padding">G</span>
          <span className="sec6anim">P</span>
          <span className="sec6anim">L</span>
          <span className="sec6anim">A</span>
          <span className="sec6anim">N</span>
        </p>
        <div className="sec6container">
          <div className="sec6box1 sec6box">
            <p className="sec6iconbox"><i className="sec6icon fa-solid fa-circle-half-stroke"></i></p>
            <p className="sec6plan">BASIC PLAN</p>
            <p className="sec6price">$150</p>
            <div className="sec6planitems">
              <p className='sec6planitem'><span className='sec6tick'>&#10004;</span>Special gym T-Shirt</p>
              <p className='sec6planitem'><span className='sec6tick'>&#10004;</span>Protein Bottle Sipper</p>
              <p className='sec6darkcolor sec6planitem'><span className='sec6tick'>&#10004;</span>Personal Training</p>
              <p className='sec6darkcolor sec6planitem'><span className='sec6tick'>&#10004;</span>Access to videos</p>
              <p className='sec6darkcolor sec6planitem'><span className='sec6tick'>&#10004;</span>Expert diet plans</p>
            </div>
            <button className="sec6btn">Purchase Now</button>
          </div>

          <div className="sec6box1 sec6box">
            <p className="sec6iconbox"><i className="sec6icon fa-solid fa-gem"></i></p>
            <p className="sec6plan">DIAMOND PLAN</p>
            <p className="sec6price">$250</p>
            <div className="sec6planitems">
              <p className='sec6planitem'><span className='sec6tick'>&#10004;</span>Special gym T-Shirt</p>
              <p className='sec6planitem'><span className='sec6tick'>&#10004;</span>Protein Bottle Sipper</p>
              <p className='sec6planitem'><span className='sec6tick'>&#10004;</span>Personal Training</p>
              <p className='sec6darkcolor sec6planitem'><span className='sec6tick'>&#10004;</span>Access to videos</p>
              <p className='sec6darkcolor sec6planitem'><span className='sec6tick'>&#10004;</span>Expert diet plans</p>
            </div>
            <button className="sec6btn">Purchase Now</button>
          </div>

          <div className="sec6box1 sec6box">
            <p className="sec6iconbox"><i className="sec6icon fa-solid fa-crown"></i></p>
            <p className="sec6plan">PREMIUM PLAN</p>
            <p className="sec6price">$400</p>
            <div className="sec6planitems">
              <p className='sec6planitem'><span className='sec6tick'>&#10004;</span>Special gym T-Shirt</p>
              <p className='sec6planitem'><span className='sec6tick'>&#10004;</span>Protein Bottle Sipper</p>
              <p className='sec6planitem'><span className='sec6tick'>&#10004;</span>Personal Training</p>
              <p className='sec6planitem'><span className='sec6tick'>&#10004;</span>Access to videos</p>
              <p className='sec6planitem'><span className='sec6tick'>&#10004;</span>Expert diet plans</p>
            </div>
            <button className="sec6btn">Purchase Now</button>
          </div>
        </div>
    </div>
  )
}
