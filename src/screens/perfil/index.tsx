import { Container } from "./styles";
import { TextoPrincipal } from "../../components/TextoPrincipal";
import React from "react";
import { Text } from "react-native";
import { Sair } from "../../components/sair";
export function Perfil() {
  return (
    <Container>
      <Container>
        <TextoPrincipal
          title="nome user"
          subtitle="@user"
        />
       <Text>Bio</Text>
       <Sair/>
      </Container>
    </Container>
  );
}
