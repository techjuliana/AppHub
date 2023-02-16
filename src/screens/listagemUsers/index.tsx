import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";

import React, { useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Users } from "../../components/users";
import api from "../../services/api";
import { FlatList, TextInput } from "react-native";
import { UserDTO } from "../../dtos/UserDTO";
import { Input } from "../../components/Input";
// import { useNavigation } from '@react-navigation/native';

export function ListagemUsers() {
 
  const [usersCarregado, setUsersCarregado] = useState(false);
  const [users, setUsers] = useState([]);
  const [buscarUser, setBuscarUser] = useState("");

  // const navigation = useNavigation();
  // function handleRemoverUsuario() {}
  // function handleVerDetalhes(user: UserDTO) {
  //   navigation.navigate('Repo', { user }) 
  // }

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get("users/techjuliana");
      setUsers(response.data);
      console.log(response.data);
    }

    loadUsers();
  }, []);

  return (
    <Container>
      <Header />
      <Input
      placeholder="Pesquise seu usuario..."
      />
      <Container>
        <FlatList
          data={users}
          keyExtractor={item => item.id}
          renderItem={({ item }) => 
          <Users data={item}
          //  onPress={() => handleCarDetails(item)} 
           
           />
        }
        />
      </Container>
    </Container>
  );
}
