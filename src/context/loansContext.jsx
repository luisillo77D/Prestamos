import { createContext, useContext, useState } from "react";
import { getLoans, getLoan, createLoan, updateLoan,getLoanbyType, getLoansByClient, getLoanPayments,paidWeekly } from "../api/api";

const LoansContext = createContext();

export const useLoans = () => {
    const context = useContext(LoansContext);
    if (!context) {
        throw new Error('useLoans must be used within a LoansProvider');
    }
    return context;
}

export const LoansProvider = ({ children }) => {
    const [loans, setLoans] = useState([]);

    const getLoansList = async () => {
        try {
            const response = await getLoans();
            setLoans(response.data);
        }catch (error) {
            console.error(error);
        }
    }

    const getLoanById = async (id) => {
        try {
            const response = await getLoan(id);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    const addLoan = async (loan) => {
        try {
            const response = await createLoan(loan);
            console.log(response.data);
            setLoans([...loans, response.data]);
            return response;
        } catch (error) {
            console.error(error.response.data.message);
        }
    }

    const updateLoanById = async (id) => {
        try {
            const response = await updateLoan(id);
            setLoans(loans.map(c => c.id === id ? response.data : c));
        } catch (error) {
            console.error(error);
        }
    }

    const getLoansByClientId = async (clientId) => {
        try {
            const response = await getLoansByClient(clientId);
            setLoans(response.data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    const getLoanPaymentsById = async (loanId) => {
        try {
            const response = await getLoanPayments(loanId);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    const getLoanByType = async (type) => {
        try {
            const response = await getLoanbyType(type);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    const PayWeekly = async (loanId, body) => {
        try {
            const response = await paidWeekly(loanId, body);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <LoansContext.Provider value={{ 
            loans,
            getLoansList, 
            getLoanById, 
            addLoan, 
            updateLoanById,
            getLoansByClientId,
            getLoanPaymentsById,
            getLoanByType,
            PayWeekly,
             }}>
            {children}
        </LoansContext.Provider>
    );
}