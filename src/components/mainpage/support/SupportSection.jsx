import React from "react";
import style from './support.module.css';
import tg_sign from '../../../assets/img/tg-sign.png'
import mail_sign from '../../../assets/img/email.png'




export default function SupportSection() {
    return (
        <section className={style.support}>
            <p className={style.support__text_color}>Support</p>
            <h2 className={style.support__title}>Subscribe Newsletter & get</h2>
            <p className={style.support__text}>Bank News</p>
            <form className={style.support__form}>
                <img className={style.support__form_img} src={mail_sign} alt="email-sign" />
                <input className={style.support__form_input} type="text" placeholder="Your email" />
                <button className={style.support__form_button}>
                    <img className={style.support__form_sign} src={tg_sign} alt="tg-sign" />
                    Subscribe</button>
            </form>
        </section>

    )
}