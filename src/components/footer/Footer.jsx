import React from "react";
import './footer.css';
import logo from '../../assets/img/logo-neo.png';

export default function Footer() {
    return (
        <footer className="footer">
        <div className="footer__container">
            <div className="footer__contacts">
                <img className="footer__logo" src={logo} alt="logo-neo"/>
                <ul className="footer__address">
                    <li><a className="footer__address-phone" href="tel:+74959842513">+7 (495) 984 25 13</a></li>
                    <li><a className="footer__address-email" href="mailto:info@neoflex.ru">info@neoflex.ru</a></li>
                </ul>
            </div>
            <div>
                <ul className="footer__list">
                    <li className="footer__link">About bank</li>
                    <li className="footer__link">Ask a Question</li>
                    <li className="footer__link">Quality of service</li>
                    <li className="footer__link">Requisites</li>
                    <li className="footer__link">Press center</li>
                    <li className="footer__link">Bank career</li>
                    <li className="footer__link">Investors</li>
                    <li className="footer__link">Analytics</li>
                    <li className="footer__link">Business and processes</li>
                    <li className="footer__link">Compliance and business ethics</li>
                </ul>
            </div>
            <div className="footer__line"></div>
            <p className="footer__text">We use cookies to personalize our services and improve the user experience of our
                website. Cookies are small files containing information about previous visits to a website. If you do
                not want to use cookies, please change your browser settings</p>
        </div>
    </footer>
    )
}
