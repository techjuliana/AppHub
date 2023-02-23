import { Container, Loading, UserPerfil } from "./styles";
import React, { useEffect, useState } from "react";
import { Header } from "../../components/header";
import api from "../../services/api";
import { ActivityIndicator, FlatList, Text } from "react-native";
import { RepoDTO } from "../../dtos/RepoDTO";
import { Input } from "../../components/Input";
import { Repositorios } from "../../components/repositorios";
import { UserDTO } from "../../dtos/UserDTO";
import { useNavigation, useRoute } from "@react-navigation/native";
import image from "./../../assets/pess.png";
import { ButtonIcon } from "../../components/ButtonIcon";
interface Params {
  user: UserDTO;
}

export function ListagemRepo() {
  const [usersDados, setUsersDados] = useState<RepoDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  const { user } = route.params as Params;

  const navigation = useNavigation();
  function handleSobre(user: UserDTO) {
    navigation.navigate("sobre", { user });
  }

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

        <ButtonIcon
          onPress={() => {
            handleSobre;
          }}
        >
          {/* <UserPerfil source={{ uri: user.avatar_url }} /> */}
          <UserPerfil source={image} />
          <Text>oii</Text>
        </ButtonIcon>
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
