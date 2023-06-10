import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import '../style/LoginSignup2.css'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './Firebase';

const firstmodechange = ()=>{
    const container = document.querySelector('.loginsignup2');
    container.classList.add('sign-up-mode');
}

const secondmodechange = ()=>{
    const container = document.querySelector('.loginsignup2');
    container.classList.remove('sign-up-mode');
}

export default function LoginSignup2() {
    // ---------------------------- Alert message -------------------------------------
    const [msg, setmsg] = useState("");
    const [show, setshow] = useState(false);

    const errorhandler = (a, b)=>{
        setmsg(a.slice(17, -2));
        setshow(b);
    };

    useEffect(() => {
        const al = document.querySelector(".alert");
        if(al){
        al.style.display = "block";
        setTimeout(() => {
            al.style.display = "none";
        }, 5000);
        }
    }, [show]);

    // ---------------------------------------------------------
    const navigate = useNavigate();
    const [name, setname] = useState("");
    const [signupmail, setsignupmail] = useState("");
    const [signuppass, setsignuppass] = useState("");
    const [loginmail, setloginmail] = useState("");
    const [loginpass, setloginpass] = useState("");

    const signuphandler = (e)=>{
        e.preventDefault();
        errorhandler("", false);
        createUserWithEmailAndPassword(auth, signupmail, signuppass)
        .then(res=>{
            updateProfile(auth.currentUser, {
                displayName : name
            })
            .then(res=>{ navigate('/') })
            .catch(err=> errorhandler(err.message, true));
        })
        .catch(err=> errorhandler(err.message, true));
    }
  
      const signinhandler = (e)=>{
        e.preventDefault();
        errorhandler("", false);
        signInWithEmailAndPassword(auth, loginmail, loginpass)
        .then(res=>{ navigate('/') })
        .catch(err=>errorhandler(err.message, true));
    }
  
    const googleauthentication = (e)=>{
        e.preventDefault();
        errorhandler("", false);
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then(res=>navigate('/'))
        .catch(err=>errorhandler(err.message, true));
    }
  
    const facebookauthentication = (e)=>{
        // e.preventDefault();
        // errorhandler("", false);
        // const facebookprovider = new FacebookAuthProvider();
        // signInWithPopup(auth, facebookprovider)
        // .then(res=>navigate('/home'))
        // .catch(err=>errorhandler(err.message, true));
    }


  return (
        <div className="loginsignup2">
            <div className="forms-container">
                <div className="signin-signup">
                    <form className="sign-in-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Email" onChange={(e)=>{ setloginmail(e.target.value) }} />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" onChange={(e)=>{ setloginpass(e.target.value) }}/>
                        </div>
                        <input onClick={signinhandler} type="submit" value="Login" className="btn solid" />
                        <p className="social-text">Or Sign in with social platforms</p>
                        <div className="social-media">
                            <a href='#ani' className="social-icon">
                                <i onClick={facebookauthentication} className="fab fa-facebook-f"></i>
                            </a>
                            <a href='#ani' className="social-icon">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href='#ani' className="social-icon">
                                <i onClick={googleauthentication} className="fab fa-google"></i>
                            </a>
                            <a href='#ani' className="social-icon">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </form>
                    <form className="sign-up-form">
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Username" onChange={(e)=>{ setname(e.target.value) }}/>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" onChange={(e)=>{ setsignupmail(e.target.value) }}/>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" onChange={(e)=>{ setsignuppass(e.target.value) }}/>
                        </div>
                        <input onClick={signuphandler} type="submit" className="btn" value="Sign up" />
                        <p className="social-text">Or Sign up with social platforms</p>
                        <div className="social-media">
                            <a href='#ani' className="social-icon">
                                <i onClick={facebookauthentication} className="fab fa-facebook-f"></i>
                            </a>
                            <a href='#ani' className="social-icon">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href='#ani' className="social-icon">
                                <i onClick={googleauthentication} className="fab fa-google"></i>
                            </a>
                            <a href='#ani' className="social-icon">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>Are You Ready <span className="colororange"> ? </span></h3>
                        <p>Some people want it to happen, some people wish it would happen and i just make it happen.</p>
                        <button onClick={firstmodechange} className="loginpanelbtn" id="sign-up-btn">SIGN UP</button>
                    </div>
                    <img src="./images/newsignup.svg" className="image" alt="" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>Let's Rock <span className="colororange"> ? </span></h3>
                        <p>Tum jalte raho, Mein jalata rahunga. Apne nazar ka khayal rakhna, mein nazar aata rahunga.</p>
                        <button onClick={secondmodechange} className="loginpanelbtn" id="sign-in-btn">SIGN IN</button>
                    </div>
                    <img src="./images/newlogin.svg" className="image" alt="" />
                </div>
            </div>
            { show && <div className="alert">{msg}</div> }
        </div>
  )
}
