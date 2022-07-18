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
                    content="Páginas de aterrisagem são aquelas com elementos voltados a aumentar a sua taxa de conversão e crescer o seu negócio! Alguns elementos deste serviço contêm imagens impactantes, botões Call to Action e/ou formulários."
                    id="#landing-page"
                />
                    <Card 
                    img="images/mefort.png"
                    title="Site Profissional"
                    content="O futuro é a internet e o futuro, é hoje. Coloque sua empresa, seu perfil profissional ou pessoal online! Crie a sua página inicial, a sessão 'Sobre Nós' e contato! Clica em Saiba Mais para um orçamento."
                    id="#professional-site"
                />
                <Card 
                    img="images/todo-list.png"
                    title="Loja Virtual"
                    content="Quer fazer sua própria lojinha para venda de produtos ou serviços? Posso desenvolver sua UI/UX com sua identidade visual, carrinho de compras e textos com as palavras-chaves certas."
                    id="#online-store"
                />
                
            </div>
            <div  className="service-container" >
                <h2 id="landing-page">Landing Page</h2>
                <img className="service-img" src="images/tdog.png" alt="landing page aterrisagem"></img>
            </div>
            <div className="service-container">
                <h2 id="professional-site">Site Profissional</h2>
                <img className="service-img" src="images/mefort.png" alt="site web profissional"></img>
                
            </div>
            <div className="service-container">
                <h2 id="online-store">Site de Vendas</h2>
                <img className="service-img" src="images/todo-list.png" alt="venda compra loja virtual"></img>
            </div>
        </div>
        
    </>)
}


export default Services