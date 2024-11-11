import { useState } from "react";
import { Button } from "@mui/material";

export default function BotonesPagos({ initialIsPaid, onPaid, id, body }) {
  const [isPaid, setIsPaid] = useState(initialIsPaid);

  const handlePaid = () => {
    onPaid(id, body);
    setIsPaid(true);
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
