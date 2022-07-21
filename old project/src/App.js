import React from "react";
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Services from "./pages/Services";
import Profile from "./pages/Profile";
import Skills from "./pages/Skills";



function App() {



  return (<>
    
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/skills" element={<Skills />}/>
          <Route path="/services" element={<Services/>}/>
        </Routes>
      </main>
      
    
    </>);
}

export default App;
