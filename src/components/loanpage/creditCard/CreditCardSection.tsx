import React from 'react';
import style from './creditCard.module.css';
import { card1 } from '../../../utils/helpers/image';
import { Tooltip } from '../../CompMini/Tooltip/Tooltip';
import { useAppSelector } from '../../../utils/hooks/useRedux';
import { AppStatus } from '../../../utils/types/types';
import { useNavigate } from 'react-router-dom';

export const CreditCardSection = () => {
    const navigate = useNavigate();
    const offers = JSON.parse(localStorage.getItem('offers')!);
    const sign = JSON.parse(localStorage.getItem('postSign')!);
    const id = offers ? offers[0].applicationId : null;
    const { status } = useAppSelector((store) => store.cardSlice);
    const goTwoStep = () => {
        navigate(`/loan/${id}`);
    };
    const goThreeStep = () => {
        navigate(`/loan/${id}/document`);
    };
    const goFourStep = () => {
        navigate(`/loan/${id}/document/sign`);
    };
    const goFiveStep = () => {
        navigate(`/loan/${id}/code`);
    };
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
                    {(status === null || status === AppStatus.PREAPPROVAL) && (
                        <a href="#getCard">
                            <button className={style.credit_card_button}>
                                Apply for card
                            </button>
                        </a>
                    )}
                    {status === AppStatus.APPROVED && (
                        <button
                            onClick={goTwoStep}
                            className={style.credit_card_button}
                        >
                            Continue registration
                        </button>
                    )}
                    {status === AppStatus.CC_APPROVED && (
                        <button
                            onClick={goThreeStep}
                            className={style.credit_card_button}
                        >
                            Continue registration
                        </button>
                    )}
                    {status === AppStatus.DOCUMENT_CREATED && !sign && (
                        <button
                            onClick={goFourStep}
                            className={style.credit_card_button}
                        >
                            Continue registration
                        </button>
                    )}
                    {status === AppStatus.DOCUMENT_CREATED && sign && (
                        <button
                            onClick={goFiveStep}
                            className={style.credit_card_button}
                        >
                            Continue registration
                        </button>
                    )}
                    {status === AppStatus.CREDIT_ISSUED && (
                        <button
                            onClick={goFiveStep}
                            className={style.credit_card_button}
                        >
                            Continue registration
                        </button>
                    )}
                </div>
                <img
                    className={style.credit_card__img}
                    src={card1}
                    alt="card"
                />
            </div>
        </section>
    );
};
