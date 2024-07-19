import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { ClientsProvider } from './context/clientsContext.jsx'
import Dashboard from './pages/dashboard.jsx'
import { LoansProvider } from './context/loansContext.jsx';
import ClientsPanel from './pages/clientsPanel.jsx';
import NewClient from './pages/newClient.jsx';

export default function App() {
    return (
        <ClientsProvider>
        <LoansProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/clients" element={<ClientsPanel />} />
                    <Route path='/newclient' element={<NewClient/>}/>
                </Routes>
            </BrowserRouter>
            </LoansProvider>
        </ClientsProvider>
    );
}