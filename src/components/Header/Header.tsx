import { useState } from "react";
import classNames from "classnames";
// import { useNavigate } from "react-router-dom";
import style from "./header.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const openBurger = () => {
    setBurgerMenu(!burgerMenu);
  };

  const isLoan = window.location.href.includes("loan");

  return (
    <header className={style.header}>
      <h2>
        <Link className={style.header__logo} to={"/"}>
          NeoBank
        </Link>
      </h2>
      <div onClick={openBurger} className={style.header__hamb}>
        <span
          className={classNames(
            burgerMenu ? style.header__hamb_bar_first : style.header__hamb_bar
          )}
        ></span>
        <span
          className={classNames(
            burgerMenu ? style.header__hamb_bar_second : style.header__hamb_bar
          )}
        ></span>
        <span
          className={classNames(
            burgerMenu ? style.header__hamb_bar_third : style.header__hamb_bar
          )}
        ></span>
        <span
          className={classNames(
            burgerMenu ? style.header__hamb_bar_active : style.header__hamb_bar
          )}
        ></span>
      </div>
      <nav className={style.header__nav}>
        <ul
          className={classNames(
            burgerMenu ? style.header__nav_list_active : style.header__nav_list
          )}
        >
          <li>
            <Link
              className={classNames(
                isLoan
                  ? style.header__nav_link_selected
                  : style.header__nav_link
              )}
              to="/loan"
            >
              Credit card
            </Link>
          </li>
          <li>
            <Link className={style.header__nav_link} to={"/notfound"}>
              Product
            </Link>
          </li>
          <li>
            <Link className={style.header__nav_link} to={"/notfound"}>
              Account
            </Link>
          </li>
          <li>
            <Link className={style.header__nav_link} to={"/notfound"}>
              Resources
            </Link>
          </li>
        </ul>
      </nav>
      <button className={style.header__button}>Online Bank</button>
    </header>
  );
};
