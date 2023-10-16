import style from './getCard.module.css';

export const GetCardAbout = () => {
    return (
        <div>
            <h2 className={style.getCard__title}>How to get a card</h2>
            <div className={style.getCard__steps}>
                <div className={style.getCard__step}>
                    <div className={style.getCard__figure}>
                        <div className={style.getCard__circle}>1</div>
                        <div className={style.getCard__line}></div>
                    </div>
                    <p className={style.getCard__text}>
                        Fill out an online application - you do not need to
                        visit the bank
                    </p>
                </div>
                <div className={style.getCard__step}>
                    <div className={style.getCard__figure}>
                        <div className={style.getCard__circle}>2</div>
                        <div className={style.getCard__line}></div>
                    </div>
                    <p className={style.getCard__text}>
                        Find out the bank's decision immediately after filling
                        out the application
                    </p>
                </div>
                <div className={style.getCard__step}>
                    <div className={style.getCard__figure}>
                        <div className={style.getCard__circle}>3</div>
                        <div className={style.getCard__line}></div>
                    </div>
                    <p className={style.getCard__text}>
                        The bank will deliver the card free of charge, wherever
                        convenient, to your city
                    </p>
                </div>
            </div>
        </div>
    );
};
