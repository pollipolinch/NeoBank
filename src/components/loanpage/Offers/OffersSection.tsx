import style from './offers.module.css';
import { IOffer } from '../../../utils/types/types';
import { useAppSelector } from '../../../utils/hooks/useRedux';
import { OfferItem } from './OfferItem';
import { LoaderCom } from '../../CompMini/Loader/LoaderCom';

interface IOffersSection {
    offers: IOffer[];
}
export const OffersSection = ({ offers }: IOffersSection) => {
    const { loader } = useAppSelector((store) => store.cardSlice);

    if (loader) {
        return <LoaderCom />;
    }
    return (
        <section id="getCard">
            <div className={style.offers}>
                {offers.map((offer) => (
                    <OfferItem key={offer.monthlyPayment} offer={offer} />
                ))}
            </div>
        </section>
    );
};
