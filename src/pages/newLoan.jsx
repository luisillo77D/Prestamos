import {
  FormControl,
  InputLabel,
  FilledInput,
  Button,
  TextField,
  Autocomplete,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useClients } from "../context/clientsContext";
import { useLoans } from "../context/loansContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function NewLoan() {
  const { addLoan } = useLoans();
  const { clients, getClientsList } = useClients();
  useEffect(() => {
    getClientsList();
  }, []);

  console.log(clients);
  const [client, setClient] = useState("");
  const [guarantor, setguarantor] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  //const [interest, setInterest] = useState("");
  const [startDate, setDate] = useState(dayjs());

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newLoan = {
      client,
      guarantor,
      type,
      amount,
      startDate,
    };
    console.log(newLoan);
    const res = await addLoan(newLoan);
    console.log(res);
  };

  const handleChange = (e) => {
    
    const { id, value } = e.target;
    switch (id) {
      case "amount":
        setAmount(value);
        break;
      default:
        break;
    }
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-1/2">
        <h1>Nuevo Préstamo</h1>
        <form onSubmit={handleSubmit}>
          <FormControl variant="filled" fullWidth margin="normal">
            <Autocomplete
              id="client"
              options={clients}
              getOptionLabel={(option) => option.name + " " + option.lastname}
              //asignar el valor del id del cliente al value del input
              getoptionselected={(option, value) => option._id === value._id}
              required
              //setea el valor del id del cliente cuando se selecciona un cliente y lo mostramos en la consola
              onChange={(event, newValue) => {
                setClient(newValue._id);
              }}
              renderInput={(params) => (
                <TextField {...params} label="Cliente" />
              )}
            />
          </FormControl>

          <FormControl variant="filled" fullWidth margin="normal">
            <InputLabel htmlFor="amount">Monto</InputLabel>
            <FilledInput
              id="amount"
              value={amount}
              onChange={handleChange}
              required
            />
          </FormControl>

          <FormControl variant="filled" fullWidth margin="normal">
            <Autocomplete
              id="guarantor"
              options={clients}
              getOptionLabel={(option) => option.name + " " + option.lastname}
              required
              onChange={(event, newValue) => {
                setguarantor(newValue._id);
              }}
              renderInput={(params) => (
                <TextField {...params} label="Aval" />
              )}
            />
          </FormControl>

          <FormControl variant="filled" fullWidth margin="normal">
            <Autocomplete
              id="type"
              options={[
                "Velza",
                "Nacional",
                "Lara",
                "Casa",
                "Toni",
                "Hugo"
              ]}
              required
              //setea el valor del id del cliente cuando se selecciona un cliente y lo mostramos en la consola
              onChange={(event, newValue) => {
                setType(newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} label="Tipo" />
              )}
            />
          </FormControl>

          <FormControl variant="filled" fullWidth margin="normal">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Fecha de inicio"
                required
                onChange={(newValue) => {
                    //parseamos la fecha a un formato que entienda el backend
                    newValue = newValue.format("YYYY-MM-DD")
                    newValue = dayjs(newValue).toDate()
                    console.log(newValue)
                    setDate(newValue)
                }}
              />
            </LocalizationProvider>
          </FormControl>

          <div className="flex justify-between">
            <Link to="/loans" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="secondary">
                Cancelar
              </Button>
            </Link>
            <Button type="submit" variant="contained" color="primary">
              Guardar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
