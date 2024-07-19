import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

export default function TableClients({ clients }) {
    const columns = [
        { field: 'name', headerName: 'Nombre', width: 150 },
        { field: 'lastname', headerName: 'Apellido', width: 150 },
        { field: 'address', headerName: 'Direccion', width: 200 },
        { field: 'phone', headerName: 'Telefono', width: 150 },
    ];

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
