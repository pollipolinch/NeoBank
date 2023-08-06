const world = document.querySelector('#world');
import map from '../../../assets/img/map.png'
import './world.css'


class World {
    show() {
        let template = `
        <section class="world">
        <h2 class="world__title">You can use our services anywhere in the world</h2>
        <p class="world__text">Withdraw and transfer money online through our application</p>
        <img class="world__img" src=${map} alt="world map">
    </section>
        `;
        world.innerHTML = template;
    }
}
export default new World();