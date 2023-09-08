import { useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { CreditCardSection } from '../../components/Loanpage/CreditCard/CreditCardSection';
import { CarouselSection } from '../../components/Loanpage/Caurousel/CarouselSection';
import { GetCardSection } from '../../components/Loanpage/GetCard/GetCardSection';
import { useAppDispatch } from '../../utils/hooks/useRedux';
import { getStatus } from '../../utils/store/cardSlice';
import { GetCardAbout } from '../../components/Loanpage/GetCard/GetCardAbout';

const Loan = () => {
    const dispatch = useAppDispatch();
    const offers = JSON.parse(localStorage.getItem('offers')!);

    useEffect(() => {
        if (offers) {
            dispatch(getStatus(String(offers[0].applicationId)));
        }
    }, []);
    return (
        <>
            <div>
                <Header />
                <CreditCardSection />
                <CarouselSection />
                <GetCardAbout />
                <GetCardSection />
                <Footer />
            </div>
        </>
    );
};
export default Loan;
