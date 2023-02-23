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
  const { users } = route.params as Params;

  const navigation = useNavigation();
  function handleSobre(users: UserDTO) {
    navigation.navigate("sobre", { users });
  }

  return (
    <Container>
      <Logo source={Git} />
      <Botao>
        <ButtonIcon onPress={handleSobre}>
          {/* <UserPerfil source={{ uri: user.avatar_url }} /> */}
          <UserPerfil source={image} />
        </ButtonIcon>
      </Botao>
    </Container>
  );
}
