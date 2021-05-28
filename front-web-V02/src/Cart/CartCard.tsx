import { formatPrice } from "../Orders/helpers";
import { Product } from "../Orders/Types";


  type Props = {
  product: Product;
}


function CartCard({product}:Props){ 
  return (
    <div className="cart-card-body">
      <div className="cart-card-container">
        <img className="cart-card-image" src={product.imageUri} alt={product.name}/>
        <h3 className="cart-card-title">{product.name}</h3>
        <h3 className="cart-card-price">{formatPrice(product.price)}</h3>
        <h3 className="cart-card-price">Preço: R$ 50,00</h3>   
      </div>
    </div>
  )
}


export default CartCard;
