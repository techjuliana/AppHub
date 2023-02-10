import { Botao, Container, Logo } from "./styles";
import { Button } from "../Button";
import Git from "./../../assets/git.png";
import { useNavigation } from "@react-navigation/native";

import React from "react";
export function Header() {
  function handlePesquisar() {}

  return (
    <Container>
      <Logo source={Git} />
      <Botao>
      <Button title="Adicionar novo" onPress={handlePesquisar} />
      </Botao>
    </Container>
  );
}
