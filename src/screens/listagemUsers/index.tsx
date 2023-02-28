import { Container, ContainerInput, Navegar } from "./styles";
import React, { useState } from "react";
import { Users } from "../../components/users";
import api from "../../services/api";
import { FlatList } from "react-native";
import { UserDTO } from "../../dtos/UserDTO";
import { Input } from "../../components/Input";
import { HeaderUser } from "../../components/headerUser";
import { ButtonIcon } from "../../components/ButtonIcon";
import search from "./../../assets/search.png";

export function ListagemUsers() {
  const [usersDados, setUsersDados] = useState<UserDTO[] | null>([]);
  const [inputText, setInputText] = useState("");

  console.log("teste api funcionando", usersDados);

  const loadUsers = async () => {
    const response = await api.get(`users/${inputText}`);
    setUsersDados([response.data]);
  };

  return (
    <Container>
      <HeaderUser />
      <ContainerInput>
        <Input
          placeholder="Pesquise seu @usuario..."
          value={inputText}
          onChangeText={setInputText}
          returnKeyType="send"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <ButtonIcon onPress={loadUsers}>
          <Navegar source={search} />
        </ButtonIcon>
      </ContainerInput>
      <Container>
        <FlatList
          data={usersDados}
          renderItem={({ item }) => <Users data={item} />}
          keyExtractor={(item: UserDTO) => item.login}
        />
      </Container>
    </Container>
  );
}
