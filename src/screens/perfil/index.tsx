import { Container } from "./styles";
import { TextoPrincipal } from "../../components/TextoPrincipal";
import React from "react";
import { Text } from "react-native";
import { Sair } from "../../components/sair";
import { useRoute } from "@react-navigation/native";
import { UserDTO } from "../../dtos/UserDTO";

interface Params {
  user: UserDTO;
}

export function Perfil() {
  const route = useRoute();
  const {user} = route.params as Params;

  return (
    <Container>
      <Container>
        <TextoPrincipal
          title='nome'
          subtitle='username'
        />
       <Text>bio</Text>
       <Sair/>
      </Container>
    </Container>
  );
}
