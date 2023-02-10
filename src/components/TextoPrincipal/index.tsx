import { Container, Title, Subtitle } from "./styles";
import React from "react";
type Props = {
  title: string;
  subtitle: string;
};

export function TextoPrincipal({ title, subtitle }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
