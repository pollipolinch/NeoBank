import style from './offers.module.css';
import { startTransition } from 'react';
import { IOffer } from '../../../utils/types/types';
import { useAppDispatch } from '../../../utils/hooks/useRedux';
import SuccessIcon from '../../../assets/icons/SuccessIcon';
import ErrorIcon from '../../../assets/icons/ErrorIcon';
import offersBox from '../../../assets/img/OffersBox.png';
import { postSelectedOffer } from '../../../utils/store/cardSlice';

interface ICardOfferProps {
    offer: IOffer;
}
export const OfferItem = ({ offer }: ICardOfferProps) => {
    const dispatch = useAppDispatch();
    const getSelectedOffer = () => {
        startTransition(() => {
            dispatch(postSelectedOffer(offer));
        });
    };
    return (
        <div className={style.offers__container}>
            <img
                className={style.offers__img}
                src={offersBox}
                alt="offer box"
            />
            <p className={style.offers__text}>
                Requested amount: {offer.requestedAmount} ₽
            </p>
            <p className={style.offers__text}>
                Total amount: {offer.totalAmount} ₽
            </p>
            <p className={style.offers__text}>For {offer.term} months</p>
            <p className={style.offers__text}>
                Monthly payment: {offer.monthlyPayment} ₽
            </p>
            <p className={style.offers__text}> Your rate: {offer.rate}%</p>
            <div className={style.offers__iconContent}>
                <p className={style.offers__text}>Insurance included</p>
                <span>
                    {offer.isInsuranceEnabled ? <SuccessIcon /> : <ErrorIcon />}
                </span>
            </div>
            <div className={style.offers__iconContent}>
                <p className={style.offers__text}>Salary client</p>
                <span>
                    {offer.isSalaryClient ? <SuccessIcon /> : <ErrorIcon />}
                </span>
            </div>
            <button onClick={getSelectedOffer} className={style.offers__button}>
                Select
            </button>
        </div>
    );
};
