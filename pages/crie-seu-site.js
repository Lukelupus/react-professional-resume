import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
function Services() {
    return (<>
        <Navbar />
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
                    img="images/professional-site.png"
                    title="Site Profissional"
                    content="O futuro é a internet e o futuro, é hoje. Coloque sua empresa, seu perfil profissional ou pessoal online! Crie a sua página inicial, a sessão 'Sobre Nós' e contato! Clica em Saiba Mais para um orçamento."
                    id="#professional-site"
                />
                <Card 
                    img="images/todo-list.png"
                    title="Web Apps!"
                    content="Quer fazer sua própria lojinha para venda de produtos ou serviços? Posso desenvolver sua UI/UX com sua identidade visual, carrinho de compras e textos com as palavras-chaves certas."
                    id="#online-store"
                />
                
            </div>
            <div className="service-detail">
                <h2 id="landing-page" className="service-title">Landing Page</h2>
                <a href="https://lukelupus.github.io/TinDog-Real/" target="_blank" rel="noopener noreferrer"><img className="service-img" src="images/tdog.png" alt="landing page aterrisagem"></img></a>
                
                <div  className="service-container" >
                    <p className="service-info">Afinal, porquê você iria querer uma página de aterrisagem? Bom, são exatamente essas páginas que atraem e captam clientes potenciais para seu serviço ou empresa!</p>
                    <p className="service-info">Sua empresa, negócio, marca ou até você podem ter essa ferramente eficiente para conversão de novos clientes! Pra dá uma olhadinha em um exemplo de landing page feita por mim é só clicar na imagem!</p>
                </div>
                <hr></hr>
                <h2 id="professional-site" className="service-title">Site Profissional</h2>
                <a href="https://stark-taiga-49270.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img className="service-img" src="images/professional-site.png" alt="site web profissional"></img></a>
                <div className="service-container">
                    <p className="service-info">Um site profissional é essencial para sua empresa ou para prestações de serviço! Desta forma você ficará visível em pesquisas online, vai poder disponibilizar um espaço para detalhar seu trabalho, mostrar sua equipe e o porquê é sensacional trabalhar com você!</p>
                    <p className="service-info">Um site profissional também é um local para colocar seu curriculo para que recrutadores ou outros colaboradores possam ter um acesso a você e todo o seu potencial! Clica ali na imagem para ver como pode ficar legal!</p>
                </div>
                <hr></hr>
                <h2 id="online-store" className="service-title">Aplicativos de Web</h2>
                <a href="https://calm-savannah-08177.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img className="service-img" src="images/todo-list.png" alt="venda compra loja virtual"></img></a>
                <div className="service-container">
                    <p className="service-info">Quer fazer uma listinha online ou um muro de post-its com a sua cara?</p>
                    <p className="service-info">Essa ferramente é essencial para você que tem apenas 1.389.356.761 coisas para fazer e lembrar todos os dias em seu trabalho ou dia-a-dia!</p>
                    <p className="service-info">Se você se vê todo dia em frente do computador e precisa daqueles lembretes fáceis com um design bonito feito só para você, vamo bater um papo!</p>
                </div>
                <h2>Ainda com dúvida?</h2>
                <h2> Me chama pra um papo em qualquer uma das redes abaixo:</h2>
            </div>
            <div className="social">
                    <a 
                        className="float"
                        href="https://www.linkedin.com/in/lucas-moreira-botelho-18298715b/"
                        target="_blank"
                        rel="noopener noreferrer"><img className="social-icon" src="https://seeklogo.com/images/L/linkedin-icon-logo-05B2880899-seeklogo.com.png" alt="linkedin"></img>
                    </a>
                    <a 
                        target="_blank"
                        className="float"
                        href="https://www.instagram.com/luke.boti.lorken/?hl=en"
                        rel="noopener noreferrer"><img className="social-icon" src="https://seeklogo.com/images/I/instagram-new-2016-logo-D9D42A0AD4-seeklogo.com.png" alt="instagram"></img>
                    </a>
                    <a 
                        target="_blank"
                        className="float"
                        href="https://api.whatsapp.com/send?phone=5531991820805&text=Olá%20Lucas"
                        rel="noopener noreferrer"><img className="social-icon" src="https://seeklogo.com/images/W/whatsapp-icon-logo-BDC0A8063B-seeklogo.com.png" alt="whatsapp"></img>
                    </a>
                </div>
        </div>
        
    </>)
}


export default Services