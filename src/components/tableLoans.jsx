import { DataGrid } from '@mui/x-data-grid';
import {Paper} from '@mui/material';
import BotonesLoans from '../components/botonesLoans';
import {useNavigate} from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function TableLoans({ loans }) {
    const navigate = useNavigate();

    const handlePaid = (id) => {
        console.log('Pagando prestamo con id:', id);
    }

    const handleView = (id) => {
        //redireccionar a la pagina de pagos
        navigate(`/payments/${id}`);
    }
    const columns = [
        { field: 'client', headerName: 'Cliente', width: 150 },
        { field: 'amount', headerName: 'Monto', width: 150 },
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

    // eslint-disable-next-line react/prop-types
    const rows = loans.map((loan) => ({
        id: loan._id,
        client: loan.client.name+' '+loan.client.lastname,
        amount: loan.amount,
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