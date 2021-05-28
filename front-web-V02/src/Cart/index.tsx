import './style.css';
import React, { useEffect, useState } from "react";
import { Product } from "../Orders/Types";
import { fetchProducts } from '../api';
import CartList from './CartList';



function Cart(){ 

  
   const valueLocation = JSON.parse(localStorage.getItem("deposito") || "[]");
   const [products, setProducts] = useState<Product[]>([]);

useEffect(() => {
  if(valueLocation.length !== 0){
    setProducts(valueLocation)
  }
}, []);


  return (
    <>
        <CartList products={products} />
    </>
  )
}


export default Cart;