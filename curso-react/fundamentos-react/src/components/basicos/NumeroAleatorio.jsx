import React from "react";

export default (props) => {
  let min = Math.ceil(props.min);
  let max = Math.floor(props.max);
  let number = Math.floor(Math.random() * (max - min) + min);
  return (
    <div>
      <h2>Valor Aleatório</h2>
      <p>
        Valor Mínimo: {min}
        <br />
        Valor Máximo: {max}
        <br />O número aleatório informado é: {number}
      </p>
    </div>
  );
};
