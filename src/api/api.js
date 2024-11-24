import axios from './axios';

export const getClients = async () => axios.get(`/clients`);

export const getClient = async (id) => axios.get(`/clients/${id}`);

export const createClient = async (client) => axios.post(`/clients/register`, client);

export const updateClient = async (id, client) => axios.put(`/clients/${id}`, client);


export const getLoans = async () => axios.get(`/loans`);

export const getLoan = async (id) => axios.get(`/loans/${id}`);

//export const getLoansByClient = async (clientId) => axios.get(`/loans/${clientId}/loans`);

export const getLoanPayments = async (loanId) => axios.get(`/loans/${loanId}/payments`);

export const getLoanbyType = async (type) => axios.get(`/loans/type/${type}`);

export const createLoan = async (loan) => axios.post(`/loans`, loan);

export const updateLoan = async (id, loan) => axios.put(`/loans/${id}`, loan);


export const getPaymentsbyLoan = async (loanId) => axios.get(`/weeklyPayments/${loanId}`);

export const paidWeekly = async (loanId, body) => axios.put(`/weeklyPayments/${loanId}/pay`, body);

export const getPaymentsExpirated = async () => axios.get(`/loans/payments/latePayments`);