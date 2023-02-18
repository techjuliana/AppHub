import { ButtonIcon } from "../ButtonIcon";
import React from "react";
import * as S from "./styles";
import star from "./../../assets/star.png";
import bus from "./../../assets/bus.png";
import place from "./../../assets/place.png";
import seta from "./../../assets/seta.png";
import { RepoDTO } from "../../dtos/RepoDTO";
import { Linking } from "react-native";

type Props = {
  data: RepoDTO;
};

export function Repositorios({ data}: Props) {
  return (
    <S.Container>
      <S.ContainerInfo>
        <S.ColunaConjunto>
          <S.LinhaNome>
            <S.Titulo>{data.name}</S.Titulo>
            <ButtonIcon
              onPress={() => {
                Linking.openURL(data.html_url);
              }}
            >
              <S.Navegar source={seta} />
            </ButtonIcon>
          </S.LinhaNome>
          <S.Subtitulo>
            {!data.description
              ? "Esse repositório não tem descrição :( "
              : data.description}
          </S.Subtitulo>
        </S.ColunaConjunto>
      </S.ContainerInfo>

      <S.LinhaInfo>
        <S.Icones source={bus} />
        <S.TextoInfo>{data.language || "Não especificado"}</S.TextoInfo>
        <S.Icones source={place} />
        <S.TextoInfo>{data.stargazers_count || "0"}</S.TextoInfo>
        <S.Icones source={star} />
        <S.TextoInfo>{data.forks_count || "0"}</S.TextoInfo>
      </S.LinhaInfo>
    </S.Container>
  );
}
