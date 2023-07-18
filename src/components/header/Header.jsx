import React from "react";
import './header.css';

export default function Header() {
    return (
        <>
        <header className="header">
        <h2 className="header__logo">NeoBank</h2>
        <nav>
            <ul className="header__nav">
                <li className="header__nav-link">Credit card</li>
                <li className="header__nav-link">Product</li>
                <li className="header__nav-link">Account</li>
                <li className="header__nav-link">Resources</li>
            </ul>
        </nav>
        <button className="header__button">Online Bank</button>
        <div className="header__hamb">
            <span className="header__hamb-bar"></span>
            <span className="header__hamb-bar"></span>
            <span className="header__hamb-bar"></span>
            <span className="header__hamb-bar"></span>
        </div>
    </header>
    </>
    )
}
