import { Container } from "./styles";
import { TextoPrincipal } from "../../components/TextoPrincipal";
import React from "react";
import { FraseSalva } from "../../components/FraseSalva";
export function Salvos() {
  return (
    <Container>
     
       <Container>
      <TextoPrincipal
        title="Frases salvas"
        subtitle="Ajude a melhorar o app, envie frases 
        para serem adicionadas"
      />
      <FraseSalva
        name={""}
        onRemove={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </Container>
    </Container>
  );
}
