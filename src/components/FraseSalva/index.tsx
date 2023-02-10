import { ButtonIcon } from "../ButtonIcon";
import React from "react";
import * as S from "./styles";
import Check from "./../../assets/lixo.png";
import { Image } from "react-native";
type Props = {
  name: string;
  onRemove: () => void;
};

export function FraseSalva({ name, onRemove }: Props) {
  return (
    <S.Container>
      <S.Name>{name}</S.Name>
      <ButtonIcon onPress={onRemove}>
        <Image source={Check} />
      </ButtonIcon>
    </S.Container>
  );
}
