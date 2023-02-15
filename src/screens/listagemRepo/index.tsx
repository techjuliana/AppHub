import { Container, Loading } from "./styles";
import { useNavigation } from "@react-navigation/native";

import React, { useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Users } from "../../components/users";
import { ActivityIndicator, FlatList } from "react-native";
import api from "../../services/api";
export function ListagemUsers() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  function handleRemoverUsuario() { }
  function handleVerDetalhes() {}


  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("/users");
      setFilmes(response.data);
      setLoading(false);
    }

    loadFilmes();
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
      <Container>
      <FlatList
          data={filmes}
          keyExtractor={(item) => String(item.user)}
          renderItem={({ item }) => <Users data={item} onRemove={handleRemoverUsuario} 
          irPerfil={handleVerDetalhes} />}
          
        />
    </Container>
    </Container>
  );
  }
}
