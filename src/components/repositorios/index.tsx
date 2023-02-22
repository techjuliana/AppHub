import { ButtonIcon } from "../ButtonIcon";
import React from "react";
import * as S from "./styles";
import star from "./../../assets/star.png";
import lang from "./../../assets/language.png";
import pess from "./../../assets/pess.png";
import seta from "./../../assets/seta.png";
import estrela from "./../../assets/estrelaAmarela.png";
import { RepoDTO } from "../../dtos/RepoDTO";
import { Linking } from "react-native";
import { Tag } from "../tag";

type Props = {
  data: RepoDTO;
};

export function Repositorios({ data }: Props) {
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
            <ButtonIcon
              onPress={() => {
                Linking.openURL(data.html_url);
              }}
            >
              <S.Navegar
                style={{ backgroundColor: "#FFF7D7", borderRadius: 30 }}
                source={estrela}
              />
            </ButtonIcon>
          </S.LinhaNome>
          <S.Subtitulo>
            {!data.description
              ? "Esse repositório não tem descrição :( "
              : data.description}
          </S.Subtitulo>
        </S.ColunaConjunto>
      </S.ContainerInfo>

      <Tag title={""}/>

      <S.LinhaInfo>
        <S.Icones source={lang} />
        <S.TextoInfo>{data.language || "Não especificado"}</S.TextoInfo>
        <S.Icones source={star} />
        <S.TextoInfo>{data.stargazers_count || "0"}</S.TextoInfo>
        <S.Icones source={pess} />
        <S.TextoInfo>{data.forks_count || "0"}</S.TextoInfo>
        <S.Icones source={pess} />
        <S.TextoInfo>Atualizado em {data.updated_at}</S.TextoInfo>
      </S.LinhaInfo>
    </S.Container>
  );
}
