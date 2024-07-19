import { useClients } from "../context/clientsContext";
import { useEffect } from "react";
import TableClients from "../components/tableClients";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function ClientsPanel() {
  const { clients, getClientsList } = useClients();
  useEffect(() => {
    getClientsList();
  }, []);

  return (
    <div>
      <div className="flex justify-around items-center">
        <div>
          <h1>Clientes</h1>
          <p>Bienvenido al panel de clientes</p>
        </div>
        <div>
          <Link to="/newclient" style={{ textDecoration: "none" }}>
            <Button color="secondary" variant="outlined">
              Nuevo cliente
            </Button>
          </Link>
        </div>
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
