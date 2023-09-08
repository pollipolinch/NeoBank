import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { CodePage } from '../../components/CodePage/CodePage';
import NotFound from '../notFound/NotFound';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/useRedux';
import { getStatus } from '../../utils/store/cardSlice';
import { AppStatus } from '../../utils/types/types';
import { LoaderCom } from '../../components/CompMini/Loader/LoaderCom';

const CodePageContent = () => {
    const dispatch = useAppDispatch();
    const { status, loader } = useAppSelector((store) => store.cardSlice);
    const { applicationId } = useParams();
    const offers = JSON.parse(localStorage.getItem('offers')!);
    const sign = JSON.parse(localStorage.getItem('postSign')!);
    const id = offers ? offers[0].applicationId : null;
    useEffect(() => {
        if (offers) {
            dispatch(getStatus(String(offers[0].applicationId)));
        }
    }, []);
    if (loader) {
        return <LoaderCom />;
    }
    if (
        (id && id !== Number(applicationId)) ||
        !id ||
        (status !== AppStatus.DOCUMENT_CREATED &&
            status !== AppStatus.CREDIT_ISSUED) ||
        !sign
    ) {
        return <NotFound />;
    }
    return (
        <>
            <div>
                <Header />
                <CodePage />
                <Footer />
            </div>
        </>
    );
};
export default CodePageContent;
