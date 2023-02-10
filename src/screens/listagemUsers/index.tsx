import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";

import React from "react";
import { Header } from "../../components/header";
import { Users } from "../../components/users";
export function ListagemUsers() {
  function handleRemoverUsuario() {}
  function handleVerDetalhes() {}

  return (
    <Container>
      <Header />
      <Container>
      <Users 
        name="NOME"
        username="USERNAME"
        empresa="EMPRESA"
        cidade="CIDADE"
        estrelas="ESTRELAS" 
        onRemove={handleRemoverUsuario} 
        irPerfil={handleVerDetalhes}      
      />
    </Container>
    </Container>
  );
}
