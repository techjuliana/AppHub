import { Container, Loading } from "./styles";
import React, { useEffect, useState } from "react";
import { Header } from "../../components/header";
import api from "../../services/api";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { RepoDTO } from "../../dtos/RepoDTO";
import { Input } from "../../components/Input";
import { Repositorios } from "../../components/repositorios";

export function ListagemRepo() {
  const [usersDados, setUsersDados] = useState<RepoDTO[]>([]);
  const [loading, setLoading] = useState(true);

  console.log("teste api funcionando", usersDados);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get(
        "https://api.github.com/search/repositories?q=techjuliana/Starbucks"
      );
      setUsersDados(response.data.items);
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

        <Input placeholder="Pesquise um repositorio..." />

        <Container>
          <FlatList
            data={usersDados}
            renderItem={({ item }) => <Repositorios data={item} />}
            keyExtractor={(item: RepoDTO) => item.name}
          />
        </Container>
      </Container>
    );
  }
}
