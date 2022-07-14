import React from "react"
import PersonIcon from '@mui/icons-material/Person';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Link } from 'react-router-dom'





function Navbar() {
    return (<>
        <div className="nav-container">
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="logo">
                        <Link className="nav-link" to="/">
                            <KeyboardDoubleArrowRightIcon className="icon logo-icon" />
                            <span className="logo-text link-text">Lucas Botelho</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                       <PersonIcon className="icon"/>
                        <span className="link-text">Perfil</span>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/skills" className="nav-link">
                        <CodeIcon className="icon" />
                         <span className="link-text">Habilidades</span>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/portfolio" className="nav-link">
                        <GitHubIcon className="icon" />
                        <span className="link-text">Portfólio</span>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                        <AlternateEmailIcon className="icon"/>
                        <span className="link-text">Contato</span>
                    </Link>
                    </li>
                </ul>
            </nav>
            
        </div>
    </>)
}


export default Navbar