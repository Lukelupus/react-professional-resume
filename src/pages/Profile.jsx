import React from "react";
import {Link} from "react-router-dom"
import Card from "../components/Card";

function Profile() {
    return (<>
          <div className="profile-page">
            <div className="profile-card">
                <h1 className="profile-title">Oi, eu sou o Lucas</h1>
                <Link to="/">
                    <img className="profile-img" src="images/merussia-modified.png" alt="fullstack web developer"></img>
                </Link>
                <div className="profile-description">
                    <h3 className="profile-subtitle">Um Desenvolvedor</h3>
                    <p className="profile-content">Sou progamador por paixão e amante de arquitetura de sites. Disponibilizo serviços de design de páginas de aterrisagem - Landing Pages -, criação de sites profissionais e aplicativos de web.</p>
                    <p className="profile-content">Para o desenvolvimento, trabalho com o MERN Stack: MongoDB, Express, React e Node.</p>
                    <h3 className="profile-subtitle-service">Serviços</h3>
                </div>
            </div>
            <div className="wrapper">
                <Card 
                    img="images/mefort.png"
                    title="Site Pessoal"
                    content="Meu site - O site que é tão lindo quanto você!"
                />
                <Card 
                    img="images/tdog.png"
                    title="Landing Page"
                    content="Tindog - O App que é bom pra cachorro!"
                />
                <Card 
                    img="images/todo-list.png"
                    title="WebApp"
                    content="Post-its virtuais - Agora não esqueço de comprar pão!"
                />
                
            </div>
        </div>
    </>)
}


export default Profile