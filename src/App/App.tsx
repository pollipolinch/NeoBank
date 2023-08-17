import { Routes, Route } from 'react-router-dom';
import Main from '../pages/main/Main';
import Loan from '../pages/loan/Loan';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/loan" element={<Loan />} />
            </Routes>
        </>
    );
}

export default App;
