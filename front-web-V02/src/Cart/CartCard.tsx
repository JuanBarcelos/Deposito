import { useState } from "react";
import { formatPrice } from "../Orders/helpers";
import { Product } from "../Orders/Types";


  type Props = {
  product: Product;
}


function CartCard({product}:Props){ 

const [quantidade,setQauntidade] = useState(product.quantidade);
const [totalPrice,setTotalPrice] = useState(product.price);
const valueLocation = JSON.parse(localStorage.getItem("deposito") || "[]");
const [id, setID] = useState(product.id); 
const [products, setProducts] = useState<Product[]>([]);

const removeItens = () => {
  if(valueLocation.length != 0){
    for (let index = 0; index < valueLocation.length; index++) {
      const element = valueLocation[index];
      if(element.id != id){ 
        products.push(element)
      } 
    }
  }
  localStorage.setItem("deposito", JSON.stringify(products));
  window.location.reload();
}


const addQuantide = () => {
 setQauntidade(product.quantidade++);
setTotalPrice(product.price * product.quantidade)
}

const removeQuantidade = () => {
  if(product.quantidade <= 1){
    alert("Remova o produto do carrinho, você precisa pedir ao menos uma quantidade de cada produto.")
    setQauntidade(product.quantidade)
  }
  else{
    setQauntidade(product.quantidade--);
    setTotalPrice(product.price * product.quantidade)
  }
}


  return (
      <div className="cart-card-container">
        
        <img className="cart-card-image" src={product.imageUri} alt={product.name}/>
        
        <p className="cart-card-title">{product.name}</p>
        
        <h3 className="cart-card-price">{formatPrice(product.price)}</h3>
        
        <div className="cart-card-quantidade">
          <a onClick={addQuantide} className="cart-quantidade"> + </a>
            <h3 className="cart-card-quantidade">{product.quantidade}</h3>
          <a onClick={removeQuantidade} className="cart-quantidade"> - </a>  
        </div>

        <p className="cart-card-title">{formatPrice(totalPrice)}</p>
        
        <button onClick={removeItens} className="cart-card-excluir">
          <img src="https://img.icons8.com/ios/50/fa314a/delete-trash.png"/>
        </button>
      
      </div>
  )
}


export default CartCard;
