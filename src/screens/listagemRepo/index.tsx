import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";

import React from "react";
import { Header } from "../../components/header";
import { Repositorios } from "../../components/repositorios";
export function ListagemRepo() {
  function handleRemoverUsuario() {}
  function handleVerDetalhes() {}

  return (
    <Container>
      <Header />
      <Container>
      <Repositorios 
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
