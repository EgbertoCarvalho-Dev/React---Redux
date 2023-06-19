import React from "react";

export default (props) => {
  return (
    <div>
      <span>{props.nome} </span>
      <span>
        <b>{props.idade} </b>
      </span>
      <span>{props.nerd ? "Verdadeiro" : "Falso"}!</span>
    </div>
  );
};
