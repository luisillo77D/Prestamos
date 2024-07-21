import { Button } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function BotonesClientes({ id, onEdit, onDelete })  {
    
    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                onClick={() => onEdit(id)}
                style={{ marginRight: '10px' }}
            >
                Editar
            </Button>
            <Button
                variant="contained"
                color="error"
                onClick={() => onDelete(id)}
            >
                Eliminar
            </Button>
        </div>
    );
}