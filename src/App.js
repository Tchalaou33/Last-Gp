import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NetFlixShow from "./pages/NetFlixShow";


const App = () => {
  return (
    <BrowserRouter>
    
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/netflix-show" element={<NetFlixShow/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;
