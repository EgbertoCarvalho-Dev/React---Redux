import React from "react";
import If, { Else } from "./If";

export default (props) => {
  const usuario = props.usuario || {};
  return (
    <div>
      {/*
      <If test={usuario && usuario.nome}>
        Seja bem vindo <b>{usuario.nome}</b>!
      </If>
      <If test={!usuario || !usuario.nome}>
        Seja bem vindo <b>Amigão</b>!
  </If>*/}
      {
        <If test={usuario && usuario.nome}>
          Seja bem vindo <b>{usuario.nome}</b>
          <Else>
            Seja bem vindo <b>Amigão</b>!
          </Else>
        </If>
      }
    </div>
  );
};
