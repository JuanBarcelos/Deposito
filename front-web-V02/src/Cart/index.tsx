import './style.css';
import React, { useEffect, useState } from "react";
import { Product } from "../Orders/Types";
import { fetchProducts } from '../api';
import CartList from './CartList';


type Props = {

  onSubmit: () => void;
}




function Cart(){ 

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() =>{
    fetchProducts().then(Response => setProducts(Response.data))
    .catch(error => console.log(error))
  },[]);

  return (
    <>
        <CartList products={products} />
    </>
  )
}


export default Cart;