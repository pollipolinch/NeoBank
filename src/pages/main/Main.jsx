import Header from "../../components/header/Header";
import ChooseSection from "../../components/mainpage/choose/ChooseSection";
import FeaturesSection from "../../components/mainpage/features/FeaturesSection";
import ExchangeSection from "../../components/mainpage/exchange/ExchangeSection";
import WorldSection from "../../components/mainpage/world/WorldSection";

const Main = () => {
  return (
    <>
      <div>
        <Header />
        <ChooseSection />
        <FeaturesSection/>
        <ExchangeSection/>
        <WorldSection/>
      </div>
    </>
  );
}
export default Main;