import React from "react";
import Navbar from "./components/Navbar";
import GitHubIcon from '@mui/icons-material/GitHub';


function Profile() {
    return (<>
     <Navbar />
          <div className="profile-page">
            <div className="profile-card">
                <h1 className="profile-title">Oi, eu sou o Lucas</h1>
                <a to="/">
                    <img className="profile-img" src="images/merussia-modified.png" alt="fullstack web developer"/>
                </a>
                <div className="profile-description">
                    <h3 className="profile-subtitle">Um Desenvolvedor FullStack</h3>
                    <p className="profile-content">Eu trabalho atualmente na arquitetura de sites. Desde o design inicial, escrita dos textos, desenvolvimento do código e estruturação de servidores e bancos de dados!</p>
                    <p className="profile-content">Então se você quer colocar sua cara no mundo, sua empresa na rede, construir sua lojinha virtual ou apenas ter aquele site pra chamar de seu, corre aqui pra aba de serviços ou contato pra gente conversar 🤓!</p>
                    <p className="profile-content">Já se você quiser dar uma olhadinha no meu trabalho, dá uma olhada aqui no meu <a href="https://github.com/lukelupus" target="_blank" rel="noreferrer">portfólio</a> ou clica no gatinho!</p> 
                    <a className="profile-link" href="https://github.com/lukelupus" target="_blank" rel="noreferrer"><GitHubIcon className="profile-icon" /></a>
                    
                </div>
            </div>
        </div>
    </>)
}


export default Profile