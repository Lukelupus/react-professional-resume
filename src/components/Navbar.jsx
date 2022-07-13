import React from "react"
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ForwardIcon from '@mui/icons-material/Forward';




function Navbar() {
    return (<>
        <div className="nav-container">
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="logo">
                        <a className="nav-link" href="/">
                            <ForwardIcon className="icon logo-icon"/>
                            <span className="link-text logo-text">Logo</span>
                        </a>
                    </li>
                    <li className="nav-item">
                    <a href="/" className="nav-link">
                        <HomeIcon className="icon" />
                        <span className="link-text">Home</span>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="/" className="nav-link">
                        <AccountCircleIcon className="icon"/>
                        <span className="link-text">Login</span>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="/" className="nav-link">
                        <MenuBookIcon className="icon" />
                        <span className="link-text">Blog</span>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="/" className="nav-link">
                        <SettingsIcon className="icon" />
                        <span className="link-text">Settings</span>
                    </a>
                    </li>
                </ul>
            </nav>
            
        </div>
    </>)
}


export default Navbar