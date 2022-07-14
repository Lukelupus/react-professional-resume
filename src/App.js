import React from "react";
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio";
import Profile from "./pages/Profile";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


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
        <a 
          className="whatsapp-float"
          href="https://api.whatsapp.com/send?phone=5531991820805&text=Olá%20Lucas"
          target="_blank"
          rel="noopener noreferrer"><WhatsAppIcon className="whatsapp-icon"/>
        </a>
      </main>
      
    
    </>);
}

export default App;
