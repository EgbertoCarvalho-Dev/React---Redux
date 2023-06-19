import React from "react";

export default (props) => {
  return (
    <div>
      <label htmlFor="qtyNumbers">Quantidade de Números</label>
      <br />
      <input
        id="qtyNumbers"
        type="number"
        value={props.valor}
        onChange={(e) => props.setNumber(+e.target.value)}
      ></input>
    </div>
  );
};
