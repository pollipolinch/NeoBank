import style from './notFound.module.css';
import { useNavigate } from 'react-router-dom';
import errorImg from '../../assets/img/error.png';

export const NotFoundPage = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    return (
        <section className={style.error}>
            <div>
                <h2 className={style.error__title}>Oops....</h2>
                <h3 className={style.error__text}>Page not found</h3>
                <p className={style.error__info}>
                    This Page doesn`t exist or was removed! We suggest you go
                    back.
                </p>
                <button
                    onClick={() => goBack()}
                    className={style.error__button}
                >
                    Go back
                </button>
            </div>
            <img src={errorImg} alt="error" />
        </section>
    );
};
