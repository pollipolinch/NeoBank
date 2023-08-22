import { Routes, Route } from 'react-router-dom';
import Main from '../src/pages/main/Main';
import Loan from '../src/pages/loan/Loan';

export const Routs = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/loan" element={<Loan />} />
            </Routes>
        </>
    );
};
