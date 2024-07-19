import { createContext, useContext, useState } from "react";
import { getClients,getClient,createClient,updateClient } from "../api/api";

const ClientsContext = createContext();

export const useClients = () => {
    const context = useContext(ClientsContext);
    if (!context) {
        throw new Error('useClients must be used within a ClientsProvider');
    }
    return context;
}

export const ClientsProvider = ({ children }) => {
    const [clients, setClients] = useState([]);

    const getClientsList = async () => {
        try {
            const response = await getClients();
            console.log(response.data);
            setClients(response.data);
        }catch (error) {
            console.error(error);
        }
    }

    const getClientById = async (id) => {
        try {
            const response = await getClient(id);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    const addClient = async (client) => {
        try {
            const response = await createClient(client);
            setClients([...clients, response.data]);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const updateClientById = async (id, client) => {
        try {
            const response = await updateClient(id, client);
            setClients(clients.map(c => c.id === id ? response.data : c));
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <ClientsContext.Provider value={{ 
            clients,
            getClientsList, 
            getClientById, 
            addClient, 
            updateClientById }}>
            {children}
        </ClientsContext.Provider>
    );
}