const support = document.querySelector('#support');
import tg_sign from '../../../assets/img/tg-sign.png'
import mail_sign from '../../../assets/img/email.png'
import './support.css'


class Support {
    show() {
        const template = `
        <section class="support">
        <p class="support__text_color">Support</p>
        <h2 class="support__title">Subscribe Newsletter & get</h2>
        <p class="support__text">Bank News</p>
        <form class="support__form">
            <img class="support__form_img" src=${mail_sign} alt="email-sign">
            <input class="support__form_input" type="text" placeholder="Your email">
            <button class="support__form_button">
                <img class="support__form_sign" src=${tg_sign} alt="tg-sign">
                Subscribe</button>
        </form>
    </section>
        `;
        support.innerHTML = template;
    }
}
export default new Support();