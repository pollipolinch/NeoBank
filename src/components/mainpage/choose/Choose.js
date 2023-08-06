const choose = document.querySelector('#choose');
import card1 from '../../../assets/img/cardImage1.png'
import card2 from '../../../assets/img/cardImage2.png'
import card3 from '../../../assets/img/cardImage3.png'
import card4 from '../../../assets/img/cardImage4.png'
import './choose.css'


class Choose {
    show() {
        let template = `
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