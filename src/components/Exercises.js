import React, { useState, useEffect, useRef} from 'react'
import '../style/Exercises.css'
import Nav2 from './Nav2'
import Card from './Card'
import Footer from './Footer'
import axios from 'axios'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


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
  // autoplaySpeed : 2000,
  initialSlide : 0,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite : true,
  prevArrow : <Prevbtn/>,
  nextArrow : <Nextbtn/>,
  responsive: [
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },

  ],
}


export default function Exercises() {
  let called = useRef(false);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if(called.current) return;
    called.current = true;
    const t = gsap.timeline();
    t.from('.esecbody', {
      yPercent: 50,
      scrollTrigger: {
        trigger: '.esection2',
        // markers: true,
        start: '40% 80%',
        end: '60% 80%',
        scrub: 2,
    }
    })
    .from('.esection2headanim', {
      x: 200,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.esection2',
        // markers: true,
        start: '30% 80%',
        end: '50% 80%',
        scrub: 2,
    }
    })
    .from('.exercisesearch', {
      xPercent: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: '.exercisesearchbar',
        // markers: true,
        start: '0% 80%',
        end: '60% 80%',
        scrub: 2,
    }
    })
    .from('.exercisebtn', {
      xPercent: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: '.exercisesearchbar',
        // markers: true,
        start: '0% 80%',
        end: '60% 80%',
        scrub: 2,
    }
    })
    .from('.inesec3', {
      yPercent: 10,
      scrollTrigger: {
        trigger: '.esec3',
        // markers: true,
        start: '20% 80%',
        end: '60% 80%',
        scrub: 2,
    }
    })
  })

  const rapidaipkey = 'd4c6a33202msh034595c51be1d55p1b0754jsnb68bc803e40c'; // thejoker7355@gmail.com
  // const rapidaipkey = '07ace9c701mshb61672a788824e8p19ef6bjsnb353ec5c0a9f';   // aniketmittal222@gmail.com
  const [exercisesearchbar, setexercisesearchbar] = useState('');
  // const [allexercise, setallexercise] = useState([
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     id : '0001',
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     id : '0001',
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     id : '0001',
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     id : '0001',
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     id : '0001',
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     id : '0001',
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     id : '0001',
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     id : '0001',
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     id : '0001',
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     id : '0001',
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     id : '0001',
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     id : '0001',
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     id : '0001',
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     id : '0001',
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     id : '0001',
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     id : '0001',
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     id : '0001',
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     id : '0001',
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  // ]);
  // const [filterexercise, setfilterexercise] = useState([
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     id : '0001',
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     id : '0001',
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     id : '0001',
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     id : '0001',
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     id : '0001',
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     id : '0001',
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     id : '0001',
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     id : '0001',
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     id : '0001',
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     id : '0001',
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     id : '0001',
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     id : '0001',
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     id : '0001',
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  //   {
  //     gifUrl : "/images/Final/temp.gif",
  //     id : '0001',
  //     name : 'Sit Ups for Abs',
  //     target : 'Waist',
  //     bodyPart : 'Abs',
  //     equipment : 'body weight',
  //   },
  // ]);
  
  const [allexercise, setallexercise] = useState([]);
  const [filterexercise, setfilterexercise] = useState([]);
  useEffect(() => {
    axios.request( {
      method: 'GET',
      url: 'https://exercisedb.p.rapidapi.com/exercises',
      headers: {
        'X-RapidAPI-Key': rapidaipkey,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    } )
    .then(res=>{
      setallexercise(res.data);
    })
    .catch(err=>{
      console.log(err);
    })
  }, [])

  const selectexercise = (search)=>{
    if(allexercise && search){
      const temp = allexercise.filter(
        (a)=>
          a.bodyPart.toLowerCase().includes(search.toLowerCase()) ||
          a.target.toLowerCase().includes(search.toLowerCase())
      )
      setfilterexercise(temp.slice(0, 20));
    }else{
      console.log("default or search is empty");
    }
  }


  return (
    <div className='exercises'>

      <Nav2/>

      <section className="esec1">
        <div className="exercisequote">
          <span className='eesec1t esec1anim'>EAT</span>
          <span className='eesec1t esec1anim'>SLEEP</span>
          <span className='orangeclr esec1anim'>GYM</span>
          <span className='eesec1t esec1anim' >REPEAT</span>
        </div>
        <img className='exerciseimg' src="./images/exercise2.png" alt="couples" />
      </section>

      <div className='esection2'> 
        {/* <div className="esec2head">EXPLORE BY BODY <br/> PART</div> */}
        <div className="esec2head">
          <span className='esection2headanim'>EXPLORE</span>
          <span className='esection2headanim'>BY</span>
          <span className='esection2headanim'>BODY</span> <br />
          <span className='esection2headanim'>PART</span>
        </div>
        <Slider { ...set } className="esecslider">
                <div className="esecbodypart esecbodypart1">
                    <div className="esecbody esecbody1" onClick={()=>{selectexercise('chest');}}>
                      <div className="inesecbody">CHEST</div>
                    </div>
                </div>
                <div className="esecbodypart esecbodypart2">
                    <div className="esecbody esecbody2" onClick={()=>{selectexercise('back');}}>
                      <div className="inesecbody">BACK</div>
                    </div>
                </div>
                <div className="esecbodypart esecbodypart3">
                    <div className="esecbody esecbody3" onClick={()=>{selectexercise('arms');}}>
                      <div className="inesecbody">ARMS</div>
                    </div>
                </div>
                <div className="esecbodypart esecbodypart4">
                    <div className="esecbody esecbody4" onClick={()=>{selectexercise('legs');}}>
                      <div className="inesecbody">LEGS</div>
                    </div>
                </div>
                <div className="esecbodypart esecbodypart5">
                    <div className="esecbody esecbody5" onClick={()=>{selectexercise('cardio');}}>
                      <div className="inesecbody">CARDIO</div>
                    </div>
                </div>
                <div className="esecbodypart esecbodypart6">
                    <div className="esecbody esecbody6" onClick={()=>{selectexercise('shoulder');}}>
                      <div className="inesecbody">SHOULDER</div>
                    </div>
                </div>
                <div className="esecbodypart esecbodypart7">
                    <div className="esecbody esecbody7" onClick={()=>{selectexercise('neck');}}>
                      <div className="inesecbody">NECK</div>
                    </div>
                </div>
                <div className="esecbodypart esecbodypart8">
                    <div className="esecbody esecbody8" onClick={()=>{selectexercise('waist');}}>
                      <div className="inesecbody">WAIST</div>
                    </div>
                </div>
        </Slider>
      </div>

      <div id='searchbar' className="exercisesearchbar">
         <div className="exercisessearchbar">
           <form>
             <div className="exercisesearch">
               <i className="fa-solid fa-magnifying-glass"></i>
               <input type="text" name="" id="" onChange={ e => setexercisesearchbar(e.target.value) } />
             </div>
             <input className='exercisebtn' type="submit" value="SEARCH" onClick={(e)=>{e.preventDefault(); selectexercise(exercisesearchbar);}}/>
           </form>
         </div>
      </div>

      <section className="esec3">
        <div className="inesec3">
          {
            filterexercise ?
            filterexercise.map(a=>{
              return(
                <Card  key={a.id} a = {a} />
              )})
              :
              allexercise &&
              allexercise.slice(0, 20).map(a=>{
                return(
                  <Card  key={a.id} a = {a} />
                )})
          }
        </div>
      </section>

      <Footer/>

    </div>
  )
}




