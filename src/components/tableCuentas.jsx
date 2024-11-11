import { DataGrid } from '@mui/x-data-grid';
import {Paper} from '@mui/material';

export default function TableCuentas({ cuentas }) {
    const columns = [
        { field: 'client', headerName: 'Cliente', width: 250 },
        { field: 'type', headerName: 'Tipo', width: 150 },
        { field: 'amount', headerName: 'Monto', width: 150 },
        { field: 'guarantor', headerName: 'Aval', width: 250 },
        { field: 'weeklyMount', headerName: 'Pago sem', width: 150 },
        { field: 'startDate', headerName: 'Fecha inicio', width: 150 },
        { field: 'endDate', headerName: 'Fecha fin', width: 150 },
    ];

    // eslint-disable-next-line react/prop-types
    const rows = cuentas.map((cuenta) => ({
        id: cuenta._id,
        client: cuenta.client.name+' '+cuenta.client.lastname,
        type: cuenta.loanType,
        amount: cuenta.amount,
        guarantor: cuenta.guarantor.name+' '+cuenta.guarantor.lastname,
        weeklyMount: cuenta.weeklyMount,
        //mostar fecha en formato dd/mm/yyyy
        startDate: new Date(cuenta.startDate).toLocaleDateString(),
        endDate: new Date(cuenta.endDate).toLocaleDateString()
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