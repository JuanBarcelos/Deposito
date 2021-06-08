function StepsHeader(){
  return (
    <header className="orders-steps-container">
      <div className="orders-steps-content">
        <h1 className="steps-title">
            SIGA AS <br/> ETPAS
        </h1>
        <ul className="steps-items">
          <li>
            <span className="steps-number">1</span>
            Selecione os produtos.
          </li>
          <li>
            <span className="steps-number">2</span>
            Selecione a quantidade dos produtos.
          </li>
          <li>
            <span className="steps-number">3</span>
            Infor-me seu endereço.
          </li>
          <li>
            <span className="steps-number">4</span>
            Depois clique em <strong>"ENVIAR PEDIDO"</strong>
          </li>
        </ul>
      </div>

    </header>
  )

}


export default StepsHeader;