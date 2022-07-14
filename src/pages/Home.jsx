import React from "react";

function Home() {
    return (<>
        <div className="home-page">
            <img src="images/merussia.png" alt="fullstack web developer"></img>
            <div className="home-presentation-card">
                <h1 className="home-title">Sobre</h1>
                <hr></hr>
                <h3 className="home-subtitle">Desenvolvedor de Web fullstack</h3>
                <p className="home-content">Profissional criativo, empolgado e cheio de energia! Adoro resolver problemas da maneira elegante e eficiente. Atualmente estou me especializando com o MERN stack - MongoDB,Express, React e Node -.</p>
            </div>
        </div>
            </>)
}


export default Home