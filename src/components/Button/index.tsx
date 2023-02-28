import React from "react";
import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <S.Container activeOpacity={0.8} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
