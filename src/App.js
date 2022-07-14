import React from "react";
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio";
import Profile from "./pages/Profile";
import Skills from "./pages/Skills";


function App() {
  return (<>
    
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/skills" element={<Skills />}/>
      </Routes>
      
    
    </>);
}

export default App;
