import { ClipLoader } from 'react-spinners';
import style from './loader.module.css';

export const LoaderCom = () => {
    return <ClipLoader className={style.loader} color={'#B4387A'} size={100} />;
};
