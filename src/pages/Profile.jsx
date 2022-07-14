import React from "react";

function Profile() {
    return (<>
          <div className="profile-page">
            <div className="profile-card">
                <h1 className="profile-title">Oi, eu sou o Lucas</h1>
                <img className="profile-img" src="images/merussia-modified.png" alt="fullstack web developer"></img>
                <div className="profile-description">
                    <h3 className="profile-subtitle">Sou um Desenvolvedor de Web fullstack</h3>
                    <p className="profile-content">Profissional criativo, empolgado e cheio de energia! Adoro resolver problemas da maneira elegante e eficiente. Atualmente estou me especializando com o MERN stack - MongoDB,Express, React e Node -.</p>
                </div>
            </div>
        </div>
    </>)
}


export default Profile