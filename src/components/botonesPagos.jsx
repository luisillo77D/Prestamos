import { useState } from "react";
import { Button } from "@mui/material";

export default function BotonesPagos({ initialIsPaid, onPaid, id, body }) {
  const [isPaid, setIsPaid] = useState(initialIsPaid);

  const handlePaid = () => {
    const confirmed = window.confirm("¿Estás seguro de que deseas realizar el pago?");
    if (confirmed) {
      onPaid(id, body);
      setIsPaid(true);
      alert("Pago realizado con éxito.");
    } else {
      alert("Pago cancelado.");
    }
  };

  return (
    <div>
      {isPaid ? (
        <Button style={{ backgroundColor: "green", color: "white" }}>
          Pagado
        </Button>
      ) : (
        <Button style={{ backgroundColor: "red", color: "white" }} onClick={handlePaid}>
          Pagar
        </Button>
      )}
    </div>
  );
}
