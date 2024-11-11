import {getPaymentsbyLoan, } from '../api/api';
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import TablePayments from '../components/tablePayments';

export default function LoansPayments() {
    //obtenemos el id del parametro de la url
    const { id } = useParams();
    const [payments, setPayments] = useState([]);
    
    const getPayments = async (id) => {
        try {
            const response = await getPaymentsbyLoan(id);
            console.log(response.data);
            setPayments(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getPayments(id);
    }, [id]);

    return (
       <>
        <div>
            <h1>Payments</h1>
            <p>Here you can see the payments of the loans</p>
        </div>
        <div>
            <h2>
                Cliente: {payments[0]?.loan.client.name} {payments[0]?.loan.client.lastname}
            </h2>
            <h2>
            Total: {payments[0]?.loan.total}
            </h2>
        </div>
        <div>
            <TablePayments payments={payments} />
        </div>
       </>
    )
}