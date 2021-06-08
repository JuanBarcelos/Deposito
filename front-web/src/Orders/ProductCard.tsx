import { formatPrice } from './helpers';
import { Product } from './Types';
import { useState } from 'react';


type Props = {
  product: Product;
  onSelectProduct: (product: Product) => void;
  isSelected: boolean;
}

function ProductCard({product, onSelectProduct, isSelected}:Props){
 
  const [quantidade,setQuantidade]=useState(0);

  const addQuantidade = () =>{
   setQuantidade(product.quantidade++)
  }
      
  
  const removeQuantidade = () =>{
    if(product.quantidade <= 1){
      alert("Você precisa pedir ao menos uma unidade de cada produto.")
      setQuantidade(product.quantidade)
    }else{
      setQuantidade(product.quantidade--)
    }    
  }
 
  return (
    <div className={`order-card-container ${isSelected ? 'selected' : ''} `} 
    onClick={()=>onSelectProduct(product)}>

        <h3 className="order-card-title"> {product.name}</h3>
        <img src={product.imageUri} className="order-card-image" alt={product.name} />
        <h3 className="order-card-price"> {formatPrice(product.price)}</h3>

        <div className="order-card-description">
           <h3>Quantidade</h3>
              <a onClick={addQuantidade} className="card-btn-order">+</a>
                <h3>{product.quantidade}</h3>
              <a onClick={removeQuantidade} className="card-btn-order">-</a>    
        </div>
    </div>
  )
}


export default ProductCard;