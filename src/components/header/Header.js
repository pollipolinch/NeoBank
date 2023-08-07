const header = document.querySelector('#header');
import './header.css'

class Header {
    show() {
        const template = `
        <header class="header">
        <a href="#" class="header__logo">NeoBank</a>
        <input id="header__toggle" type="checkbox" />
        <label class="header__hamb" for="header__toggle">
            <span class="header__hamb_bar"></span>
            <span class="header__hamb_bar"></span>
            <span class="header__hamb_bar"></span>
            <span class="header__hamb_bar"></span>
        </label>
        <nav class="header__nav">
            <ul class="header__nav_list">
                <li><a class="header__nav_link" href="#">Credit card</a></li>
                <li><a class="header__nav_link" href="#">Product</a></li>
                <li><a class="header__nav_link" href="#">Account</a></li>
                <li><a class="header__nav_link" href="#">Resources</a></li>
            </ul>
        </nav>
        <a href="#" class="header__button">Online Bank</a>
    </header>
        `;
        header.innerHTML = template
    }
}
export default new Header();