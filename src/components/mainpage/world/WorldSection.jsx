import React from "react";
import style from './world.module.css';
import map from '../../../assets/img/map.png'



export default function WorldSection() {
    return (
        <section className={style.world}>
            <h2 className={style.world__title}>You can use our services anywhere in the world</h2>
            <p className={style.world__text}>Withdraw and transfer money online through our application</p>
            <img className={style.world__img} src={map} alt="world map"/>
        </section>

    )
}