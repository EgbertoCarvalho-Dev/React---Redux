import React from "react";
import "./TabelaProdutos.css";

import produtos from "../../data/produtos";
export default (props) => {
  let total = 0;
  const li = produtos.map((produto, i) => {
    total = total + parseFloat(produto.valor);
    return (
      <tr key={produto.id} className={i % 2 === 0 ? "Par" : "Impar"}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(produto.valor)}
        </td>
      </tr>
    );
  });
  {
    total = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(total);
  }
  return (
    <table className="TableContent">
      <thead>
        <tr>
          <th>#</th>
          <th>Produto</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {li}
        <tr>
          <td colSpan="2">Total</td>
          <td>{total}</td>
        </tr>
      </tbody>
    </table>
  );
};
