import { Container } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TextoPrincipal } from "../../components/TextoPrincipal";
import { useNavigation } from "@react-navigation/native";

import React from "react";
export function Buscar() {
 
  function handlePesquisar() {
  
  }

 

  

  return (
    <Container>
        <TextoPrincipal
          title="GitHub"
          subtitle="idid"
        />
        <Input placeholder="Nome" />

    

        <Button title="BUSCAR" onPress={handlePesquisar} />

    </Container>
  );
}
