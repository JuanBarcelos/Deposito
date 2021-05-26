import { formatPrice } from "../Orders/helpers";
import { Product } from "../Orders/Types";
import {ReactComponent as Logo} from './logo.svg';
{
  /*
    type Props = {
  product: Product;
  onSelectProduct: (product: Product) => void;
  isSelected: boolean;
}
  */
}


function CartCard(){ 
  return (
    <div className="order-card-container">
      <h3 className="order-card-title">Produto</h3>
      <img className="order-card-image" src="./ousadia.png" alt="foto"/>
      <h3 className="order-card-price">Preço</h3>
      <div className="order-card-description">

      </div>
    </div>
  )
}


export default CartCard;

{
  /*
  {product, onSelectProduct, isSelected}:Props
<div className={`order-card-container ${isSelected ? 'selected' : ''} `} 
onClick={()=>onSelectProduct(product)}>

<h3 className="order-card-title"> {product.name}</h3>
    <img src={product.imageUri} className="order-card-image" alt={product.name} />
    <h3 className="order-card-price"> {formatPrice(product.price)}</h3>

    <div className="order-card-description">
           
    </div>


   
</div>
*/
}