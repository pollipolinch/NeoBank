import React from "react";
import './exchange.css';
import bank from '../../../assets/img/bank.png'



export default function ExchangeSection() {
    return (
        <section className="exchange">
            <div className="exchange__currency">
                <h2 className="exchange__title">Exchange rate in internet bank</h2>
                <h3 className="exchange__text">Currency</h3>
                <div className="exchange__cur">
                    <p className="exchange__cur-value">USD:
                        <span className="exchange__cur-price">60.78</span>
                    </p>
                    <p className="exchange__cur-value">CNY:
                        <span className="exchange__cur-price">9.08</span>
                    </p>
                    <p className="exchange__cur-value">CHF:
                        <span className="exchange__cur-price">64.78</span>
                    </p>
                    <p className="exchange__cur-value">USD:
                        <span className="exchange__cur-price">60.78</span>
                    </p>
                    <p className="exchange__cur-value">JPY:
                        <span className="exchange__cur-price">0.46</span>
                    </p>
                    <p className="exchange__cur-value">TRY:
                        <span className="exchange__cur-price">3.39</span>
                    </p>
                </div>
                <button className="exchange__link">All courses</button>
            </div>
            <div className="exchange__update">
                <h3 className="exchange__update-text">Update every 15 minutes, MSC 09.08.2022</h3>
                <img className="exchange__update-img" src={bank} alt="bank-img" />
            </div>
        </section>

    )
}