import style from './scoringPage.module.css';

export const ScoringText = () => {
    return (
        <section>
            <h2 className={style.scoring__title}>
                Wait for a decision on the application
            </h2>
            <p className={style.scoring__text}>
                The answer will come to your mail within 10 minutes
            </p>
        </section>
    );
};
