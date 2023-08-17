import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CreditCardSection from "../../components/loanpage/creditCard/CreditCardSection";
import CarouselSection from "../../components/loanpage/caurousel/CarouselSection"
import GetCardSection from "../../components/loanpage/getCard/GetCardSection";


const Loan = () => {
  return (
    <>
      <div>
        <Header />
        <CreditCardSection />
        <CarouselSection/>
        <GetCardSection/>
        <Footer/>
      </div>
    </>
  );
}
export default Loan;