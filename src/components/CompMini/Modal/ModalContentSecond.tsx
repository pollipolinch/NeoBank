import { approveModal } from '../../../utils/store/cardSlice';
import { useAppDispatch } from '../../../utils/hooks/useRedux';
import { useNavigate } from 'react-router-dom';
import style from './modal.module.css';

export const ModalContentSecond = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const closeModal = () => {
        dispatch(approveModal(false));
        localStorage.removeItem('offers');
        navigate('/');
    };

    return (
        <div>
            <div className={style.modal_container}>
                <h5 className={style.title}>Deny application</h5>
                <span className={style.cross} onClick={closeModal}></span>
            </div>
            <p className={style.text}>Your application has been deny!</p>
            <div className={style.buttons}>
                <button onClick={closeModal} className={style.button_home}>
                    Go home
                </button>
            </div>
        </div>
    );
};
