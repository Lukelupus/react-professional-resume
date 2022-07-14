import React from "react"
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import faceImg from "../assets/logo.png"
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';





function Navbar() {
    return (<>
        <div className="nav-container">
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="logo">
                        <a className="nav-link" href="/">
                            <img className="icon" src={faceImg} alt="Lucas Developer"></img>
                            <span className="link-text logo-text">Lucas M. Botelho</span>
                        </a>
                    </li>
                    <li className="nav-item">
                    <a href="/" className="nav-link">
                        <HomeIcon className="icon"/>
                        <span className="link-text">Home</span>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="/" className="nav-link">
                       <PersonIcon className="icon"/>
                        <span className="link-text">Perfil</span>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="/" className="nav-link">
                        <CodeIcon className="icon" />
                         <span className="link-text">Habilidades</span>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="/" className="nav-link">
                        <GitHubIcon className="icon" />
                        <span className="link-text">Portfólio</span>
                    </a>
                    </li>
                </ul>
            </nav>
            
        </div>
    </>)
}


export default Navbar