import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Loan from './pages/Loan';
import NotFound from './pages/NotFound';
import ScoringPage from './pages/ScoringPage';
import PaymentPage from './pages/PaymentPage';
import SignPage from './pages/SignPage';
import CodePageContent from './pages/CodePage';

export const Routs = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/loan" element={<Loan />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/loan/:applicationId" element={<ScoringPage />} />
                <Route
                    path="/loan/:applicationId/document"
                    element={<PaymentPage />}
                />
                <Route
                    path="/loan/:applicationId/document/sign"
                    element={<SignPage />}
                />
                <Route
                    path="/loan/:applicationId/code"
                    element={<CodePageContent />}
                />
            </Routes>
        </>
    );
};
