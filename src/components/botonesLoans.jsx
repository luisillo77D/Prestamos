import { Button } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function BotonesLoans({ id, onPaid,onView })  {
    
    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                onClick={() => onPaid(id)}
                style={{ marginRight: '10px' }}
            >
                Pagar
            </Button>
            <Button
                variant="contained"
                color="error"
                onClick={() => onView(id)}
            >
                Ver
            </Button>
        </div>
    );
}