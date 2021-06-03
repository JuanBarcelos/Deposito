import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../Orders/Types";
import CartCard from "./CartCard";

type Props = {
  products: Product[];
}


function CartList({products}:Props){

 
 
const limparCart = () => {
   localStorage.removeItem("deposito");
}

  return (
    <div className="cart-list-container">
      <div className="cart-list-containerButton">
          <Link to="/orders" onClick={limparCart} className="cart-list-button" > Limpar carriho</Link>
      </div>
      <div className="cart-list-items">
          {
            products.map(product => (
              <CartCard key={product.id} product={product}/>
            )) 
            
          }
      </div>

    </div>
  )
}


export default CartList;