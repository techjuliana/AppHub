import styled from "styled-components/native";

export const Container = styled.View`
  width: 310px;
  height: 200px;
  border-radius: 6px;
  flex-direction: column;
  align-items: center;
  /* margin-bottom: 16px; */
  background: ${(props) => props.theme.color.BACKGROUND};
  /* boxShadow:  ${(props) => props.theme.color.BORDER}; */
`;

export const Navegar = styled.Image``;

export const Lixo = styled.Image``;

export const Icones = styled.Image``;

export const Titulo = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.color.TITLE};
`;

export const Subtitulo = styled.Text`
  font-size: 15px;
  color: ${(props) => props.theme.color.TITLE};
`;

export const TextoInfo = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.color.BORDER};
`;

export const ContainerInfo = styled.View`
  flex-direction: row;
  padding: 20px;
`;

export const LinhaNome = styled.View`
  flex-direction: row;
`;

export const IconeFinal = styled.View``;

export const ColunaConjunto = styled.View`
  flex-direction: column;
`;

export const LinhaInfo = styled.View`
  flex-direction: row;
`;
