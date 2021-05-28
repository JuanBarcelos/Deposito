import { formatPrice } from "./helpers";
import { Link } from 'react-router-dom';
import { Product } from "./Types";

type Props = {
  amount: number;
  totalPrice: number;
  onSubmit: () => void;
}

function OrderSummary({amount, totalPrice, onSubmit}:Props){
  return(
    <div className="order-summary-container">
      <div className="order-summary-content">
          <div>
            <span className="amount-selected-container">
              <strong className="amount-selected">{amount}</strong>
              PEDIDOS SELECIONADOS
            </span>
            {/*
                <span className="amount-selected-container">
                <strong className="amount-selected">R$: 5,00</strong>
                ESTE E O NOSSO VALOR DA ENTREGA
              </span>
              <span className="order-summary-total">
                <strong className="amount-selected">{formatPrice(totalPrice)}</strong>
                VALOR TOTAL
              </span>
              </div>
              <button className="order-summary-make-order"onClick={onSubmit}>FAZER PEDIDO</button>
              */
            }
            </div>
            <Link to="/cart" onClick={() => onSubmit() }  className="order-summary-make-order">VER CARRINHO</Link>
      </div>
    </div>
  )
}

export default OrderSummary;

