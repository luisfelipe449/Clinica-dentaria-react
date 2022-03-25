import React from "react";

const ListaSobre = (props) => {
    return (
        <li>
        <h3>{props.titulo}</h3>
        <p>
          {props.descricao}
        </p>
      </li>
    )
}
export default ListaSobre;