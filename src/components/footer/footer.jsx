import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <Link to="/"><img src={logo} alt="" /></Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Hlavní</Link>
                        <Link to="/">Kontakty</Link>
                        <Link to="/">Služby</Link>
                        <Link to="/">O nás</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Live</Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Zásady ochrany osobních údajů</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Musíš se kouknout</Link>
                        <Link to="/">Novinky</Link>
                        <Link to="/">Top IMDB</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
