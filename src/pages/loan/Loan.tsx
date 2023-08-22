import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { CreditCardSection } from '../../components/Loanpage/CreditCard/CreditCardSection';
import { CarouselSection } from '../../components/Loanpage/Caurousel/CarouselSection';
import { GetCardSection } from '../../components/Loanpage/GetCard/GetCardSection';

const Loan = () => {
    return (
        <>
            <div>
                <Header />
                <CreditCardSection />
                <CarouselSection />
                <GetCardSection />
                <Footer />
            </div>
        </>
    );
};
export default Loan;
