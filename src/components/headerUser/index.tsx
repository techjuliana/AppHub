import { Botao, Container, Logo } from "./styles";
import Git from "./../../assets/git.png";
import React from "react";
import { Button } from "../Button";
import { Linking } from "react-native";

export function HeaderUser() {
  return (
    <Container>
      <Logo source={Git} />
      <Botao>
        <Button title="Criar Conta"  onPress={() => {
                Linking.openURL('https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home');
              }} />
      </Botao>
    </Container>
  );
}
