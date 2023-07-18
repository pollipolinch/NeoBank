import Header from "../../components/header/Header";
import ChooseSection from "../../components/mainpage/choose/ChooseSection";
import FeaturesSection from "../../components/mainpage/features/FeaturesSection";
import ExchangeSection from "../../components/mainpage/exchange/ExchangeSection";

const Main = () => {
  return (
    <>
      <div>
        <Header />
        <ChooseSection />
        <FeaturesSection/>
        <ExchangeSection/>
      </div>
    </>
  );
}
export default Main;