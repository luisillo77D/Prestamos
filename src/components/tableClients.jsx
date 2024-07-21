import { DataGrid } from '@mui/x-data-grid';
import {Paper} from '@mui/material';
import BotonesClientes from './botonesClientes';
import BotonesClientsLoans from './botonesClientsLoans';
// eslint-disable-next-line react/prop-types
export default function TableClients({ clients }) {
    //handleEdit y handleDelete
    const handleEdit = (id) => {
        console.log('Editando cliente con id:', id);
    }

    const handleDelete = (id) => {
        console.log('Eliminando cliente con id:', id);
    }

    const columns = [
        { field: 'name', headerName: 'Nombre', width: 150 },
        { field: 'lastname', headerName: 'Apellido', width: 150 },
        { field: 'address', headerName: 'Direccion', width: 200 },
        { field: 'phone', headerName: 'Telefono', width: 150 },
        {
            field: 'actions',
            headerName: 'Acciones',
            width: 200,
            renderCell: (params) => (
                <BotonesClientes id={params.row.id}
                onEdit={handleEdit}
                onDelete={handleDelete} />
            ),
        },
        {
            field: 'actionsLoans',
            headerName: 'Prestamos',
            width: 200,
            renderCell: (params) => (
                <BotonesClientsLoans id={params.row.id}
                 />
            ),
        }
    ];
// eslint-disable-next-line react/prop-types
    const rows = clients.map((client) => ({
        id: client._id,
        name: client.name,
        lastname: client.lastname,
        address: client.address,
        phone: client.phone,
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
