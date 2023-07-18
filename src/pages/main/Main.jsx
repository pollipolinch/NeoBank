import Header from "../../components/header/Header";
import ChooseSection from "../../components/mainpage/choose/ChooseSection";
import FeaturesSection from "../../components/mainpage/features/FeaturesSection";

const Main = () => {
  return (
    <>
      <div>
        <Header />
        <ChooseSection />
        <FeaturesSection/>
      </div>
    </>
  );
}
export default Main;