import React, { useState, useEffect, useRef } from 'react'
import '../style/ExpandExercise.css'
import { useParams } from 'react-router-dom'
import Nav2 from './Nav2';
import Footer from './Footer';
import axios from 'axios';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Card from './Card';
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
var set = {
  // autoplay : true,
  // autoplaySpeed : 4000,
  initialSlide : 0,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite : true,
  prevArrow : <Prevbtn/>,
  nextArrow : <Nextbtn/>,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },

  ],
}
var set2 = {
  // autoplay : true,
  // autoplaySpeed : 4000,
  initialSlide : 0,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite : true,
  prevArrow : <Prevbtn/>,
  nextArrow : <Nextbtn/>,
  responsive: [
    {
      breakpoint: 1060,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },

  ],
}

// ------------------------ driver function ------------------------- //

export default function ExpandExercise() {
  let called = useRef(false);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if(called.current) return;
    called.current = true;
    const t = gsap.timeline({delay:0.5,});

    t.from('.eesec1box1', 1, {
      xPercent: -100,
      opacity: 0,
    })
    .from('.eesec1anim', 1, {
      xPercent: 100,
      opacity: 0,
      stagger: 0.2,
    }, 0)
    .from('.eesec2slider', {
      yPercent: 50,
      opacity: 0,
      scrollTrigger: {
        trigger: '.eesec2',
        // markers: true,
        start: '20% 80%',
        end: '60% 80%',
        scrub: 2,

      }
    })
    .from('.eesec3slider', {
      yPercent: 50,
      opacity: 0,
      scrollTrigger: {
        trigger: '.eesec3',
        // markers: true,
        start: '30% 80%',
        end: '80% 80%',
        scrub: 2,

      }
    })
    .from('.eesec4slider', {
      yPercent: 50,
      opacity: 0,
      scrollTrigger: {
        trigger: '.eesec4',
        // markers: true,
        start: '30% 80%',
        end: '80% 80%',
        scrub: 2,
      }
    })
  })


// const rapidaipkey = 'd4c6a33202msh034595c51be1d55p1b0754jsnb68bc803e40c'; // thejoker7355@gmail.com
  const rapidaipkey = '07ace9c701mshb61672a788824e8p19ef6bjsnb353ec5c0a9f';   // aniketmittal222@gmail.com
  const params = useParams();
  const [data, setdata] = useState({
    gifUrl : "/images/Final/temp.gif",
    name : 'Sit Ups for Abs',
    target : 'Waist',
    bodyPart : 'Abs',
    equipment : 'body weight',
  });
  // const [targetmuscle, settargetmuscle] = useState([
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  // ]);
  // const [equipment, setequipment] = useState([
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  // ]);
  // const [data, setdata] = useState();
  const [equipment, setequipment] = useState([]);
  const [targetmuscle, settargetmuscle] = useState([]);
  const [youtubevideos, setyoutubevideos] = useState();

  useEffect(() => {
    // ------------ eesec1 --------------------
      axios.request({
      method: 'GET',
      url: `https://exercisedb.p.rapidapi.com/exercises/exercise/${params.id}`,
      headers: {
        'X-RapidAPI-Key': rapidaipkey,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    })
    .then(res=>{
      setdata(res.data);
    }).catch(err=>console.log(err))
  }, [params.id]);

  useEffect(() => {
    axios.request({
      method: 'GET',
      url: `https://youtube-search-and-download.p.rapidapi.com/search?query=${data.name}`,
      headers: {
        'X-RapidAPI-Key': rapidaipkey,
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
      }
    })
    .then(res=>{
      setyoutubevideos(res.data.contents);
      console.log(res.data.contents);
    }).catch(err=>console.log(err))
  }, [data])
  
  
  useEffect(() => {
    if(data){
      // ----------- esec2 (youtube videos) -------------------- // 
      axios.request({
        method: 'GET',
        url: `https://youtube-search-and-download.p.rapidapi.com/search?query=${data.name}`,
        headers: {
          'X-RapidAPI-Key': rapidaipkey,
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
        }
      })
      .then(res=>{
        setyoutubevideos(res.data.contents);
        console.log(res.data.contents);
      }).catch(err=>console.log(err))

      // ------------ eesec3 (target muscles) ------------------ // 
      axios.request({
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/target/${data.target}`,
        headers: {
          'X-RapidAPI-Key': rapidaipkey,
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      })
      .then(res=>{
        settargetmuscle(res.data);
        console.log(res.data);
      }).catch(err=>console.log(err))

      // ---------------- eesec4 (equipment) ----------------- //
      axios.request({
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/equipment/${data.equipment}`,
        headers: {
          'X-RapidAPI-Key': rapidaipkey,
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      })
      .then(res=>{
        setequipment(res.data);
        console.log(res.data);
      }).catch(err=>console.log(err))
    }
  }, [data]);

  
  return (
    <div className='expandexercise'>
      <Nav2/>

      <section className="eesec1">
        <div className="eesec1box eesec1box1">
          { data && <img src={data.gifUrl} alt="exercise gif" /> }
        </div>
        <div className="eesec1box eesec1box2">
          { data &&
            <>
                <div className="eesec1name eesec1anim">{data.name.charAt(0).toUpperCase() + data.name.slice(1, 55)}</div>
                <div className="eesec1para eesec1anim">It is a very good exercise to add  into your daily routine, it targets the {data.target}. The body part trained is {data.bodyPart}, equipment used is {data.equipment}.</div>
                <div className="eesec1para eesec1paraextra eesec1anim">It helps to remove extra body fat and give a goot cutting. Moreover it provides massive strength for the muscle growth.</div>
                <div className="eesec1icons">
                  <div className="eesec1iconsbox eesec1iconsbox1 eesec1anim">
                    <i className="eesec1icon fa-solid fa-dumbbell"></i>
                    <div className="eesec1icontext eesec1target">{data.target.charAt(0).toUpperCase() + data.target.slice(1)}</div>
                  </div>
                  <div className="eesec1iconsbox eesec1iconsbox2 eesec1anim">
                    <i className="eesec1icon fa-solid fa-person-running"></i>
                    <div className="eesec1icontext eesec1bodypart">{data.bodyPart.charAt(0).toUpperCase() + data.bodyPart.slice(1)}</div>
                  </div>
                  <div className="eesec1iconsbox eesec1iconsbox3 eesec1anim">
                    <i className="eesec1icon fa-solid fa-fire"></i>
                    <div className="eesec1icontext eesec1equipment">{data.equipment.charAt(0).toUpperCase() + data.equipment.slice(1)}</div>
                  </div>
                </div>
            </>
          }
        </div>
      </section>

      <section className="eesec2">
        <div className="eesec2box">
          <div className="eesec2head">Watch <span className='orangeclr'>YouTube</span> Tutorials</div>
          <Slider { ...set } className="eesecslider eesec2slider">
                {
                  youtubevideos && 
                  youtubevideos.slice(0, 10).map(a=>{
                    return(
                      <>{
                        a.video && 
                        <div key={a.video.channelId} className='youtubevideo'>
                          <iframe src={`https://www.youtube.com/embed/${a.video.videoId}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen="allowfullscreen" title='youtube video for explaining the exercise' ></iframe>
                        </div>
                      }</>
                  )})
                }
            </Slider>
        </div>
      </section>

      <section className="eesec3">
      <div className="eesec3box">
          <div className="eesec3head">Similar <span className='orangeclr'>Target Muscle</span> Exercises</div>
          <Slider { ...set2 } className="eesecslider eesec3slider">
            {
              targetmuscle && 
              targetmuscle.slice(0, 6).map(a=>{
                return(
                <Card key={a.id} a={a} />
              )})
            }
          </Slider>
        </div>
      </section>

      <section className="eesec4">
      <div className="eesec4box">
          <div className="eesec4head">Similar <span className='orangeclr'>Equipment</span> Exercises</div>
          <Slider { ...set2 } className="eesecslider eesec4slider">
          {
              equipment && 
              equipment.slice(0, 6).map(a=>{
                return(
                    <Card  key={a.id} a = {a} />
              )})
            }
            </Slider>
        </div>
      </section>

      <Footer/>
    </div>
  )
}












