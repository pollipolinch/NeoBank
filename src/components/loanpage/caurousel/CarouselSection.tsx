import React, { useState } from 'react';
import classNames from 'classnames';
import { Accordion } from '../../CompMini/Accordion/Accordion';
import { Divider } from '../../CompMini/Divider/Divider';
import style from './carousel.module.css';
import { FAQfirst, FAQsecond } from '../../CompMini/Accordion/accordion.data';
import { money, calendar, clock, bag, card } from '../../../helpers/image';
import { Tabs } from '../../CompMini/Tabs/Tabs';
import { TTab } from '../../../utils/types/types';

export const CarouselSection = () => {
    const Tab: TTab[] = [
        { id: '1', label: 'About card' },
        { id: '2', label: 'Rates and conditions' },
        { id: '3', label: 'Cashback' },
        { id: '4', label: 'FAQ' },
    ];
    const [selectedTab, setSelectedTab] = useState(Tab[0].id);
    const handlerSetSelected = (id: number | string) => {
        setSelectedTab(id);
    };
    return (
        <section className={style.caurousel}>
            <div className={style.caurousel__buttons_container}>
                <Tabs
                    tabs={Tab}
                    selectedId={selectedTab}
                    onClick={handlerSetSelected}
                />
            </div>
            <div>
                {selectedTab === Tab[0].id && (
                    <div className={style.caurousel__about}>
                        <div className={style.caurousel__about_mini}>
                            <img
                                className={style.caurousel__about_icon}
                                src={money}
                                alt="icon"
                            />
                            <h4 className={style.caurousel__about_title}>
                                Up to 50 000 ₽
                            </h4>
                            <p className={style.caurousel__about_text}>
                                Cash and transfers without commission and
                                percent
                            </p>
                        </div>
                        <div
                            className={classNames(
                                style.caurousel__about_mini,
                                style.caurousel__about_grey
                            )}
                        >
                            <img
                                className={style.caurousel__about_icon}
                                src={calendar}
                                alt="icon"
                            />
                            <h4 className={style.caurousel__about_title}>
                                Up to 160 days
                            </h4>
                            <p className={style.caurousel__about_text}>
                                Without percent on the loan
                            </p>
                        </div>
                        <div className={style.caurousel__about_mini}>
                            <img
                                className={style.caurousel__about_icon}
                                src={clock}
                                alt="icon"
                            />
                            <h4 className={style.caurousel__about_title}>
                                Free delivery
                            </h4>
                            <p className={style.caurousel__about_text}>
                                We will deliver your card by courier at a
                                convenient place and time for you
                            </p>
                        </div>
                        <div
                            className={classNames(
                                style.caurousel__about_maxi,
                                style.caurousel__about_grey
                            )}
                        >
                            <img
                                className={style.caurousel__about_icon}
                                src={bag}
                                alt="icon"
                            />
                            <h4 className={style.caurousel__about_title}>
                                Up to 12 months
                            </h4>
                            <p className={style.caurousel__about_text}>
                                No percent. For equipment, clothes and other
                                purchases in installments
                            </p>
                        </div>
                        <div className={style.caurousel__about_maxi}>
                            <img
                                className={style.caurousel__about_icon}
                                src={card}
                                alt="icon"
                            />
                            <h4 className={style.caurousel__about_title}>
                                Convenient deposit and withdrawal
                            </h4>
                            <p className={style.caurousel__about_text}>
                                At any ATM. Top up your credit card for free
                                with cash or transfer from other cards
                            </p>
                        </div>
                    </div>
                )}
                {selectedTab === Tab[1].id && (
                    <div className={style.caurousel__rates}>
                        <div className={style.caurousel__rates_info}>
                            <h4 className={style.caurousel__rates_title}>
                                Card currency
                            </h4>
                            <p className={style.caurousel__rates_text}>
                                Rubles, dollars, euro
                            </p>
                        </div>
                        <Divider />
                        <div className={style.caurousel__rates_info}>
                            <h4 className={style.caurousel__rates_title}>
                                Interest free period
                            </h4>
                            <p className={style.caurousel__rates_text}>
                                0% up to 160 days
                            </p>
                        </div>
                        <Divider />
                        <div className={style.caurousel__rates_info}>
                            <h4 className={style.caurousel__rates_title}>
                                Payment system
                            </h4>
                            <p className={style.caurousel__rates_text}>
                                Mastercard, Visa
                            </p>
                        </div>
                        <Divider />
                        <div className={style.caurousel__rates_info}>
                            <h4 className={style.caurousel__rates_title}>
                                Maximum credit limit on the card
                            </h4>
                            <p className={style.caurousel__rates_text}>
                                600 000 ₽
                            </p>
                        </div>
                        <Divider />
                        <div className={style.caurousel__rates_info}>
                            <h4 className={style.caurousel__rates_title}>
                                Replenishment and withdrawal
                            </h4>
                            <p className={style.caurousel__rates_text}>
                                At any ATM. Top up your credit card for free
                                with cash or transfer from other cards
                            </p>
                        </div>
                        <Divider />
                        <div className={style.caurousel__rates_info}>
                            <h4 className={style.caurousel__rates_title}>
                                Max cashback per month
                            </h4>
                            <p className={style.caurousel__rates_text}>
                                15 000 ₽
                            </p>
                        </div>
                        <Divider />
                        <div className={style.caurousel__rates_info}>
                            <h4 className={style.caurousel__rates_title}>
                                Transaction Alert
                            </h4>
                            <p className={style.caurousel__rates_text}>
                                60 ₽ — SMS or push notifications 0 ₽ — card
                                statement, information about transactions in the
                                online bank
                            </p>
                        </div>
                    </div>
                )}
                {selectedTab === Tab[2].id && (
                    <div className={style.caurousel__cashback}>
                        <div className={style.caurousel__cashback_back}>
                            <p className={style.caurousel__cashback_info}>
                                For food delivery, cafes and restaurants
                            </p>
                            <h4 className={style.caurousel__cashback_number}>
                                5%
                            </h4>
                        </div>
                        <div
                            className={classNames(
                                style.caurousel__cashback_back,
                                style.caurousel__cashback_green
                            )}
                        >
                            <p className={style.caurousel__cashback_info}>
                                In supermarkets with our subscription
                            </p>
                            <h4 className={style.caurousel__cashback_number}>
                                5%
                            </h4>
                        </div>
                        <div className={style.caurousel__cashback_back}>
                            <p className={style.caurousel__cashback_info}>
                                In clothing stores and children's goods
                            </p>
                            <h4 className={style.caurousel__cashback_number}>
                                2%
                            </h4>
                        </div>
                        <div
                            className={classNames(
                                style.caurousel__cashback_back,
                                style.caurousel__cashback_green
                            )}
                        >
                            <p className={style.caurousel__cashback_info}>
                                Other purchases and payment of services and
                                fines
                            </p>
                            <h4 className={style.caurousel__cashback_number}>
                                1%
                            </h4>
                        </div>
                        <div className={style.caurousel__cashback_back}>
                            <p className={style.caurousel__cashback_info}>
                                Shopping in online stores
                            </p>
                            <h4 className={style.caurousel__cashback_number}>
                                up to 3%
                            </h4>
                        </div>
                        <div
                            className={classNames(
                                style.caurousel__cashback_back,
                                style.caurousel__cashback_green
                            )}
                        >
                            <p className={style.caurousel__cashback_info}>
                                Purchases from our partners
                            </p>
                            <h4 className={style.caurousel__cashback_number}>
                                30%
                            </h4>
                        </div>
                    </div>
                )}
                {selectedTab === Tab[3].id && (
                    <div className={style.caurousel__accordion}>
                        <h2 className={style.caurousel__accordion_title}>
                            Issuing and receiving a card
                        </h2>
                        <Accordion faqList={FAQfirst} />
                        <h2 className={style.caurousel__accordion_title}>
                            Using a credit card
                        </h2>
                        <Accordion faqList={FAQsecond} />
                    </div>
                )}
            </div>
        </section>
    );
};
