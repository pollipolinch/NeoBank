import React from "react";
import style from './exchange.module.css';
import bank from '../../../assets/img/bank.png'



export default function ExchangeSection() {
    return (
        <section className={style.exchange}>
            <div className={style.exchange__currency}>
                <h2 className={style.exchange__title}>Exchange rate in internet bank</h2>
                <h3 className={style.exchange__text}>Currency</h3>
                <div className={style.exchange__cur}>
                    <p className={style.exchange__cur_value}>USD:
                        <span className={style.exchange__cur_price}>60.78</span>
                    </p>
                    <p className={style.exchange__cur_value}>CNY:
                        <span className={style.exchange__cur_price}>9.08</span>
                    </p>
                    <p className={style.exchange__cur_value}>CHF:
                        <span className={style.exchange__cur_price}>64.78</span>
                    </p>
                    <p className={style.exchange__cur_value}>USD:
                        <span className={style.exchange__cur_price}>60.78</span>
                    </p>
                    <p className={style.exchange__cur_value}>JPY:
                        <span className={style.exchange__cur_price}>0.46</span>
                    </p>
                    <p className={style.exchange__cur_value}>TRY:
                        <span className={style.exchange__cur_price}>3.39</span>
                    </p>
                </div>
                <button className={style.exchange__link}>All courses</button>
            </div>
            <div className={style.exchange__update}>
                <h3 className={style.exchange__update_text}>Update every 15 minutes, MSC 09.08.2022</h3>
                <img className={style.exchange__update_img} src={bank} alt="bank-img" />
            </div>
        </section>

    )
}