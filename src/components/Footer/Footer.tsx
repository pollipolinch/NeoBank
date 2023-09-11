import style from './footer.module.css';
import logo from '../../assets/img/logo-neo.png';

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footer__container}>
                <div className={style.footer__contacts}>
                    <img
                        className={style.footer__logo}
                        src={logo}
                        alt="logo-neo"
                    />
                    <ul className={style.footer__address}>
                        <li>
                            <a
                                className={style.footer__address_phone}
                                href="tel:+74959842513"
                            >
                                +7 (495) 984 25 13
                            </a>
                        </li>
                        <li>
                            <a
                                className={style.footer__address_email}
                                href="mailto:info@neoflex.ru"
                            >
                                info@neoflex.ru
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className={style.footer__list}>
                        <li className={style.footer__link}>About bank</li>
                        <li className={style.footer__link}>Ask a Question</li>
                        <li className={style.footer__link}>
                            Quality of service
                        </li>
                        <li className={style.footer__link}>Requisites</li>
                        <li className={style.footer__link}>Press center</li>
                        <li className={style.footer__link}>Bank career</li>
                        <li className={style.footer__link}>Investors</li>
                        <li className={style.footer__link}>Analytics</li>
                        <li className={style.footer__link}>
                            Business and processes
                        </li>
                        <li className={style.footer__link}>
                            Compliance and business ethics
                        </li>
                    </ul>
                </div>
                <div className={style.footer__line}></div>
                <p className={style.footer__text}>
                    We use cookies to personalize our services and improve the
                    user experience of our website. Cookies are small files
                    containing information about previous visits to a website.
                    If you do not want to use cookies, please change your
                    browser settings
                </p>
            </div>
        </footer>
    );
};
