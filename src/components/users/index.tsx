import { ButtonIcon } from "../ButtonIcon";
import React from "react";
import * as S from "./styles";
import star from "./../../assets/star.png";
import bus from "./../../assets/bus.png";
import place from "./../../assets/place.png";
import seta from "./../../assets/seta.png";
import { UserDTO } from "../../dtos/UserDTO";

import { useNavigation } from "@react-navigation/native";

type Props = {
  data: UserDTO;
};

export function Users({ data}: Props) {

  const navigation = useNavigation();
  function handleVerDetalhes(user: UserDTO) {
    navigation.navigate("listaRepositorios", {user});
  }

  return (
    <S.Container>
      <S.ContainerInfo>
        <S.UserPerfil source={{ uri: data.avatar_url }} />
        <S.ColunaConjunto>
          <S.LinhaNome>
            <S.Titulo>{data.name || data.login}</S.Titulo>
            <ButtonIcon onPress={() => handleVerDetalhes(data)}>
              <S.Navegar source={seta} />
            </ButtonIcon>
          </S.LinhaNome>
          <S.Subtitulo>@{data.login}</S.Subtitulo>
        </S.ColunaConjunto>
      </S.ContainerInfo>

      <S.LinhaInfo>
        <S.Icones source={bus} />
        <S.TextoInfo>{data.company || "Job"}</S.TextoInfo>
        <S.Icones source={place} />
        <S.TextoInfo>{data.location || "Local"}</S.TextoInfo>
        <S.Icones source={star} />
        <S.TextoInfo>{data.public_repos || "0"}</S.TextoInfo>
      </S.LinhaInfo>
    </S.Container>
  );
}
