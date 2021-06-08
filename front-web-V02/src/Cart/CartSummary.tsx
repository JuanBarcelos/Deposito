import { formatPrice } from "../Orders/helpers";

type Props = {
  amount: number;
}

function CartSummary({amount}:Props){

const totalPrice = amount +5; 


  return (
      <div className="order-summary-container">
        <div className="order-summary-content">
          <div>
            <span className="amount-selected-container">
              <strong className="amount-selected">{formatPrice(amount)}</strong>
              VALOR TOTAL DOS PROTUDOS
            </span>
            <span className="amount-selected-container">
              <strong className="amount-selected">R$: 5,00</strong>
              TAXA DE ENTREGA
            </span>
            <span className="amount-selected-container">
              <strong className="amount-selected">{formatPrice(totalPrice)}</strong>
              VALOR TOTAL DO PEDIDO
            </span>
          </div>
          <button className="order-summary-make-order">ENVIAR PEDIDO</button>
        </div>
      </div>
  )
}

export default CartSummary;