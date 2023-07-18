import React from "react";
import './choose.css';
import card1 from '../../../assets/img/cardImage1.png';
import card2 from '../../../assets/img/cardImage2.png';
import card3 from '../../../assets/img/cardImage3.png';
import card4 from '../../../assets/img/cardImage4.png';

export default function ChooseSection() {
    return (
        <section className="choose">
            <div className="choose__info">
            <h1 className="choose__title">Choose the design you like and apply for card right now</h1>
                <button className="choose-button">Choose the card</button>
            </div>
            <div className="choose__cards">
                <img src={card1} alt="card-img"/>
                <img src={card2}  alt="card-img"/>
                <img src={card3}  alt="card-img"/>
                <img src={card4}  alt="card-img"/>
            </div>
        </section>

                        )
}