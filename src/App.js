import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import Signin from "./components/Signin/Signin";
import Home from "./pages/Home";
import NetFlixShow from "./pages/NetFlixShow";
import {useSelector} from "react-redux";
import { selectUser } from "./features/userSlice";




const App = () => {
  const user = useSelector(selectUser);
  //  const dispatch = useDispatch();

  return (
    
    <Router>
      <div> {user ? <NetFlixShow /> : <Home />} </div>;
      {/* how to implament user signed_in here */}

  
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
