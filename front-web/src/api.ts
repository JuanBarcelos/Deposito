import axios from "axios";
import { OrderPayload, Product } from "./Orders/Types";

const API_URL = process.env.REACT_APP_API_URL;
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

export function fetchProducts(){
  return axios(`${API_URL}/products`)
}

export function fetchLocalMapBox(local: string){
  return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}

export function saveOrder(payload: OrderPayload){
  return axios.post(`${API_URL}/orders`,payload);
}

<<<<<<< HEAD
export function alterarQuantidade(id: number, product: Product){
  return axios.put(`${API_URL}/products/${id}`,product);
=======
export function saveProduct(productID: number,product: Product){
  return axios.put(`${API_URL}/products/${productID}`, product)
>>>>>>> d24506b8e8299cc4c423427552aa5c4f79ef681a
}