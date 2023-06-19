import React, { useState } from "react";
import DiretaFilho from "./IndiretaFilho";
import IndiretaFilho from "./IndiretaFilho";

export default (props) => {
  const [a, b] = [1, 2];
  const [nome, setNome] = useState("?");
  const [idade, setIdade] = useState(0);
  const [nerd, setNerd] = useState(false);
  //Nome idade Nerd
  function fornecerInformacoes(nome, idade, nerd) {
    setNome(nome);
    setIdade(idade);
    setNerd(nerd);

    console.log(nome, idade, nerd);
  }
  return (
    <div>
      <div>
        <span>{nome} </span>
        <span>
          <b>{idade} </b>
        </span>
        <span>{nerd ? "Verdadeiro" : "Falso"}</span>
      </div>
      <IndiretaFilho quandoClicar={fornecerInformacoes} />
    </div>
  );
};
