const choose = document.querySelector('#choose');
import {card1,card2,card3,card4} from '../../../helpers/cardImage'
import './choose.css'


class Choose {
    show() {
        const template = `
        <section class="choose">
        <div class="choose__info">
            <h1 class="choose__title">Choose the design you like and apply for card right now</h1>
            <button class="choose_button">Choose the card</button>
        </div>
        <div class="choose__cards">
            <img src=${card1} alt="card-img">
            <img src=${card2} alt="card-img">
            <img src=${card3} alt="card-img">
            <img src=${card4} alt="card-img">
        </div>
    </section>
        `;
        choose.innerHTML = template;
    }
}
export default new Choose();