import { useClients } from "../context/clientsContext";
import { useEffect } from "react";
import TableClients from "../components/tableClients";

export default function ClientsPanel() {
    const { clients, getClientsList } = useClients();
    useEffect(() => {
        getClientsList();
    }, []);
    return (
        <div>
            <div>
                <h1>Clientes</h1>
                <p>Bienvenido al panel de clientes</p>
            </div>
            <div>
                <TableClients clients={clients} />
            </div>
            <div>
                <h2>Total de clientes: {clients.length}</h2>
            </div>
        </div>
    );
}