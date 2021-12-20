import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
// Switch-add back to rounter-DOM
import "./App.css";
import Home from "./pages/Home";
import NetFlixShow from "./pages/NetFlixShow";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/netflix-show" component={NetFlixShow} />
    </div>
    
    </BrowserRouter>
  );
};

export default App;
