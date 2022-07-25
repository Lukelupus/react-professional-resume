import React from "react";
import Navbar from "./components/Navbar"





function App() {



  return (<>
      <Navbar />
     
      <div className="home-page">
            <img className="lucas-img" src="images/merussia-modified.png" alt="fullstack web developer"/>
            <div className="home-presentation-card">
                <h1 className="home-title">Lucas Moreira Botelho</h1>
                <h3 className="home-subtitle">Desenvolvedor</h3>
                <p className="home-text first">Quer criar seu site pessoal, empresarial ou página de aterrisagem? Clica na minha aba de serviços!</p>
                <p className="home-text second">Mas se você quiser só me conhecer, clica no meu <a to="/profile" className="landing-profile">perfil</a>!</p>
            </div>
            <div className="social">
                    <a 
                        className="float"
                        href="https://www.linkedin.com/in/lucas-moreira-botelho-18298715b/"
                        target="_blank"
                        rel="noopener noreferrer"><img className="social-icon" src="https://seeklogo.com/images/L/linkedin-icon-logo-05B2880899-seeklogo.com.png" alt="linkedin"/>
                    </a>
                    <a 
                        target="_blank"
                        className="float"
                        href="https://www.instagram.com/luke.boti.lorken/?hl=en"
                        rel="noopener noreferrer"><img className="social-icon" src="https://seeklogo.com/images/I/instagram-new-2016-logo-D9D42A0AD4-seeklogo.com.png" alt="instagram"/>
                    </a>
                    <a 
                        target="_blank"
                        className="float"
                        href="https://api.whatsapp.com/send?phone=5531991820805&text=Olá%20Lucas"
                        rel="noopener noreferrer"><img className="social-icon" src="https://seeklogo.com/images/W/whatsapp-icon-logo-BDC0A8063B-seeklogo.com.png" alt="whatsapp"/>
                    </a>
                </div>
        </div>
        <img className="landing-page-img" alt="scotland-street-art" src="images/white-blue.jpeg"/>

        
        
    
    </>);
}

export default App;
