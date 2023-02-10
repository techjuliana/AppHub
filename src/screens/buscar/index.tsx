import { Container, Logo } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TextoPrincipal } from "../../components/TextoPrincipal";
import Git from "./../../assets/git.png";
import { useNavigation } from "@react-navigation/native";

import React from "react";
export function Buscar() {

  const { navigate } = useNavigation();
  function handlePesquisar() {
    navigate("Users");
  }

  return (
    <Container>
      <Logo source={Git} />
      <TextoPrincipal
        title="Buscar usuário"
        subtitle="Crie sua conta através do seu usuário
do GitHub"
      />
      <Input placeholder="@username" />

      <Button title="Cadastrar" onPress={handlePesquisar} />
    </Container>
  );
}
