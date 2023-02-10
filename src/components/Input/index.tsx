import { TextInput, TextInputProps } from "react-native";
import React from "react";
import theme from "./../../theme";
import * as S from "./styles";
type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
}

export function Input({ inputRef, ...rest }: Props) {

  return (
    <S.Container
      ref={inputRef}
      // placeholderTextColor=
      {...rest} 
    />
  )
}