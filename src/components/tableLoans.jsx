import { DataGrid } from '@mui/x-data-grid';
import {Paper} from '@mui/material';

export default function TableLoans({ loans }) {
    const columns = [
        { field: 'client', headerName: 'Cliente', width: 150 },
        { field: 'amount', headerName: 'Monto', width: 150 },
        { field: 'interest', headerName: 'Interes', width: 150 },
        { field: 'total', headerName: 'Total', width: 150 },
        { field: 'guarantor', headerName: 'Aval', width: 150 },
        { field: 'weeklyMount', headerName: 'Pago sem', width: 150 },
        { field: 'startDate', headerName: 'Fecha inicio', width: 150 },
        { field: 'endDate', headerName: 'Fecha fin', width: 150 },
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