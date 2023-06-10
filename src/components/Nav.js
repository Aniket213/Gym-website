import React, {useState, useEffect, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/Nav.css'
import { auth } from './Firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import gsap from 'gsap';

export default function Nav() {

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
  let called = useRef(false);
  useEffect(() => {
    if(called.current) return;
    called.current = true;

    const t = gsap.timeline({ delay: 1 });
    t.from('.navhover', 1, {
      yPercent: 500,
      ease: 'bounce',
      opacity: 0,
      stagger: 0.2,
    })
    .from('.homecontent',1 , {
      yPercent: 30,
      opacity: 0,
    }, 0.7)
    .from('.logo',1, {
      xPercent: -200,
      opacity: 0,
    }, 1)
    .from('.loginbtnanime',1, {
      xPercent: 200, 
      opacity: 0,
    }, 1.3)

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
  
  const exerciseclick = () => {
    if(user) navigate("/exercises")
    else navigate("/loginsignup")
  }


  return (
    <div className='nav'>
      <div className="navbox">
        <div className="logo">
          <img src="./images/L3.png" alt="logo of website" />
        </div>

        <div className="hamburger">
          <input type="checkbox"/>
          <div className="lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
          </div>
          <ul className="list">
              <li><a className='navhover' href="/">Home</a></li>
              <li><a className='navhover' href="#pricing">Pricing</a></li>
              <li className='navabout'>
                <a className='navhover' href='#about'>About</a>
                <div className="navaboutcontainer">
                  <a className='navaboutchild' href="#programs">Programs <i className=" navabouticon fa-solid fa-arrow-right"></i></a>
                  <a className='navaboutchild' href="#trainers">Trainers <i className=" navabouticon fa-solid fa-arrow-right"></i></a>
                  <a className='navaboutchild' href="#bmi">BMI <i className=" navabouticon fa-solid fa-arrow-right"></i></a>
                  <a className='navaboutchild navaboutlastchild' href="#testimonials">Testimonials <i className=" navabouticon fa-solid fa-arrow-right"></i></a>
                </div>
              </li>
              <li><a className='navhover' href=' ' onClick={exerciseclick}>Exercises</a></li>
              <li className='loginbtnanime'>
                { show_login_signup }
              </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
