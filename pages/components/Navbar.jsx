import React from "react"
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PreviewIcon from '@mui/icons-material/Preview';
import CodeIcon from '@mui/icons-material/Code';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';






function Navbar() {
    return (<>
        <div className="nav-container">
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="logo">
                        <a className="nav-link" to="/">
                            <KeyboardDoubleArrowRightIcon className="icon logo-icon" />
                            <span className="logo-text link-text">Lucas Botelho</span>
                        </a>
                    </li>
                    <li className="nav-item profile-icon-mobile">
                    <a to="/profile" className="nav-link">
                       <PersonIcon className="icon "/>
                        <span className="link-text">Perfil</span>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a to="/skills" className="nav-link">
                        <CodeIcon className="icon" />
                         <span className="link-text">Habilidades</span>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a to="/services" className="nav-link">
                        <PreviewIcon className="icon" />
                        <span className="link-text">Serviços</span>
                    </a>
                    </li>
                    <li className="nav-item profile-icon-mobile">
                    <a to="/" className="nav-link">
                       <HomeIcon className="icon "/>
                        <span className="link-text">Home</span>
                    </a>
                    </li>
                </ul>
            </nav>
            
        </div>
    </>)
}


export default Navbar