

import { Botao, Container, Logo } from "./styles";
import Git from "./../../assets/git.png";


import React from "react";
export function HeaderUser() {
  function handlePesquisar() {}

  return (
    <Container>
      <Logo source={Git} />
      <Botao>
      {/* <Button title="Adicionar novo" onPress={handlePesquisar} /> */}
      </Botao>
    </Container>
  );
}