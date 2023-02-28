import { Container } from "./styles";
import React, { useEffect, useState } from "react";
import { Header } from "../../components/header";
import api from "../../services/api";
import { FlatList } from "react-native";
import { RepoDTO } from "../../dtos/RepoDTO";
import { Input } from "../../components/Input";
import { Repositorios } from "../../components/repositorios";
import { UserDTO } from "../../dtos/UserDTO";
import { useRoute } from "@react-navigation/native";

interface Params {
  user: UserDTO;
}

export function ListagemRepo() {
  const [search, setSearch] = useState("");
  const [usersDados, setUsersDados] = useState<RepoDTO[]>([]);
  const [filtro, setFiltro] = useState<RepoDTO[]>([]);

  const route = useRoute();
  const { user } = route.params as Params;

  console.log("teste api funcionando", usersDados);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get(`users/${user.login}/starred`);
      setUsersDados(response.data);
      setFiltro(response.data);
    }

    loadUsers();
  }, []);

  const searchFilter = (text: string) => {
    if (text) {
      const newData = usersDados.filter(function (item) {
        if (item.name) {
          const itemData = item.name.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        }
      });
      setFiltro(newData);
    } else {
      setFiltro(usersDados);
    }
    setSearch(text);
  };

  return (
    <Container>
      <Header />
      <Input
        placeholder="Pesquise um repositorio..."
        onChangeText={(text) => searchFilter(text)}
        value={search}
      />
      <Container>
        <FlatList
          data={filtro}
          renderItem={({ item }) => <Repositorios data={item} />}
          keyExtractor={(item: RepoDTO) => item.name}
        />
      </Container>
    </Container>
  );
}
