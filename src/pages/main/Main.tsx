import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { ChooseSection } from '../../components/Mainpage/Choose/ChooseSection';
import { FeaturesSection } from '../../components/Mainpage/Features/FeaturesSection';
import { ExchangeSection } from '../../components/Mainpage/Exchange/ExchangeSection';
import { NewsSection } from '../../components/Mainpage/News/NewsSection';
import { WorldSection } from '../../components/Mainpage/World/WorldSection';
import { SupportSection } from '../../components/Mainpage/Support/SupportSection';

const Main = () => {
    return (
        <>
            <div>
                <Header />
                <ChooseSection />
                <FeaturesSection />
                <ExchangeSection />
                <NewsSection />
                <WorldSection />
                <SupportSection />
                <Footer />
            </div>
        </>
    );
};
export default Main;
