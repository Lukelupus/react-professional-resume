import React from "react";
import { Link } from "react-router-dom";


function Home() {
    return (<>
        <div className="home-page">
            <img className="lucas-img" src="images/merussia-modified.png" alt="fullstack web developer"></img>
            <div className="home-presentation-card">
                <h1 className="home-title">Lucas Moreira Botelho</h1>
                <h3 className="home-subtitle">Desenvolvedor</h3>
                <p>Ei, que bom ver você por aqui.</p>
                <p>Quer criar uma landing page para sua empresa? Possuir seu próprio site pessoal ou currículo? Me manda uma mensagem em alguma das minhas redes!</p>
                <div className="social">
                    <a 
                        className="float"
                        href="https://www.linkedin.com/in/lucas-moreira-botelho-18298715b/"
                        target="_blank"
                        rel="noopener noreferrer"><img className="social-icon" src="https://seeklogo.com/images/L/linkedin-icon-logo-05B2880899-seeklogo.com.png" alt="linkedin"></img>
                    </a>
                    <a 
                        className="float"
                        href="https://www.instagram.com/luke.boti.lorken/?hl=en"
                        rel="noopener noreferrer"><img className="social-icon" src="https://seeklogo.com/images/I/instagram-new-2016-logo-D9D42A0AD4-seeklogo.com.png" alt="instagram"></img>
                    </a>
                    <a 
                        className="float"
                        href="https://api.whatsapp.com/send?phone=5531991820805&text=Olá%20Lucas"
                        rel="noopener noreferrer"><img className="social-icon" src="https://seeklogo.com/images/W/whatsapp-icon-logo-BDC0A8063B-seeklogo.com.png" alt="whatsapp"></img>
                    </a>
                </div>
                <p>Quer conhecer mais de mim? Clica no meu <Link to="/profile" className="landing-profile">perfil</Link> aqui emixo</p>
            </div>
        </div>
        <img className="landing-page-img" alt="scotland-street-art" src="images/white-blue.jpeg"></img>

        
            </>)
}


export default Home