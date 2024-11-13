import TableCuentas from "../components/tableCuentas";
import { useLoans } from "../context/loansContext";
import { useState, useEffect } from "react";

export default function CuentasPage() {
  const { loans, getLoansList, getLoanByType } = useLoans();
  const [cuentas, setCuentas] = useState([]);
  const [loanType, setLoanType] = useState("");

  useEffect(() => {
    getLoansList();
  }, [getLoansList]);


  useEffect(() => {
    const fetchLoans = async () => {
      if (loanType) {
        try {
          const filteredLoans = await getLoanByType(loanType);
          setCuentas(filteredLoans);
        } catch (error) {
          console.error("Error fetching loans by type:", error);
        }
      } else {
        setCuentas(loans);
      }
    };

    fetchLoans();
  }, [loanType, getLoanByType]);

  const handleLoanTypeChange = (event) => {
    setLoanType(event.target.value);
  };

  return (
    <div>
      <div className="flex justify-around items-center">
        <div>
          <h1>Cuentas</h1>
          <p>Bienvenido al panel de Cuentas</p>
        </div>
      </div>
      <div>
        <label htmlFor="loanType">Selecciona el tipo de préstamo:</label>
        <select id="loanType" value={loanType} onChange={handleLoanTypeChange}>
          <option value="">Todos</option>
          <option value="casa">casa</option>
          <option value="velza">velza</option>
          <option value="lara">Automotriz</option>
        </select>
      </div>
      <div>
        <TableCuentas cuentas={cuentas} />
      </div>
    </div>
  );
}
