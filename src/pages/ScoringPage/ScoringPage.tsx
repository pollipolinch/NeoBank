import { useEffect } from 'react';
import { useAppDispatch } from '../../utils/hooks/useRedux';
import { getStatus } from '../../utils/store/cardSlice';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { ScoringTable } from '../../components/Scoringpage/ScoringTable';
import { useParams } from 'react-router-dom';
import NotFound from '../notFound/NotFound';
import { useAppSelector } from '../../utils/hooks/useRedux';
import { AppStatus } from '../../utils/types/types';
import { LoaderCom } from '../../components/CompMini/Loader/LoaderCom';

const ScoringPage = () => {
    const { status, loader } = useAppSelector((store) => store.cardSlice);
    const { applicationId } = useParams();
    const offers = JSON.parse(localStorage.getItem('offers')!);
    const dispatch = useAppDispatch();
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
        (status !== AppStatus.CC_APPROVED &&
            status !== AppStatus.APPROVED &&
            status !== AppStatus.CC_DENIED)
    ) {
        return <NotFound />;
    }

    return (
        <>
            <div>
                <Header />
                <ScoringTable />
                <Footer />
            </div>
        </>
    );
};
export default ScoringPage;
