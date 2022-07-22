import React from "react"
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PreviewIcon from '@mui/icons-material/Preview';
import CodeIcon from '@mui/icons-material/Code';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Link from "next/link";






function Navbar() {
    return (<>
        <div className="nav-container">
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="logo">
                        <div className="nav-link">
                        <KeyboardDoubleArrowRightIcon className="icon logo-icon" />
                        <Link href="/">
                            <span className="logo-text link-text">Lucas Botelho</span>
                        </Link>
                        </div>
                    </li>
                    <li className="nav-item profile-icon-mobile">
                    <div  className="nav-link">
                       <PersonIcon className="icon "/>
                       <Link href="/profile"><span className="link-text">Perfil</span></Link>
                    </div>
                    </li>
                    <li className="nav-item">
                    <div  className="nav-link">
                        <CodeIcon className="icon" />
                        <Link href="/skills"><span className="link-text">Habilidades</span></Link>
                    </div>
                    </li>
                    <li className="nav-item">
                    <div  className="nav-link">
                        <PreviewIcon className="icon" />
                        <Link href="/services"><span className="link-text">Serviços</span></Link>
                        
                    </div>
                    </li> 
                    <li className="nav-item profile-icon-mobile">
                    <div className="nav-link">
                    <HomeIcon className="icon "/>
                    <Link href="/" ><span className="link-text">Home</span></Link>
                    </div>
                    </li>
                </ul>
            </nav>
            
        </div>
    </>)
}


export default Navbar