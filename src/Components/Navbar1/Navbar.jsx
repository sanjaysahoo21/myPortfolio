import React from 'react';
import './Navbar.css';
import {Link, useLocation} from 'react-router-dom';
import {useEffect, useState} from'react';

function Navbar() {
    const Location = useLocation();
    const [activeLink, setActiveLink] = useState(Location.pathname);
    useEffect(() => {
        setActiveLink(Location.pathname);
    },[Location]);
    return (
        <section className="navbar-section">
            <div className="navbar">
                <ul className="nav-items">
                    <Link to='/' className={`nav-link js-nav-items ${activeLink === '/' ? 'active' : ''}`} onClick={() => setActiveLink('/')}>
                        <li>Home</li>
                    </Link>
                    <Link to='/About' className={`nav-link js-nav-items ${activeLink === '/About' ? 'active' : ''}`} onClick={() => setActiveLink('/About')}>
                        <li>About</li>
                    </Link>
                    <Link to='/Contact' className={`nav-link js-nav-items ${activeLink === '/Contact' ? 'active' : ''}`} onClick={() => setActiveLink('/Contact')}>
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>
        </section>
    );
}

export default Navbar;