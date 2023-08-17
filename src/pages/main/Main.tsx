import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ChooseSection from "../../components/mainpage/choose/ChooseSection";
import FeaturesSection from "../../components/mainpage/features/FeaturesSection";
import ExchangeSection from "../../components/mainpage/exchange/ExchangeSection";
import NewsSection from "../../components/mainpage/news/NewsSection";
import WorldSection from "../../components/mainpage/world/WorldSection";
import SupportSection from "../../components/mainpage/support/SupportSection";


const Main = () => {
  return (
    <>
      <div>
        <Header />
        <ChooseSection />
        <FeaturesSection/>
        <ExchangeSection/>
        <NewsSection/>
        <WorldSection/>
        <SupportSection/>
        <Footer/>
      </div>
    </>
  );
}
export default Main;