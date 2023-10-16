import { approveModal, showModal } from '../../../utils/store/cardSlice';
import { useAppDispatch } from '../../../utils/hooks/useRedux';
import style from './modal.module.css';

export const ModalContentFirst = () => {
    const dispatch = useAppDispatch();
    const openSecondModal = () => {
        dispatch(showModal(false));
        dispatch(approveModal(true));
    };
    const closeModal = () => {
        dispatch(showModal(false));
    };
    return (
        <div>
            <div className={style.modal_container}>
                <h5 className={style.title}>Deny application</h5>
                <span className={style.cross} onClick={closeModal}></span>
            </div>
            <p className={style.text}>
                You exactly sure, you want to cancel this application?
            </p>
            <div className={style.buttons}>
                <button onClick={openSecondModal} className={style.button_deny}>
                    Deny
                </button>
                <button className={style.button_cancel} onClick={closeModal}>
                    Cancel
                </button>
            </div>
        </div>
    );
};
