import style from './support.module.css';
import { tg_sign, mail_sign } from '../../../helpers/image';
import { useEffect, useState } from 'react';
import { request } from '../../../utils/requests/Request';

export default function SupportSection() {
    const [mailSub, setMailSub] = useState('');
    const [showCont, setShowCont] = useState(false);

    const emailRequest = async (mail: string) => {
        const body = JSON.stringify({ mail });
        const url = `http://localhost:8080/email`;
        const { PostRequest } = request();
        const result = await PostRequest(url, 'POST', body);
        return result;
    };

    async function postMessage(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const response = await emailRequest(mailSub);
        if (response) {
            localStorage.setItem('email_to_subscribe', mailSub);
            setShowCont(true);
        }
    }
    useEffect(() => {
        const email = localStorage.getItem('email_to_subscribe');
        if (email) {
            setShowCont(true);
        }
    }, []);
    return (
        <section className={style.support}>
            <p className={style.support__text_color}>Support</p>
            <h2 className={style.support__title}>Subscribe Newsletter & get</h2>
            <p className={style.support__text}>Bank News</p>
            {showCont ? (
                <p className={style.support__post_text}>
                    You are already subscribed to the bank's newsletter
                </p>
            ) : (
                <form onSubmit={postMessage} className={style.support__form}>
                    <img
                        className={style.support__form_img}
                        src={mail_sign}
                        alt="email-sign"
                    />
                    <input
                        className={style.support__form_input}
                        type="text"
                        placeholder="Your email"
                        value={mailSub}
                        onChange={(event) => setMailSub(event.target.value)}
                    />
                    <button className={style.support__form_button}>
                        <img
                            className={style.support__form_sign}
                            src={tg_sign}
                            alt="tg-sign"
                        />
                        Subscribe
                    </button>
                </form>
            )}
        </section>
    );
}
