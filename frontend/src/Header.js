import React from 'react';
import './Header.css';

function Header() {
    return (
        <header>
            <div className="logo">
                <a href="https://rearc.io">
                    <img src="assets/logo-dark.png" alt="Rearc Logo"/>
                </a>
                <a href="/" className="title">Data Dictionary</a>
            </div>
            <div className="contact">
                <a href="https://www.rearc.io/contact-us/" className="contactButton">Contact Us</a>
            </div>
        </header>
    );
}

export default Header