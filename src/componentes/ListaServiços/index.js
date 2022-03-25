import React from "react";

const ListaServicos = (props) => {
    return (
        <li>
        <img src={props.imagemServico} alt="logo" title="logo" />
        <p>{props.servicos}</p>
      </li>
    )
}
export default ListaServicos;