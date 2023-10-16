import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { CreditCardSection } from '../components/Loanpage/CreditCard/CreditCardSection';
import { CarouselSection } from '../components/Loanpage/Caurousel/CarouselSection';
import { GetCardSection } from '../components/Loanpage/GetCard/GetCardSection';
import { GetCardAbout } from '../components/Loanpage/GetCard/GetCardAbout';
import { useGetStatus } from '../utils/hooks/useGetStatus';

const Loan = () => {
    useGetStatus();

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
