import { ButtonIcon } from "../ButtonIcon";
import React from "react";
import * as S from "./styles";
import Check from "./../../assets/delete.png";

type Props = {
  name: string;
  username: string;
  empresa: string;
  cidade: string;
  estrelas: string;
  onRemove: () => void;
  irPerfil: () => void;
};

export function Users({ name, irPerfil, onRemove, username, empresa, cidade, estrelas}: Props) {
  return (
    <S.Container>
      <S.ContainerInfo>
       <S.UserPerfil source={Check} />

<S.ColunaConjunto>
       <S.LinhaNome>
      <S.Titulo>{name}</S.Titulo>

      <ButtonIcon onPress={irPerfil}>
      <S.Navegar source={Check} />
      </ButtonIcon>

      <S.IconeFinal>
      <ButtonIcon onPress={onRemove}>
        <S.Lixo source={Check} />
      </ButtonIcon>
      </S.IconeFinal>
      </S.LinhaNome>

      <S.Subtitulo>{username}</S.Subtitulo>
      </S.ColunaConjunto>
      </S.ContainerInfo>

      <S.LinhaInfo>
      <S.Icones source={Check} />
      <S.TextoInfo>{empresa}</S.TextoInfo>
      <S.Icones source={Check} />
      <S.TextoInfo>{cidade}</S.TextoInfo>
      <S.Icones source={Check} />
      <S.TextoInfo>{estrelas}</S.TextoInfo>
      </S.LinhaInfo>
    </S.Container>
  );
}
