import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import NotFound from './NotFound';
import { PaymentShedule } from '../components/PaymentPage/PaymentShedule';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../utils/hooks/useRedux';
import Modal from '../components/CompMini/Modal/Modal';
import { ModalContentFirst } from '../components/CompMini/Modal/ModalContentFirst';
import { ModalContentSecond } from '../components/CompMini/Modal/ModalContentSecond';
import { AppStatus } from '../utils/types/types';
import { LoaderCom } from '../components/CompMini/Loader/LoaderCom';
import { useGetStatus } from '../utils/hooks/useGetStatus';

const PaymentPage = () => {
    const { modal, approveModal, status, loader } = useAppSelector(
        (store) => store.cardSlice
    );
    const { applicationId } = useParams();
    const offers = JSON.parse(localStorage.getItem('offers')!);
    const id = offers ? offers[0].applicationId : null;
    useGetStatus();

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
