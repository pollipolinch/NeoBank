import React from "react";
import './support.css';
import tg_sign from '../../../assets/img/tg-sign.png'
import mail_sign from '../../../assets/img/email.png'




export default function SupportSection() {
    return (
        <section class="support">
            <p className="support__text-color">Support</p>
            <h2 className="support__title">Subscribe Newsletter & get</h2>
            <p className="support__text">Bank News</p>
            <form className="support__form">
                <img className="support__form-img" src={mail_sign} alt="email-sign" />
                <input className="support__form-input" type="text" placeholder="Your email" />
                <button className="support__form-button">
                    <img className="support__form-sign" src={tg_sign} alt="tg-sign" />
                    Subscribe</button>
            </form>
        </section>

    )
}