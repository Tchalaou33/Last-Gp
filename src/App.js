import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import Signin from "./components/Signin/Signin";
import Home from "./pages/Home";
import NetFlixShow from "./pages/NetFlixShow";



const App = () => {

  return (
    <Router>
    
    <div className="App">
      
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/netflix-show" element={<NetFlixShow/>} />
          <Route path="/sign-in" element={<Signin/>} />
       
        </Routes>
      
    </div>
    </Router>
  );
};

export default App;
