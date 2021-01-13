import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img
                        src="https://bulma.io/images/bulma-logo.png"
                        alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
                        width="112"
                        height="28"
                    />
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu is-active">
                <div className="navbar-start">
                    <Link to="/" className="navbar-item">
                        Início
                    </Link>

                    <Link to="/contact" className="navbar-item">
                        Contato
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Header;
