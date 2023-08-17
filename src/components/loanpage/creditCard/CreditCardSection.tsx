import React from 'react';
import style from './creditCard.module.css';
import { card1 } from '../../../helpers/image';
import Tooltip from '../../comp-mini/tooltip/Tooltip';

export default function CreditCardSection() {
    return (
        <section className={style.credit_card}>
            <div className={style.credit_card__background}>
                <div className={style.credit_card__info}>
                    <h2 className={style.credit_card_title}>
                        Platinum digital credit card
                    </h2>
                    <p className={style.credit_card__text}>
                        Our best credit card. Suitable for everyday spending and
                        shopping. Cash withdrawals and transfers without
                        commission and interest.
                    </p>
                    <div className={style.credit_card_about}>
                        <div>
                            <h4 className={style.credit_card_about_number}>
                                Up to 160 days
                            </h4>
                            <Tooltip
                                children={
                                    <h5
                                        className={style.credit_card_about_text}
                                    >
                                        No percent
                                    </h5>
                                }
                                text="When repaying the full debt up to 160 days."
                            />
                        </div>
                        <div>
                            <h4 className={style.credit_card_about_number}>
                                Up to 600 000 ₽
                            </h4>
                            <Tooltip
                                children={
                                    <h5
                                        className={style.credit_card_about_text}
                                    >
                                        Credit limit
                                    </h5>
                                }
                                text="Over the limit willaccrue percent"
                            />
                        </div>
                        <div>
                            <h4 className={style.credit_card_about_number}>
                                0 ₽
                            </h4>
                            <Tooltip
                                children={
                                    <h5
                                        className={style.credit_card_about_text}
                                    >
                                        Card service is free
                                    </h5>
                                }
                                text="Promotion valid until December 31, 2022."
                            />
                        </div>
                    </div>
                    <a href="#getCard">
                        <button className={style.credit_card_button}>
                            Apply for card
                        </button>
                    </a>
                </div>
                <img
                    className={style.credit_card__img}
                    src={card1}
                    alt="card"
                />
            </div>
        </section>
    );
}
