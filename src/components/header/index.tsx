import { Botao, Container, Logo, UserPerfil } from "./styles";
import Git from "./../../assets/git.png";
import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { ButtonIcon } from "../ButtonIcon";
import image from "./../../assets/pess.png";
import { UserDTO } from "../../dtos/UserDTO";
interface Params {
  user: UserDTO;
}

export function Header() {
  const route = useRoute();
  const { user } = route.params as Params;

  const navigation = useNavigation();

  function handleSobre(user: UserDTO) {
    navigation.navigate("sobre", {user});
  }

  return (
    <Container>
      <Logo source={Git} />
      <Botao>
        <ButtonIcon onPress={() => handleSobre(user)}>
          <UserPerfil source={{ uri: user.avatar_url }} />
          {/* <UserPerfil source={image} /> */}
        </ButtonIcon>
      </Botao>
    </Container>
  );
}
