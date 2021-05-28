import React from "react";
import { Product } from "../Orders/Types";
import CartCard from "./CartCard";

type Props = {
  products: Product[];
}

function CartList({products}:Props){
  return (
    <div className="cart-list-container">
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