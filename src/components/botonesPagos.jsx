import { Button } from "@mui/material";

export default function BotonesPagos({ isPaid }) {
  {
    return (
      <div>
        {isPaid ? (
          <Button style={{ backgroundColor: "green", color: "white" }}>
            Pagado
          </Button>
        ) : (
          <Button style={{ backgroundColor: "red", color: "white" }}>
            Pagar
          </Button>
        )}
      </div>
    );
  }
}
