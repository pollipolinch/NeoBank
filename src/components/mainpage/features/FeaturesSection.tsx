import style from './features.module.css';
import human from '../../../assets/img/human.png';

export const FeaturesSection = () => {
    return (
        <section className={style.features}>
            <img className={style.features__img} src={human} alt="human" />
            <div className={style.features__info}>
                <h2 className={style.features__title}>
                    We Provide Many Features You Can Use
                </h2>
                <p className={style.features__text}>
                    You can explore the features that we provide with fun and
                    have their own functions each feature
                </p>
                <ul className={style.features__list}>
                    <li className={style.features__list_item}>
                        Powerfull online protection.
                    </li>
                    <li className={style.features__list_item}>
                        Cashback without borders.
                    </li>
                    <li className={style.features__list_item}>
                        Personal design
                    </li>
                    <li className={style.features__list_item}>
                        Work anywhere in the world
                    </li>
                </ul>
            </div>
        </section>
    );
};
