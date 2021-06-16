import { formatPrice } from './helpers';
import { Product } from './Types';
import { useState } from 'react';
<<<<<<< HEAD
import { alterarQuantidade } from '../api';
=======
import { saveProduct } from '../api';
>>>>>>> d24506b8e8299cc4c423427552aa5c4f79ef681a


type Props = {
  product: Product;
  onSelectProduct: (product: Product) => void;
  isSelected: boolean;
}

function ProductCard({product, onSelectProduct, isSelected}:Props){
 
<<<<<<< HEAD
  const [quantidade,setQuantidade]=useState(3);

  const addQuantidade = () =>{
   setQuantidade(product.quantidade++)
=======
  const [quantidade,setQuantidade]=useState(product.quantidade);

  const addQuantidade = () =>{
   setQuantidade(product.quantidade++)
   saveProducts()
>>>>>>> d24506b8e8299cc4c423427552aa5c4f79ef681a
  }
      
  
  const removeQuantidade = () =>{
    if(product.quantidade <= 1){
      alert("Você precisa pedir ao menos uma unidade de cada produto.")
      console.log(quantidade)
      setQuantidade(product.quantidade)
    }else{
      setQuantidade(product.quantidade--)
      saveProducts()
    }    
  }
 
<<<<<<< HEAD
const alterQuantidade = () =>{
    alterarQuantidade(product.id,product).then((response) => {
      console.log(`Quantidade alterada com sucesso! Nº ${response.data.quantidade}`);
    })
      .catch(() => {
        console.log('Erro ao enviar pedido'+quantidade);
      })
}

=======
const saveProducts = () => {
  const newProduct = {
    id: product.id,
    name: product.name,
    price: product.price,
    imageUri: product.imageUri,
    quantidade: product.quantidade
  }

    saveProduct(newProduct.id, newProduct).then((response) => {
        console.log(`producto atalizado com sucesso ${response.data}`);
    })
    .catch(() => {
      console.log("Erro ao atualizar o produto");
    })
}



>>>>>>> d24506b8e8299cc4c423427552aa5c4f79ef681a
  return (
    <div className={`order-card-container ${isSelected ? 'selected' : ''} `} 
    onClick={()=>onSelectProduct(product)}>

        <h3 className="order-card-title"> {product.name}</h3>
        <img src={product.imageUri} className="order-card-image" alt={product.name} />
        <h3 className="order-card-price"> {formatPrice(product.price)}</h3>

        <div className="order-card-description">
           <h3>Quantidade</h3>
              <button onClick={alterQuantidade} className="card-btn-order">+</button>
                <h3>{product.quantidade}</h3>
              <button onClick={removeQuantidade} className="card-btn-order">-</button>    
        </div>
    </div>
  )
}


export default ProductCard;