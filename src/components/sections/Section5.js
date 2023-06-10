import React, { useState, useEffect, useRef } from 'react'
import '../../style/sections/Section5.css'
import gsap, { Power3 } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function Section5() {

  gsap.registerPlugin(ScrollTrigger);
  let called = useRef(false);

  useEffect(() => {
    if(called.current) return;
    called.current = true;
    const t = gsap.timeline();
    t.from('.sec5anim',  {
      yPercent: -300,
      xPercent: 100,
      opacity: 0, 
      rotateX: 40,
      rotateZ: 40,
      stagger: 0.5,
      scrollTrigger: {
          trigger: '.section5',
          // markers: true,
          start: '10% 80%',
          end: '60% 80%',
          scrub: 4,
      }
    })
    .from('.height', {
      xPercent: -100,
      opacity: 0,
      ease: Power3.out,
      scale: 0,
      scrollTrigger: {
        trigger: '.section5',
        // markers: true,
        start: '40% 80%',
        end: '60% 80%',
        scrub: 2,
      }
    })
    .from('.weight', {
      xPercent: 100,
      opacity: 0,
      scale: 0,
      scrollTrigger: {
        trigger: '.section5',
        // markers: true,
        start: '40% 80%',
        end: '60% 80%',
        scrub: 2,
      }
    })
    .from('.sec5btn', {
      yPercent: 500,
      opacity: 0,
      scale: 0,
      scrollTrigger: {
        trigger: '.section5',
        // markers: true,
        start: '40% 80%',
        end: '60% 80%',
        scrub: 2,
      }
    })

  }, [])

  const [height, setheight] = useState();
  const [weight, setweight] = useState();
  const [output, setoutput] = useState('')
  const [type, settype] = useState(' ');

  const submithandler = ()=>{
    const bmi = ((weight*10000)/(height*height));
    const ans = Math.round(bmi);
    if(ans<19) {
      setoutput(`BMI -> ${ans}`);
      settype('UNDERWEIGHT');
    } else if(ans<25){
      setoutput(`BMI -> ${ans}`);
      settype('HEALTHY');
    } else if(ans<30){
      setoutput(`BMI -> ${ans}`);
      settype('OVERWEIGHT');
    } else if(ans>30){
      setoutput(`BMI -> ${ans}`);
      settype('OBESE');
    } else{
      setoutput('Please fill the values of height and weight');
    }
  }
  return (
    <div className='section5' id='bmi'>
      <img className='sec5img' src="./images/L5.png" alt="" />
      <div className="section5box">
        <p className="sec5head">
          <span className='sec5anim'>CALCULATE </span>
          <span className='sec5anim'>YOUR </span>
          <span className='sec5anim'>BMI </span>
        </p>
        <p className="sec5para">
          <span className="sec5anim">BMI</span>
          <span className="sec5anim">is the</span>
          {/* <span className="sec5anim">the</span> */}
          <span className="sec5anim">Body</span>
          <span className="sec5anim">Mass</span>
          <span className="sec5anim">Index</span>
          <span className="sec5anim">and it is</span>
          {/* <span className="sec5anim">it</span> */}
          {/* <span className="sec5anim">is</span> */}
          <span className="sec5anim">the best</span>
          {/* <span className="sec5anim">best</span> */}
          <span className="sec5anim">way to</span>
          {/* <span className="sec5anim">to</span> */}
          <span className="sec5anim">know</span>
          <span className="sec5anim">that u are</span>
          {/* <span className="sec5anim">u</span> */}
          {/* <span className="sec5anim">are</span> */}
          <span className="sec5anim">fit or</span>
          {/* <span className="sec5anim">or</span> */}
          <span className="sec5anim">not</span>
          <span className="sec5anim">from your</span>
          {/* <span className="sec5anim">your</span> */}
          <span className="sec5anim">height and</span>
          {/* <span className="sec5anim">and</span> */}
          <span className="sec5anim">weight.</span>
        </p>
        <input className='height' type="number" name="" id="" placeholder='Height (in cm) (1feet = 30cm)' value={height || ''} onChange={(e)=>{setheight(e.target.value)}}/>
        <input className='weight' type="number" name="" id="" placeholder='Weight (in Kg)'value={weight || ''} onChange={(e)=>{setweight(e.target.value)}}/>
        <input className='sec5btn' type="submit" value="Calculate Now" onClick={submithandler}/>
        <p className="sec5output">{output}</p>
        <p className="sec5output">{type}</p>
      </div>
    </div>
  )
}
