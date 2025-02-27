import { Link, useLocation } from 'react-router-dom';
import Logo from '../public/Compaslogo.svg';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import "../styles/NavTabs.css";

function NavTabs() {
    const currentPage = useLocation().pathname;
    return (
        <div className='navbar-container'>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
                        HOME
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Menu" className={currentPage === '/Menu' ? 'nav-link active' : 'nav-link'}>
                        MENU
                    </Link>
                </li>
            </ul>
            <img src={Logo} alt="Compas Logo" className='nav-logo' />
            <div className='nav-icons'>
                <a href="https://www.facebook.com/cevichazoelcompa/" target="_blank" rel="noreferrer">
                <FaFacebookSquare className='nav-icon' />
                </a>
                
                <a href="https://www.instagram.com/compitasut/" target="_blank" rel="noreferrer">
                <FaInstagram className='nav-icon' />
                </a>
            </div>
        </div>
    );
}

export default NavTabs;