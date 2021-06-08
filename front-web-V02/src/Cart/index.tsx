import './style.css';
import React, { useEffect, useState } from "react";
import { Product } from "../Orders/Types";
import { fetchProducts } from '../api';
import CartList from './CartList';
import Footer from '../Footer';
import StepsHeader from '../Orders/StepsHeader';
import CartSummary from './CartSummary';



function Cart(){ 

  
   const valueLocation = JSON.parse(localStorage.getItem("deposito") || "[]");
   const [products, setProducts] = useState<Product[]>([]);
   const [product, setProduct] = useState<Product[]>([]);
   
   const totalPrice = products.reduce((sum, item)=>{
    return sum + item.price;
  },0);

const i = products.some(item => item.id)

const is = () => {
  console.log(i)
}



useEffect(() => {
  if(valueLocation.length !== 0){
    setProducts(valueLocation)
  }
}, []);


  return (
    <>
      <div className="orders-container">
        <StepsHeader />
        <CartList products={products} />
        <CartSummary amount = {totalPrice}/>

        <button onClick={is}> TESTE</button>
      </div>
      <Footer />
    </>
  )
}


export default Cart;