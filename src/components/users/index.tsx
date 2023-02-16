import { ButtonIcon } from "../ButtonIcon";
import React from "react";
import * as S from "./styles";
import Check from "./../../assets/delete.png";
import { UserDTO } from "../../dtos/UserDTO";

type Props = {
  data: UserDTO;
};

export function Users({ data, ...rest}: Props) {
  return (
    <S.Container {...rest}>
      <S.ContainerInfo>
       {/* <S.UserPerfil  source={{ uri: data.avatar_url }}  /> */}

<S.ColunaConjunto>
       <S.LinhaNome>
      <S.Titulo>{data.name}</S.Titulo>
      <S.Titulo>{data.username}</S.Titulo>
      {/* <ButtonIcon onPress={irPerfil}>
      <S.Navegar source={Check} />
      </ButtonIcon> */}

      <S.IconeFinal>
      {/* <ButtonIcon onPress={onRemove}>
        <S.Lixo source={Check} />
      </ButtonIcon> */}
      </S.IconeFinal>
      </S.LinhaNome>

      {/* <S.Subtitulo>{username}</S.Subtitulo> */}
      </S.ColunaConjunto>
      </S.ContainerInfo>

      <S.LinhaInfo>
      <S.Icones source={Check} />
      <S.TextoInfo>{data.name}</S.TextoInfo>
      <S.Icones source={Check} />
      <S.TextoInfo>{data.name}</S.TextoInfo>
      <S.Icones source={Check} />
      <S.TextoInfo>{data.name}</S.TextoInfo>
      </S.LinhaInfo>
    </S.Container>
  );
}
