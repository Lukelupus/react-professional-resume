import React from "react";
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio";
import Profile from "./pages/Profile";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";



function App() {



  return (<>
    
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/skills" element={<Skills />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/skills" element={<Contact />}/>
        </Routes>
      </main>
      
    
    </>);
}

export default App;
