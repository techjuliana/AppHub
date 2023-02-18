import { ButtonIcon } from "../ButtonIcon";
import React from "react";
import * as S from "./styles";
import star from "./../../assets/star.png";
import bus from "./../../assets/bus.png";
import place from "./../../assets/place.png";
import seta from "./../../assets/seta.png";
import { RepoDTO } from "../../dtos/RepoDTO";

type Props = {
  data: RepoDTO;
  perfil: () => void;
};

export function Repositorios({ data, perfil }: Props) {
  return (
    <S.Container>
      <S.ContainerInfo>
        <S.ColunaConjunto>
          <S.LinhaNome>
            <S.Titulo>{data.name || data.login}</S.Titulo>
            <ButtonIcon onPress={perfil}>
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
