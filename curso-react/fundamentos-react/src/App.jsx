import "./App.css";
import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import NumeroAleatorio from "./components/basicos/NumeroAleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";

export default (_) => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Cards">
        <Card titulo="08 - Renderização Condicional" color="#982395">
          <ParOuImpar numero="21" />
          <UsuarioInfo usuario={{ nome: "Egberto " }} />
          <UsuarioInfo usuario={{ email: "fer@nando.com" }} />
        </Card>
        <Card titulo="#06 (Exercicio) - Repetição" color="#3A9AD9">
          <TabelaProdutos />
        </Card>
        <Card titulo="#06 - Repetição" color="#FF4C65">
          <ListaAlunos></ListaAlunos>
        </Card>
        <Card titulo="#05 - Componente com filhos" color="#00C8F8">
          <Familia sobrenome="Silva">
            <FamiliaMembro nome="Pedro" />
            <FamiliaMembro nome="Ana" />
            <FamiliaMembro nome="Gustavo" />
          </Familia>
        </Card>
        <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
          <NumeroAleatorio min={1} max={60} />
        </Card>
        <Card titulo="#03 - Fragmento" color="#E94C6F">
          <Fragmento />
        </Card>
        <Card titulo="#02 - Com Parametro" color="#E8B71A">
          <ComParametro
            titulo="Segundo Componente"
            aluno="Pedro Silva"
            nota={9.3}
          />
        </Card>

        <Card titulo="#01 - Primeiro Componente" color="#588C73">
          <Primeiro />
        </Card>
      </div>
    </div>
  );
};
