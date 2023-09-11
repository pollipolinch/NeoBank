import { useAppDispatch } from './useRedux';
import { getStatus } from '../store/cardSlice';
import { useEffect } from 'react';
export const useGetStatus = () => {
    const offers = JSON.parse(localStorage.getItem('offers')!);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (offers) {
            dispatch(getStatus(String(offers[0].applicationId)));
        }
    }, []);
};
