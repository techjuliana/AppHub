import * as S from "./styles";
import { TextoPrincipal } from "../../components/TextoPrincipal";
import React from "react";
import { Text } from "react-native";
import { Sair } from "../../components/sair";
import { useRoute } from "@react-navigation/native";
import { UserDTO } from "../../dtos/UserDTO";
import { UserPerfil } from "../../components/users/styles";

interface Params {
  user: UserDTO;
}

export function Perfil() {
  const route = useRoute();
  const { user } = route.params as Params;

  return (
    <S.Container>
      <S.Container>
        <S.Lado>
          <UserPerfil
            style={{ width: 90, height: 90, borderRadius: 50 }}
            source={{ uri: user.avatar_url }}
          />
          <TextoPrincipal title="" subtitle={user.login} />
        </S.Lado>
        <Text>{user.bio}</Text>
        <Sair />
      </S.Container>
    </S.Container>
  );
}
