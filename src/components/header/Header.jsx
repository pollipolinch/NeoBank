import React from "react";
import style from './header.module.css';

export default function Header() {
    return (
        <header className={style.header}>
        <h2 className={style.header__logo}>NeoBank</h2>
        <nav>
            <ul className={style.header__nav}>
                <li className={style.header__nav_link}>Credit card</li>
                <li className={style.header__nav_link}>Product</li>
                <li className={style.header__nav_link}>Account</li>
                <li className={style.header__nav_link}>Resources</li>
            </ul>
        </nav>
        <button className={style.header__button}>Online Bank</button>
        <div className={style.header__hamb}>
            <span className={style.header__hamb_bar}></span>
            <span className={style.header__hamb_bar}></span>
            <span className={style.header__hamb_bar}></span>
            <span className={style.header__hamb_bar}></span>
        </div>
    </header>
    )
}
