import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Exercises from './components/Exercises';
import LoginSignup2 from './components/LoginSignup2';
import ExpandExercise from './components/ExpandExercise';
import 'animate.css';
// import Nav from './components/Nav';
// import Footer from './components/Footer';

//  i need to put nav separately in home and exercises as in exercises section there is no use of the about and pricing link in the nav bar
// also i got a problem in login signup page so put nav separately

function App() {
  return (
    <div className="app theme1">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/exercises' element={<Exercises />}/>
          <Route path='/expandexercise/:id' element={<ExpandExercise />}/>
          <Route path='/loginsignup' element={<LoginSignup2 />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
