import axios from "axios";

const API_URL = 'https://deposito-dois-irmaos.herokuapp.com';

export function fetchOrders(){
  return axios(`${API_URL}/orders`)
}

export function confirmeDelivery(orderId : number){
    return axios.put(`${API_URL}/orders/${orderId}/delivered`);
}