import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { SignContent } from '../../components/SignPage/SignContent';
import { useParams } from 'react-router-dom';
import NotFound from '../notFound/NotFound';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/useRedux';
import { getStatus } from '../../utils/store/cardSlice';
import { AppStatus } from '../../utils/types/types';
import { LoaderCom } from '../../components/CompMini/Loader/LoaderCom';

const SignPage = () => {
    const { status, loader } = useAppSelector((store) => store.cardSlice);
    const { applicationId } = useParams();
    const dispatch = useAppDispatch();
    const offers = JSON.parse(localStorage.getItem('offers')!);
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
        status !== AppStatus.DOCUMENT_CREATED
    ) {
        return <NotFound />;
    }

    return (
        <>
            <div>
                <Header />
                <SignContent />
                <Footer />
            </div>
        </>
    );
};
export default SignPage;
