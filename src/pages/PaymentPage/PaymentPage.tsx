import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import NotFound from '../notFound/NotFound';
import { PaymentShedule } from '../../components/PaymentPage/PaymentShedule';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/useRedux';
import { useEffect } from 'react';
import { getStatus } from '../../utils/store/cardSlice';
import Modal from '../../components/CompMini/Modal/Modal';
import { ModalContentFirst } from '../../components/CompMini/Modal/ModalContentFirst';
import { ModalContentSecond } from '../../components/CompMini/Modal/ModalContentSecond';
import { AppStatus } from '../../utils/types/types';
import { LoaderCom } from '../../components/CompMini/Loader/LoaderCom';

const PaymentPage = () => {
    const { modal, approveModal, status, loader } = useAppSelector(
        (store) => store.cardSlice
    );
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
            status !== AppStatus.DOCUMENT_CREATED)
    ) {
        return <NotFound />;
    }
    return (
        <>
            <div>
                <Header />
                <Modal active={modal}>
                    <ModalContentFirst />
                </Modal>
                <Modal active={approveModal}>
                    <ModalContentSecond />
                </Modal>
                <PaymentShedule />
                <Footer />
            </div>
        </>
    );
};
export default PaymentPage;
