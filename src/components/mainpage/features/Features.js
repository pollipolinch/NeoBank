const features = document.querySelector('#features');
import human from '../../../assets/img/human.png';
import './features.css'


class Features {
    show() {
        const template = `
        <section class="features">
        <img class="features__img" src=${human} alt="human">
        <div class="features__info">
            <h2 class="features__title">We Provide Many Features You Can Use</h2>
            <p class="features__text">You can explore the features that we provide with fun and have their own
                functions each feature</p>
            <ul class="features__list">
                <li class="features__list_item">Powerfull online protection.</li>
                <li class="features__list_item">Cashback without borders.</li>
                <li class="features__list_item">Personal design</li>
                <li class="features__list_item">Work anywhere in the world</li>
            </ul>
        </div>
    </section>
        `;
        features.innerHTML = template;
    }
}
export default new Features();