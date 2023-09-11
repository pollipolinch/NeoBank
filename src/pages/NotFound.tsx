import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { NotFoundPage } from '../components/NotFoundPage/NotFoundPage';
import { LoaderCom } from '../components/CompMini/Loader/LoaderCom';
import { useAppSelector } from '../utils/hooks/useRedux';

const NotFound = () => {
    const { loader } = useAppSelector((store) => store.cardSlice);

    if (loader) {
        return <LoaderCom />;
    }
    return (
        <>
            <div>
                <Header />
                <NotFoundPage />
                <Footer />
            </div>
        </>
    );
};
export default NotFound;
