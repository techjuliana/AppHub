import React from "react";
import { Image, TouchableOpacityProps } from "react-native";
import Calendar from "./../../assets/curtida.png";
import * as S from "./styles";
type Props = TouchableOpacityProps &{
  title: string;
};

export function CardMenu({ title, ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <Image source={Calendar} />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
