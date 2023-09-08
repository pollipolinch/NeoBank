import style from '../Scoringpage/scoringPage.module.css';

export const SignText = () => {
    return (
        <section>
            <h2 className={style.scoring__title}>
                Documents have been successfully signed and sent for approval
            </h2>
            <p className={style.scoring__text}>
                Within 10 minutes you will be sent a PIN code to your email for
                confirmation
            </p>
        </section>
    );
};
