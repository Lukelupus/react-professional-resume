import React from "react";
import Card from "../components/Card";

function Services() {
    return (<>
        <div className="services-page">
            <h3 className="profile-subtitle-service">Serviços</h3>
            <div className="wrapper">
            
                <Card 
                    img="images/tdog.png"
                    title="Landing Page"
                    content="Esse serviço visa a construçãode páginas de aterrisagem com elementos voltados a aumentar a sua taxa de conversão e crescer o seu negócio! Alguns elementos deste serviço contêm imagens impactantes, botões Call to Action e/ou formulários."
                    id="#landing-page"
                />
                    <Card 
                    img="images/mefort.png"
                    title="Site Pessoal"
                    content="Meu site - O site que é tão lindo quanto você!"
                    id="#professional-site"
                />
                <Card 
                    img="images/todo-list.png"
                    title="WebApp"
                    content="Post-its virtuais - Agora não esqueço de comprar pão!"
                    id="#online-store"
                />
                
            </div>
            <div id="landing-page">

            </div>
            <div id="professional-site">
                
            </div>
            <div id="online-store">
                
            </div>
        </div>
        
    </>)
}


export default Services