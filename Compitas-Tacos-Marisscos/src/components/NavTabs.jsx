import { Link, useLocation } from 'react-router-dom';
import Logo from '../public/Compaslogo.svg';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

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
                <FaFacebookSquare className='nav-icon' />
                <FaInstagram className='nav-icon' />
                <FaSquareXTwitter className='nav-icon' />
            </div>
        </div>
    );
}

export default NavTabs;