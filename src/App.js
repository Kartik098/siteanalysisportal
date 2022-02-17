import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Signup from './Pages/signup';
import Home from './Pages/Home';
import './home.css'



const App = () => {
  return (
    <>
    <Router>
    <img className='logo' src="/gshlogo.jpg"/>
   <Routes>

    <Route path="/signup" exact element={<Signup />}  />
    
    <Route path="/" exact element={<Home />}  />
    
   </Routes>
      
    
  </Router></>
  )
};


export default App;
