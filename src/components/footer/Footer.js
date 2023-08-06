import logo from '../../assets/img/logo-neo.png'
import './Footer.css'
const footer = document.querySelector('#footer');

class Footer {
    show() {
        let template = `
        <footer class="footer">
        <div class="footer__container">
            <div class="footer__contacts">
                <img class="footer__logo" src=${logo} alt="logo-neo">
                <ul class="footer__address">
                    <li><a class="footer__address_phone" href="tel:+74959842513">+7 (495) 984 25 13</a></li>
                    <li><a class="footer__address_email" href="mailto:info@neoflex.ru">info@neoflex.ru</a></li>
                </ul>
            </div>
            <div>
                <ul class="footer__list">
                    <li><a class="footer__link" href="#">About bank</a></li>
                    <li><a class="footer__link" href="#">Ask a Question</a></li>
                    <li><a class="footer__link" href="#">Quality of service</a></li>
                    <li><a class="footer__link" href="#">Requisites</a></li>
                    <li><a class="footer__link" href="#">Press center</a></li>
                    <li><a class="footer__link" href="#">Bank career</a></li>
                    <li><a class="footer__link" href="#">Investors</a></li>
                    <li><a class="footer__link" href="#">Analytics</a></li>
                    <li><a class="footer__link" href="#">Business and processes</a></li>
                    <li><a class="footer__link" href="#">Compliance and business ethics</a></li>
                </ul>
            </div>
            <div class="footer__line"></div>
            <p class="footer__text">We use cookies to personalize our services and improve the user experience of our
                website. Cookies are small files containing information about previous visits to a website. If you do
                not want to use cookies, please change your browser settings</p>
        </div>
    </footer>
        `;
        footer.innerHTML = template;
    }
}
export default new Footer();