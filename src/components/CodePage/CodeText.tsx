import style from './code.module.css';
import box from '../../assets/img/OffersBox.png';
import { useNavigate } from 'react-router-dom';

export const CodeText = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
        localStorage.removeItem('offers');
        localStorage.removeItem('postSign');
    };
    return (
        <section>
            <img className={style.codeText__img} src={box} alt="surprize_box" />
            <h2 className={style.codeText__title}>
                Congratulations! You have completed your new credit card.
            </h2>
            <p className={style.codeText__text}>
                Your credit card will arrive soon. Thank you for choosing us!
            </p>
            <button onClick={goHome} className={style.codeText__button}>
                View other offers of our bank
            </button>
        </section>
    );
};
