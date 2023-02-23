import { Container, Loading } from "./styles";
import React, { useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Users } from "../../components/users";
import api from "../../services/api";
import { ActivityIndicator, FlatList, Text } from "react-native";
import { UserDTO } from "../../dtos/UserDTO";
import { Input } from "../../components/Input";

export function ListagemUsers() {
  const [usersDados, setUsersDados] = useState<UserDTO[]>([]);
  const [loading, setLoading] = useState(true);

  console.log("teste api funcionando", usersDados);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get("users/techjuliana");
      setUsersDados([response.data]);
      setLoading(false);
    }

    loadUsers();
  }, []);

  if (loading) {
    return (
      <Loading>
        <ActivityIndicator color="#282727" size={45} />
      </Loading>
    );
  } else {
    return (
      <Container>
        <Header />

        <Input placeholder="Pesquise seu usuario..." />

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
}
