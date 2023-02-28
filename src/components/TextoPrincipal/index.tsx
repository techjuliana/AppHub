import * as S from "./styles";
import React from "react";
type Props = {
  title: string;
  subtitle: string;
};

export function TextoPrincipal({ title, subtitle }: Props) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Container>
  );
}
