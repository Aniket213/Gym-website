import React from 'react'
import '../../style/sections/Section1.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

// const Prevbtn = (props)=>{
//   const { className, onClick } = props;
//   return (
//     <div className={className} onClick={onClick}>
//       <i className="fa-solid fa-chevron-left prevbtns"></i>
//     </div>
//   )
// }

// const Nextbtn = (props)=>{
//   const { className, onClick } = props;
//   return (
//     <div className={className} onClick={onClick}>
//       <i className="fa-solid fa-chevron-right nextbtns"></i>
//     </div>
//   )
// }

var settings = {
  // autoplay : true,
  autoplaySpeed : 4000,
  initialSlide : 0,
  dots : true,
  infinite : true,
  dotsClass : 'slick-dots dots',
  // prevArrow : <Prevbtn/>,
  // nextArrow : <Nextbtn/>,
}


export default function Section1() {
  return (
    <div className='section1' id='home'>
        <div className="homebox">
            <Slider { ...settings }>
                <div className="h1 h">
                    <div className="homecontent ">
                      <h5>BE SMART BE FIT</h5>
                      <p >Be Stronger Than Your Strongest Excuse</p>
                      <button><a href="#pricing">Join Now</a></button>
                    </div>
                </div>
                <div className="h2 h">
                    <div className="homecontent">
                      <h5>Be Smart. Be Fit</h5>
                      <p>Be Stronger Than Your Strongest Excuse</p>
                      <button><a href="#pricing">Join Now</a></button>
                    </div>
                </div>
                <div className="h3 h">
                    <div className="homecontent">
                      <h5>Be Smart. Be Fit</h5>
                      <p>Be Stronger Than Your Strongest Excuse</p>
                      <button><a href="#pricing">Join Now</a></button>
                    </div>
                </div>
                <div className="h4 h">
                    <div className="homecontent">
                      <h5>Be Smart. Be Fit</h5>
                      <p>Be Stronger Than Your Strongest Excuse</p>
                      <button><a href="#pricing">Join Now</a></button>
                    </div>
                </div>
                <div className="h5 h">
                    <div className="homecontent">
                      <h5>Be Smart. Be Fit</h5>
                      <p>Be Stronger Than Your Strongest Excuse</p>
                      <button><a href="#pricing">Join Now</a></button>
                    </div>
                </div>
            </Slider>
      </div>
    </div>
  )
}





