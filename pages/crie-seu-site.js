import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Head from "next/head";


function Services() {
    return (<>
     <Head >
        <title>Seu próprio Site Profissional</title>
      </Head>
        <Navbar />
        <div className="services-page">
            <h3 className="profile-subtitle-service">Serviços</h3>
            <div className="wrapper profile-wrapper">
            
                <Card 
                    img="images/tdog-min.png"
                    title="Landing Page"
                    content="Landing Pages - ou Páginas de aterrisagem - são aquelas com elementos voltados a captar mais clientes ou 'leads' e aumentar a sua taxa de conversão! Isso devido a mecanismos que direcionem as ferramentas de pesquisa diretamente para você!"
                    id="#landing-page"
                />
                    <Card 
                    img="images/professional-site-min.png"
                    title="Site Profissional"
                    content="O futuro é a internet e o futuro, é hoje. Este tipo de serviço utiliza-se de várias páginas que deixam migalhas para seus visitantes! Estas visam mantê-los o mais tempo possível para que conheçam você, sua equipe, serviços e sua marca!"
                    id="#professional-site"
                />
                <Card 
                    img="images/todo-list-min.png"
                    title="Web Apps!"
                    content="Quer fazer uma listinha virtual para seu inventário, compras ou apenas para não esquecer das responsabilidades? Talvez sua própria lojinha para venda de produtos ou serviços? Vamos juntos fazer o seu app, aquele que é a sua cara e você pode chamar de seu!"
                    id="#online-store"
                />
         
            </div>
            
            <div className="service-detail">
            
                <h2 id="landing-page" className="service-title">Landing Page</h2>
                <a href="https://lukelupus.github.io/TinDog-Real/" target="_blank" rel="noopener noreferrer"><img className="service-img" src="images/tdog-min.png" alt="landing page SEO minha"></img></a>
                
                <div  className="service-container" >
                    <p className="service-info">Afinal, porque você iria querer uma página de aterrisagem? Porque o mundo hoje em dia é virtual inclusive, clientes. Esse tipo de página é voltado completamente a conversão de ‘leads’, ou seja, a captação de um público que você não alcançaria se não fosse pela imensidão da internet! Isso porque neste oceano digital a sua capacidade do seu crescimento pessoal ou empresarial é ilimitada.</p>
                    <p className="service-info">Mas como isso funciona? Bem, existem mecanismos que tem como alvo os Search Engine Optimization – ou SEOs – que atuam como grandes bandeiras vermelhas, bem chamativas para o algoritmo de pesquisa digital, como o Google! Eles vão desde o título da sua landing page a até palavras chave que ficam ali, escondidas por dentre o código! Um exemplo é a imagem acima! Ela possui letras grandes, chamativas! Se você visitar a página, vai ver também um botão chamativo e uma imagem que não deixa dúvidas sobre o que o serviço se trata!</p>
                    <p className="service-info">Se você ficou curioso, me chama em um dos meus links ali embaixo da página e vamos conversar!</p>
                </div>
                <hr></hr>
                <h2 id="professional-site" className="service-title">Site Profissional</h2>
                <a href="https://stark-taiga-49270.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img className="service-img" src="images/professional-site-min.png" alt="site web profissional empresarial pessoal"></img></a>
                <div className="service-container">
                    <p className="service-info">Um site profissional é essencial para sua empresa ou para prestações de serviço! Este serviço, diferente das landing pages, não se resumem a apenas uma página! Este é um local que você pretende manter os seus visitantes pelo máximo de tempo. Um site só seu deve ser atrativo, contar histórias e deixar migalhas para que o seu público possa conhecer todo o seu conteúdo, além de ser uma parte viva da sua empresa ou persona! Isso porque é desejável que seus visitantes voltem e vejam sempre as novidades que seu site lindo possui!</p>
                    <p className="service-info">Além disto, é uma forma você ficará visível no mundo online! Com este serviço você pode comunicar com seu público, detalhar seu trabalho, mostrar sua equipe e o porquê é sensacional trabalhar com você, além de divulgar tudo de novo que você e marca possuem!</p>
                    <p className="service-info">Um site profissional também é um local para colocar seu currículo para seus pares te conhecerem melhor a visualizarem todo o seu potencial! Clica ali na imagem para ver como pode ficar legal!</p>
                </div>
                <hr></hr>
                <h2 id="online-store" className="service-title">Aplicativos de Web</h2>
                <a href="https://calm-savannah-08177.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img className="service-img" src="images/todo-list-min.png" alt="venda compra loja virtual"></img></a>
                <div className="service-container">
                    <p className="service-info">Quer fazer uma listinha online ou um muro de post-its com a sua cara?</p>
                    <p className="service-info">Essa ferramente é essencial para você que tem apenas 1.389.356.761 coisas para fazer e lembrar todos os dias em seu trabalho ou dia-a-dia! Se você se vê todo dia em frente do computador e precisa daqueles lembretes fáceis com um design bonito feito só para você, vamo bater um papo!</p>
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