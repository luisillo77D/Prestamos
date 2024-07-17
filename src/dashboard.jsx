import { useClients } from "./context/clientsContext";
import { useLoans } from "./context/loansContext";
import { useEffect } from "react";

export default function Dashboard() {
    const { clients, getClientsList } = useClients();
    const { loans, getLoansList } = useLoans();
    useEffect(() => {
        getClientsList();
        getLoansList();
    }, []);
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard</p>
            <h2>Clients</h2>
            <ul>
                {clients.map(client => (
                    <li className="bg-slate-500 rounded-md w-24" key={client.id}>{client.name}</li>
                ))}
            </ul>
            <h2>Loans</h2>
            <ul>
                {loans.map(loan => (
                    <li className="bg-slate-500 rounded-md w-24" key={loan._id}>
                        {loan.client.name} - {loan.amount} - {new Date(loan.startDate).toISOString().split('T')[0]}
                    </li>
                ))}
            </ul>
        </div>
    );
    }