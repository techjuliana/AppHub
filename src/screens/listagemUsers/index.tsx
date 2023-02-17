import { Container, Loading } from "./styles";
import { useNavigation } from "@react-navigation/native";

import React, { useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Users } from "../../components/users";
import api from "../../services/api";
import { ActivityIndicator, FlatList, TextInput } from "react-native";
import { UserDTO } from "../../dtos/UserDTO";
import { Input } from "../../components/Input";
// import { useNavigation } from '@react-navigation/native';

export function ListagemUsers() {
  const [usersDados, setUsersDados] = useState<UserDTO[]>([]);
  const [loading, setLoading] = useState(true);

  console.log("testeeeeee", usersDados, "testeeeeee");
  // const navigation = useNavigation();
  // function handleRemoverUsuario() {}
  // function handleVerDetalhes(user: UserDTO) {
  //   navigation.navigate('Repo', { user }) 
  // }

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get("users/techjuliana");
      setUsersDados(response.data);
      setLoading(false);
      // console.log(response.data.login);
      // console.log(usersDados);
    }

    loadUsers();
  }, []);

  if (loading) {
    return (
      <Loading>
        <ActivityIndicator color="#121212" size={45} />
      </Loading>
    );
  } else {

  return (
    <Container>
      <Header />
      <Input
      placeholder="Pesquise seu usuario..."
      />
      <Container>
        <FlatList
          data={usersDados}
          renderItem={({item}) => <Users data={item} />}
          keyExtractor={(item: UserDTO) => item.login}
        />
      </Container>
    </Container>
  );
}
}
