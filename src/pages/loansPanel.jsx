import { useLoans } from "../context/loansContext";
import TableLoans from "../components/tableLoans";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
export default function LoansPanel() {
  const { loans,getLoansList } = useLoans();
  console.log(loans);

  //hook para cargar los prestamos cuando no se encuentren en el contexto
   useEffect(() => {
       getLoansList();
   }, []);
  
  return (
    <div>
      <div className="flex justify-around items-center">
        <div>
          <h1>Prestamos</h1>
          <p>Bienvenido al panel de Prestamos</p>
        </div>
        <div>
          <Link to="/newloan" style={{ textDecoration: "none" }}>
            <Button color="secondary" variant="outlined">
              Nuevo Prestamo
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <TableLoans loans={loans} />
      </div>
    </div>
  );
}
