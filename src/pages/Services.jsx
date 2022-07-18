import React from "react";
import Card from "../components/Card";

function Services() {
    return (<>
        <div>
            <h3 className="profile-subtitle-service">Serviços</h3>
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


export default Services