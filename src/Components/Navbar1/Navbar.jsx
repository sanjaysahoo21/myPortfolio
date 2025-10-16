import React from 'react';
import './Navbar.css';

function Navbar(props) {
    return (
        <section className="navbar-section">
            <div className="navbar">
                <ul className="nav-items">
                    <li className="nav-link js-nav-items active">
                        <a href="./index.html">Home</a>
                    </li>
                    <li className="nav-link js-nav-items">
                        <a href="./pages/about.html">About</a>
                    </li>
                    <li className="nav-link js-nav-items">
                        <a href="./pages/contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Navbar;