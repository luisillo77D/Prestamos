import { DataGrid } from '@mui/x-data-grid';
import { Paper } from '@mui/material';
import BotonesPagos from './botonesPagos';

// eslint-disable-next-line react/prop-types
export default function TablePayments({ payments }) {
    const columns = [
        { field: 'weekNumber', headerName: 'Semana', width: 150 },
        { field: 'dueDate', headerName: 'Fecha de pago', width: 150 },
        { field: 'amountDue', headerName: 'Pago sem', width: 150 },
        {
            field: 'actions',
            headerName: 'Acciones',
            width: 200,
            renderCell: (params) => (
                <BotonesPagos isPaid={params.row.paid} />
            ),
        }
    ];

    // eslint-disable-next-line react/prop-types
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