import { DataGrid } from '@mui/x-data-grid';
import { Paper } from '@mui/material';

// eslint-disable-next-line react/prop-types
export default function TablePayments({ payments }) {
    const columns = [
        { field: 'weekNumber', headerName: 'Semana', width: 150 },
        { field: 'dueDate', headerName: 'Fecha de pago', width: 150 },
        { field: 'amountDue', headerName: 'Pago sem', width: 150 },
        {
            // mostramos un botón rojo si no se ha pagado o verde si ya se pagó
            field: 'actions',
            headerName: 'Acciones',
            width: 200,
            renderCell: (params) => (
                <div>
                    {params.row.paid ? (
                        <button
                            style={{ backgroundColor: 'green', color: 'white' }}
                        >
                            Pagado
                        </button>
                    ) : (
                        <button
                            style={{ backgroundColor: 'red', color: 'white' }}
                        >
                            Pagar
                        </button>
                    )}
                </div>
            ),
        }
    ];

    const rows = payments.map((payment) => ({
        id: payment._id,
        weekNumber: payment.weekNumber,
        dueDate: new Date(payment.dueDate).toLocaleDateString(),
        amountDue: payment.amountDue,
        paid: payment.paid 
    }));

    return (
        <Paper style={{ height: 1000, width: '100%' }}>
            <DataGrid columns={columns} rows={rows} initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 15 },
                },
            }}
            pageSizeOptions={[5, 10]}
            />
        </Paper>
    );
}