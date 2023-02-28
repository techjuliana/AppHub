import { Container } from "./styles";
import React, { useEffect, useState } from "react";
import { Users } from "../../components/users";
import api from "../../services/api";
import {  FlatList, Text } from "react-native";
import { UserDTO } from "../../dtos/UserDTO";
import { Input } from "../../components/Input";
import { HeaderUser } from "../../components/headerUser";
import { ButtonIcon } from "../../components/ButtonIcon";

export function ListagemUsers() {
  const [usersDados, setUsersDados] = useState<UserDTO[]>([]);
  const [inputText, setInputText] = useState(null);

  function Add (){

  }

  console.log("teste api funcionando", usersDados);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get(`users/${inputText}`);
      setUsersDados([response.data]);
    }

    loadUsers();
  }, []);

    return (
      <Container>
        <HeaderUser />
        <Input placeholder="Pesquise seu usuario..." 
        onChangeText={setInputText}
        returnKeyType="send"
        autoCapitalize="none"
        autoCorrect={false}
        // onSubmitEditing={Add}
        />
        {/* <ButtonIcon onPress={Add}>
          <Text>enviar</Text>
        </ButtonIcon> */}
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

