import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <section className="navbar-section">
            <div className="navbar">
                <ul className="nav-items">
                    <Link to='/' className="nav-link js-nav-items active">
                        <li>Home</li>
                    </Link>
                    <Link to='/About' className="nav-link js-nav-items">
                        <li>About</li>
                    </Link>
                    <Link to='/Contact' className="nav-link js-nav-items">
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>
        </section>
    );
}

export default Navbar;