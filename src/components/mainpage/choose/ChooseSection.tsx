import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './choose.module.css';
import { card1, card2, card3, card4 } from '../../../utils/helpers/image';

export const ChooseSection = () => {
    const navigate = useNavigate();
    const toLoanPage = () => {
        navigate('/loan');
    };
    return (
        <section className={style.choose}>
            <div className={style.choose__info}>
                <h1 className={style.choose__title}>
                    Choose the design you like and apply for card right now
                </h1>
                <button
                    onClick={() => toLoanPage()}
                    className={style.choose_button}
                >
                    Choose the card
                </button>
            </div>
            <div className={style.choose__cards}>
                <img
                    className={style.choose__card}
                    src={card1}
                    alt="card-img"
                />
                <img
                    className={style.choose__card}
                    src={card2}
                    alt="card-img"
                />
                <img
                    className={style.choose__card}
                    src={card3}
                    alt="card-img"
                />
                <img
                    className={style.choose__card}
                    src={card4}
                    alt="card-img"
                />
            </div>
        </section>
    );
};
