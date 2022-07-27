import React from "react"
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PreviewIcon from '@mui/icons-material/Preview';
import CodeIcon from '@mui/icons-material/Code';
import CopyrightIcon from '@mui/icons-material/Copyright';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Link from "next/link";






function Navbar() {
    return (<>
        <div className="nav-container">
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="logo">
                        <div className="nav-link">
                        <Link href="/">
                            <KeyboardDoubleArrowRightIcon className="icon logo-icon" />
                        </Link>
                        <Link href="/">
                            <a className="logo-text link-text">Lucas Botelho</a>
                        </Link>
                        </div>
                    </li>
                    <li className="nav-item profile-icon-mobile">
                        <div className="nav-link">
                            <Link href="/" ><HomeIcon className="icon "/></Link>
                            <Link href="/" ><a className="link-text">Home</a></Link>
                        </div>
                    </li>
                    <li className="nav-item profile-icon-mobile">
                    <div  className="nav-link">
                        <Link href="/profile"> 
                            <PersonIcon className="icon "/>
                        </Link>
                        <Link href="/profile">
                            <a className="link-text">Perfil</a>
                        </Link>
                    </div>
                    </li>
                    <li className="nav-item">
                    <div  className="nav-link">
                        <Link href="/skills"><CodeIcon className="icon" /></Link>
                        <Link href="/skills"><a className="link-text">Habilidades</a></Link>
                    </div>
                    </li>
                    <li className="nav-item">
                    <div  className="nav-link">
                        <Link href="/crie-seu-site"><PreviewIcon className="icon" /></Link>
                        <Link href="/crie-seu-site"><a className="link-text">Serviços</a></Link>
                    </div>
                    </li> 
                    <li className="nav-item profile-icon-mobile">
                    <div className="nav-link">
                    <Link href="/" ><CopyrightIcon className="icon "/></Link>
                    <Link href="/" ><a className="link-text">Copyright© 2022</a></Link>
                    </div>
                    </li>
                </ul>
            </nav>
            
        </div>
    </>)
}


export default Navbar