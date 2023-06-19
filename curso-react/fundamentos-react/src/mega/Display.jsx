import React from "react";

export default (props) => {
  const numbers = props.numbers.map((number, i) => {
    return <b key={i}>{number} </b>;
  });
  return (
    <div>
      <h3>Gerador de Numero da MegaSena</h3>
      <hr />
      <h4>Números Gerados</h4>
      <p>{numbers}</p>
    </div>
  );
};
