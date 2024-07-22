import { Button } from "@mui/material";
import { useLoans } from "../context/loansContext";
import { useEffect, useState } from "react";

export default function BotonesClientsLoans({ id }) {
    const { getLoansByClientId } = useLoans();
    const [hasActiveLoan, setHasActiveLoan] = useState(false);

    // Hacemos la consulta al endpoint de préstamos por cliente
    useEffect(() => {
        async function fetchLoans() {
            const loans = await getLoansByClientId(id);
            console.log(loans);
            const activeLoan = loans.some(loan => !loan.paid);
            setHasActiveLoan(activeLoan);
        }
        fetchLoans();
    }, [id]); 

    return (
        <div>
            {hasActiveLoan ? (
                <Button
                    variant="contained"
                    color="success"
                    // onClick={() => onViewActiveLoan(id)}
                    style={{ marginRight: '10px' }}
                >
                    Ver prestamo
                </Button>
            ) : (
                <Button
                    variant="contained"
                    color="success"
                    // onClick={() => onNewLoan(id)}
                >
                    Nuevo Préstamo
                </Button>
            )}
        </div>
    );
}