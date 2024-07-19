import { useState } from "react";
import { FormControl, InputLabel, FilledInput, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useClients } from "../context/clientsContext";

export default function NewClient() {
  const { addClient } = useClients();
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "name":
        setName(value);
        break;
      case "lastname":
        setLastname(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "phone":
        // Solo permite números y limita a 10 caracteres
        if (/^\d{0,10}$/.test(value)) {
          setPhone(value);
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newClient = { name, lastname, address, phone };
    await addClient(newClient);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-1/2">
        <h1>Nuevo Cliente</h1>
        <form onSubmit={handleSubmit}>
          <FormControl variant="filled" fullWidth margin="normal">
            <InputLabel htmlFor="name">Nombre</InputLabel>
            <FilledInput
              id="name"
              value={name}
              onChange={handleChange}
              required
            />
          </FormControl>

          <FormControl variant="filled" fullWidth margin="normal">
            <InputLabel htmlFor="lastname">Apellido</InputLabel>
            <FilledInput
              id="lastname"
              value={lastname}
              onChange={handleChange}
              required
            />
          </FormControl>

          <FormControl variant="filled" fullWidth margin="normal">
            <InputLabel htmlFor="address">Direccion</InputLabel>
            <FilledInput
              id="address"
              value={address}
              onChange={handleChange}
              required
            />
          </FormControl>

          <FormControl variant="filled" fullWidth margin="normal">
            <InputLabel htmlFor="phone">Telefono</InputLabel>
            <FilledInput
              id="phone"
              value={phone}
              onChange={handleChange}
              required
            />
          </FormControl>

          <div className="flex justify-between">
            <Link to="/clients" style={{ textDecoration: "none" }}>
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
