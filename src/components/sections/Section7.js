import React, { useEffect, useRef } from 'react'
import '../../style/sections/Section7.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Prevbtn = (props)=>{
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <i className="fa-solid fa-chevron-left prevbtn"></i>
      </div>
    )
  }
  
  const Nextbtn = (props)=>{
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <i className="fa-solid fa-chevron-right nextbtn"></i>
      </div>
    )
  }
  
  var settings = {
    autoplay : true,
    autoplaySpeed : 2000,
    initialSlide : 5,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite : true,
    dotsClass : 'slick-dots dots',
    prevArrow : <Prevbtn/>,
    nextArrow : <Nextbtn/>
  }

export default function Section7() {
    gsap.registerPlugin(ScrollTrigger);
    let called = useRef(false);

    useEffect(() => {
        if(called.current) return;
        called.current = true;

        gsap.from('.sec7anim', {
            x: -150,
            opacity: 0,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.section7',
                // markers: true,
                start: '20% 80%',
                end: '50% 80%',
                scrub: 2,
            }
        })
        gsap.from('.sec7slider', {
            x: 250,
            opacity: 0,
            scrollTrigger: {
                trigger: '.section7',
                // markers: true,
                start: '30% 80%',
                end: '60% 80%',
                scrub: 2,
            }
        })
    })

  return (
    <div className='section7' id='testimonials'>
        <div className="sec7container">
            <div className="sec7content">
                <p className="sec7smallhead sec7anim">TESTIMONIALS</p>
                <p className="sec7head sec7anim">What Our Clients Say</p>
                <p className="sec7para sec7anim">We got more than 99% positive feedback from our members. Most used keywords in feedback are – Amazing, Best, Modern, Motivational, Power, Cardio, Muscles, Strength, Yoga, Success</p>
                <button className="sec7btn sec7anim">Read More</button>
            </div>

            <div className="sec7slider">
                <Slider { ...settings }>
                    <div className="sec7item sec7item1">
                        <div className="sec7sliderbox">
                            <div className="testimonialpara">It's the best gym i have ever gone to, great trainers and superb atmosphere.</div>
                            <div className="testimonialdata">
                                <div className="testimonialimg testimonialimg1"></div>
                                <div className="testimonialname">
                                    <p className="testimonialname1">John Doe</p>
                                    <p className="testimonialname2">Designer</p>
                                </div>
                                <i className="testimonialstar fa-solid fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div className="sec7item sec7item2">
                    <div className="sec7sliderbox">
                            <div className="testimonialpara">It's the best gym i have ever gone to, great trainers and superb atmosphere.</div>
                            <div className="testimonialdata">
                                <div className="testimonialimg testimonialimg2"></div>
                                <div className="testimonialname">
                                    <p className="testimonialname1">Kera Lan</p>
                                    <p className="testimonialname2">Doctor</p>
                                </div>
                                <i className="testimonialstar fa-solid fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div className="sec7item sec7item3">
                    <div className="sec7sliderbox">
                            <div className="testimonialpara">It's the best gym i have ever gone to, great trainers and superb atmosphere.</div>
                            <div className="testimonialdata">
                                <div className="testimonialimg testimonialimg3"></div>
                                <div className="testimonialname">
                                    <p className="testimonialname1">Alen Don</p>
                                    <p className="testimonialname2">Worker</p>
                                </div>
                                <i className="testimonialstar fa-solid fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div className="sec7item sec7item4">
                    <div className="sec7sliderbox">
                            <div className="testimonialpara">It's the best gym i have ever gone to, great trainers and superb atmosphere.</div>
                            <div className="testimonialdata">
                                <div className="testimonialimg testimonialimg4"></div>
                                <div className="testimonialname">
                                    <p className="testimonialname1">Mon Caro</p>
                                    <p className="testimonialname2">Editor</p>
                                </div>
                                <i className="testimonialstar fa-solid fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div className="sec7item sec7item5">
                    <div className="sec7sliderbox">
                            <div className="testimonialpara">It's the best gym i have ever gone to, great trainers and superb atmosphere.</div>
                            <div className="testimonialdata">
                                <div className="testimonialimg testimonialimg5"></div>
                                <div className="testimonialname">
                                    <p className="testimonialname1">Gray Ful</p>
                                    <p className="testimonialname2">Actor</p>
                                </div>
                                <i className="testimonialstar fa-solid fa-star"></i>
                            </div>
                        </div>
                    </div>
            </Slider>
            </div>
        </div>
    </div>
  )
}
