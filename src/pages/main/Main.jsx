import Header from "../../components/header/Header";
import ChooseSection from "../../components/mainpage/choose/ChooseSection";
import FeaturesSection from "../../components/mainpage/features/FeaturesSection";
import ExchangeSection from "../../components/mainpage/exchange/ExchangeSection";
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
        <WorldSection/>
        <SupportSection/>
      </div>
    </>
  );
}
export default Main;