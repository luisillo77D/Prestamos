import { createContext, useContext, useState } from "react";
import { getLoans, getLoan, createLoan, updateLoan,getLoanbyType, getLoanPayments,paidWeekly,getPaymentsExpirated } from "../api/api";

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
    const [loading, setLoading] = useState(false);


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

    const getPaymentsExpirated2 = async () => {
        setLoading(true);
        try {
            const response = await getPaymentsExpirated({ cache: "no-store" });
            setLoans(response.data);
            return response.data;
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <LoansContext.Provider value={{ 
            loans,
            getLoansList, 
            getLoanById, 
            addLoan, 
            updateLoanById,
            getLoanPaymentsById,
            getLoanByType,
            PayWeekly,
            getPaymentsExpirated2,
            loading,
             }}>
            {children}
        </LoansContext.Provider>
    );
}