import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { ClientsProvider } from './context/clientsContext.jsx'
import Dashboard from './pages/dashboard.jsx'
import { LoansProvider } from './context/loansContext.jsx';
import ClientsPanel from './pages/clientsPanel.jsx';

export default function App() {
    return (
        <ClientsProvider>
        <LoansProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/clients" element={<ClientsPanel />} />
                </Routes>
            </BrowserRouter>
            </LoansProvider>
        </ClientsProvider>
    );
}