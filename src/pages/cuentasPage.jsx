import TableCuentas from "../components/tableCuentas";
import TableLoans from "../components/tableLoans";
import { useLoans } from "../context/loansContext";
import { useState, useEffect } from "react";

export default function CuentasPage() {
  const { loans, getPaymentsExpirated2,loading } = useLoans();
  const [cuentas, setCuentas] = useState([]);

  useEffect(() => {
   //mostar las cuentas
   const fetchPayments = async () => {
    await getPaymentsExpirated2();
  };

  fetchPayments();
  console.log(loans);
  setCuentas(loans);
  }, [loading]);

  return (
    <div>
      <div className="flex justify-around items-center">
        <div>
          <h1>Cuentas</h1>
          <p>Bienvenido al panel de Cuentas</p>
        </div>
      </div>
      
      <div>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <TableLoans loans={cuentas} />
        )}
      </div>
    </div>
  );
}
