import { useState } from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import style from './header.module.css';

export const Header = () => {
    const [burgerMenu, setBurgerMenu] = useState(false);
    const openBurger = () => {
        setBurgerMenu(!burgerMenu);
    };
    const navigate = useNavigate();
    const isLoan = window.location.href.includes('loan');
    const toLoanPage = () => {
        navigate('/loan');
        window.location.reload();
    };
    const toNotFoundPage = () => {
        navigate('/notfound');
    };
    const toMainPage = () => {
        navigate('/');
    };

    return (
        <header className={style.header}>
            <h2 onClick={() => toMainPage()} className={style.header__logo}>
                NeoBank
            </h2>
            <div onClick={openBurger} className={style.header__hamb}>
                <span
                    className={classNames(
                        burgerMenu
                            ? style.header__hamb_bar_first
                            : style.header__hamb_bar
                    )}
                ></span>
                <span
                    className={classNames(
                        burgerMenu
                            ? style.header__hamb_bar_second
                            : style.header__hamb_bar
                    )}
                ></span>
                <span
                    className={classNames(
                        burgerMenu
                            ? style.header__hamb_bar_third
                            : style.header__hamb_bar
                    )}
                ></span>
                <span
                    className={classNames(
                        burgerMenu
                            ? style.header__hamb_bar_active
                            : style.header__hamb_bar
                    )}
                ></span>
            </div>
            <nav className={style.header__nav}>
                <ul
                    className={classNames(
                        burgerMenu
                            ? style.header__nav_list_active
                            : style.header__nav_list
                    )}
                >
                    <li
                        onClick={() => toLoanPage()}
                        className={classNames(
                            isLoan
                                ? style.header__nav_link_selected
                                : style.header__nav_link
                        )}
                    >
                        Credit card
                    </li>
                    <li
                        onClick={() => toNotFoundPage()}
                        className={style.header__nav_link}
                    >
                        Product
                    </li>
                    <li
                        onClick={() => toNotFoundPage()}
                        className={style.header__nav_link}
                    >
                        Account
                    </li>
                    <li
                        onClick={() => toNotFoundPage()}
                        className={style.header__nav_link}
                    >
                        Resources
                    </li>
                </ul>
            </nav>
            <button className={style.header__button}>Online Bank</button>
        </header>
    );
};
