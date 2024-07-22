import { DataGrid } from '@mui/x-data-grid';
import {Paper} from '@mui/material';
import BotonesLoans from '../components/botonesLoans';

export default function TableLoans({ loans }) {

    const handlePaid = (id) => {
        console.log('Pagando prestamo con id:', id);
    }

    const handleView = (id) => {
        console.log('Viendo prestamo con id:', id);
    }
    const columns = [
        { field: 'client', headerName: 'Cliente', width: 150 },
        { field: 'amount', headerName: 'Monto', width: 150 },
        { field: 'interest', headerName: 'Interes', width: 150 },
        { field: 'total', headerName: 'Total', width: 150 },
        { field: 'guarantor', headerName: 'Aval', width: 150 },
        { field: 'weeklyMount', headerName: 'Pago sem', width: 150 },
        { field: 'startDate', headerName: 'Fecha inicio', width: 150 },
        { field: 'endDate', headerName: 'Fecha fin', width: 150 },
        {
            field: 'actions',
            headerName: 'Acciones',
            width: 200,
            renderCell: (params) => (
                <BotonesLoans id={params.row.id}
                onPaid={handlePaid}
                onView={handleView} />
            ),
        },
    ];

    const rows = loans.map((loan) => ({
        id: loan._id,
        client: loan.client.name+' '+loan.client.lastname,
        amount: loan.amount,
        interest: loan.interest,
        total: loan.total,
        guarantor: loan.guarantor.name+' '+loan.guarantor.lastname,
        weeklyMount: loan.weeklyMount,
        //mostar fecha en formato dd/mm/yyyy
        startDate: new Date(loan.startDate).toLocaleDateString(),
        endDate: new Date(loan.endDate).toLocaleDateString()
    }));

    return (
        <Paper style={{ height: 400, width: '100%' }}>
            <DataGrid columns={columns} rows={rows} initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
         />
        </Paper>
    );
}