import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { ClientsProvider } from './context/clientsContext.jsx'
import Dashboard from './dashboard.jsx'
import { LoansProvider } from './context/loansContext.jsx';

export default function App() {
    return (
        <ClientsProvider>
        <LoansProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
            </LoansProvider>
        </ClientsProvider>
    );
}