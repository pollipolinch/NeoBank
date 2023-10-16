import style from '../Scoringpage/scoringPage.module.css';

export const PaymentText = () => {
    return (
        <section>
            <h2 className={style.scoring__title}>Documents are formed</h2>
            <p className={style.scoring__text}>
                Documents for signing will be sent to your email
            </p>
        </section>
    );
};
