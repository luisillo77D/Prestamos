import { useClients } from "../context/clientsContext";
import { useLoans } from "../context/loansContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";
//importamos la imagen
import loan from '../img/loan.png'
import customer from '../img/customer.png'

export default function Dashboard() {
    const { getClientsList } = useClients();
    const { loans, getLoansList } = useLoans();
    useEffect(() => {
        getClientsList();
        getLoansList();
    }, []);
    return (
        <div>
            <div>
                <h1>Dashboard</h1>
                <p>Welcome to the dashboard</p>
            </div>
            <div className=" flex gap-4 justify-around mt-6">
                <div className=" bg-slate-200 hover:scale-110 cursor-pointer rounded-md w-1/5 flex flex-col justify-center items-center">
                    <h2 className=" text-2xl font-bold">Clientes</h2>
                    <img src={customer} alt="customer" className="w-1/2"/>
                    <Link to="/clients">Ver clientes</Link>
                </div>
                <Link to="/loans" className=" bg-slate-200 hover:scale-110 cursor-pointer rounded-md w-1/5 flex flex-col justify-center items-center">
                    <h2 className=" text-2xl font-bold">Prestamos</h2>
                    <img src={loan} alt="loan" className="w-1/2"/>
                </Link>
            </div>
            <div className=" flex gap-4 justify-around mt-6">
                <Link className=" bg-slate-200 hover:scale-110 cursor-pointer rounded-md w-1/5 flex flex-col justify-center items-center">
                    Cuentas
                </Link>
            </div>
            <div>
                <h2>Total de prestamos: {loans.length}</h2>
            </div>
        </div>
    );
    }