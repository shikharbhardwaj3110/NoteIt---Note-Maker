import './App.css';
import Landing from './Pages/Landing/Landing';
import Home from './Pages/Home/Home';
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';

function App() {

  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('user')) {
      setisLoggedIn(true)
    }
    else {
      setisLoggedIn(false)
    }
  }, [])

  if(isLoggedIn==false) {
    return (
      <div className="app-wrapper">
        <Router>
          <Routes>
            <Route exact path="/login" element={<Login login={setisLoggedIn}/>}></Route>
            <Route exact path="/signup" element={<Signup/>}></Route>
            <Route exact path="/" element={<Landing/>}></Route>
            <Route exact path="*" element={<Navigate to="/"/>}></Route>
          </Routes>
        </Router>
      </div>  
    )
  }

  else if(isLoggedIn) {
    return (
      <div className="app-wrapper">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home login={setisLoggedIn}/>}></Route>
            <Route exact path="*" element={<Navigate to="/"/>}></Route>
          </Routes>
        </Router>
        
      </div>
    );
  }

  else {
    return (
      <div>
        Loading..
      </div>
    )
  }
  
}

export default App;
