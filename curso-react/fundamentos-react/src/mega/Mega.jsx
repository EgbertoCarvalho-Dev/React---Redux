import React from "react";
import funcoes from "./Funcoes";
import Botao from "./Botao";
import Form from "./Form";
import Display from "./Display";

export default class Mega extends React.Component {
  state = {
    quantidadeNumeros: this.props.numeroInicial || 6,
    numbers: funcoes(this.props.numeroInicial) || 6,
  };

  setQuantidadeNumeros = (e) => {
    this.setState({
      quantidadeNumeros: e,
    });
  };

  setNumbers = (e) => {
    this.setState({
      numbers: funcoes(this.state.quantidadeNumeros),
    });
  };

  render() {
    return (
      <div>
        <h2>Sugestão para Lotéricas</h2>
        <Display numbers={this.state.numbers} />
        <Form
          valor={this.state.quantidadeNumeros}
          setNumber={this.setQuantidadeNumeros}
        />
        <Botao gerarNumero={this.setNumbers} />
      </div>
    );
  }
}
