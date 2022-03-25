import React from "react";

const CardsClientes = (props) => {
    return (
          <li>
            <img className="img-aparelho" src={props.imagemCard} alt="Cliente" title="Cliente"/>
            <p>{props.nomeCliente}</p>
            <p>{props.depoimento}</p>
          </li>
    )
}
export default CardsClientes;