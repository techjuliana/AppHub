import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  border-radius: 6px;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.color.BACKGROUND};
  padding: 24px;
`;

export const UserPerfil = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const Navegar = styled.Image`
  margin-left: 20px;
`;

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
  flex-wrap: wrap;
  font-size: 14px;
  margin-left: 4px;
  margin-right: 8px;
  color: ${(props) => props.theme.color.INFO};
`;

export const ContainerInfo = styled.View`
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;
`;

export const LinhaNome = styled.View`
  flex-direction: row;
`;

export const IconeFinal = styled.View``;

export const ColunaConjunto = styled.View`
  flex-direction: column;
  margin-left: 20px;
`;

export const LinhaInfo = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  
`;
