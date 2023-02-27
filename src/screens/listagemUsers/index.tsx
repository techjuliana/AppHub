import { Container } from "./styles";
import React, { useEffect, useState } from "react";
import { Users } from "../../components/users";
import api from "../../services/api";
import {  FlatList } from "react-native";
import { UserDTO } from "../../dtos/UserDTO";
import { Input } from "../../components/Input";
import { HeaderUser } from "../../components/headerUser";

export function ListagemUsers() {
  const [usersDados, setUsersDados] = useState<UserDTO[]>([]);

  console.log("teste api funcionando", usersDados);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get("users/techjuliana");
      setUsersDados([response.data]);
    }

    loadUsers();
  }, []);

    return (
      <Container>
        <HeaderUser />
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

