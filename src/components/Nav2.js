import React, {useState, useEffect, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/Nav2.css'
import { auth } from './Firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import logo from './L3.png'
import gsap from 'gsap';

export default function Nav2() {

  const modeclicked = ()=>{
    // console.log("clicked");
    const app = document.querySelector('.app');
    // console.log(app);
    if(app.classList.contains('theme1')){
      app.classList.remove('theme1');
      app.classList.add('theme2');
    }else{
      app.classList.remove('theme2');
      app.classList.add('theme1');
    }
  }

  let called = useRef(false);

  useEffect(() => {
    if(called.current) return;
    called.current = true;
    const t = gsap.timeline();
    t.from('.esec1anim', 1, {
      xPercent: -50,
      stagger: 0.2,
      opacity: 0,
    })
    .from('.nav2anim', 1, {
        delay: 1,
        yPercent: -500,
        stagger: 0.2, 
        ease: 'bounce',
        opacity: 0,
    }, 0.2)
    .from('.exerciseimg', 1, {
      // xPercent: 30,
      // opacity: 0,
      scale: 0,
    }, 1)
    .from('.nav2logo', 1, {
      xPercent: -200,
      opacity: 0,
    }, 0.2)

  })

  const navigate = useNavigate();

  const [user, setuser] = useState("");
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setuser(currentUser);
    });
  
    return () => {
      unsubscribe();
    }
  }, []);

  const logouthandler = (e)=>{
    e.preventDefault();
    signOut(auth);
    navigate('/');
  }

  const Showloginsignupbtn = () => {
    return(
      <button className='navloginbtn' onClick={()=>{navigate('/loginsignup')}}>Signup</button>
    )
  };

  const Showprofile = ()=>{
    return(
      <div className='navprofile'>
        <i className="fa-solid fa-user navprofileicon"></i>
        <div className="showprofilecontainer">
          <p>{user.displayName} 😀</p>
          <p className='themechange' onClick={ modeclicked }>Theme <i className="fa-solid fa-sun"></i></p>
          <button className='navlogoutbtn' onClick={logouthandler}>Log Out</button>
        </div>
      </div>
    )
  };

  let show_login_signup;
  if (user) {
    show_login_signup = <Showprofile />;
  } else {
    show_login_signup = <Showloginsignupbtn />;
  }
  


  return (
    <div className='nav nav2'>
      <div className="navbox">
        <div className="logo">
          <img className='nav2logo' src={logo} alt="logo of website" />
        </div>

        <div className="hamburger">
          <input type="checkbox"/>
          <div className="lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
          </div>
          <ul className="list">
              <li className='nav2anim'><a className='navhover nav2t' href="/">Home</a></li>
              {/* <li><a href="#searchbar">Search</a></li> */}
              <li className='nav2anim'><a className='navhover nav2t' href="#searchbar">Search</a></li>
              <li className='nav2anim'><a className='navhover nav2t' href="/exercises">Exercises</a></li>
              <li>
                { show_login_signup }
              </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
