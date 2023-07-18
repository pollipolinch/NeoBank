import React from "react";
import './world.css';
import map from '../../../assets/img/map.png'



export default function WorldSection() {
    return (
        <section className="world">
            <h2 className="world__title">You can use our services anywhere in the world</h2>
            <p className="world__text">Withdraw and transfer money online through our application</p>
            <img className="world__img" src={map} alt="world map"/>
        </section>

    )
}