import styled from "styled-components/native";

export const Container = styled.View`
  border-radius: 6px;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background: ${(props) => props.theme.color.BACKGROUND};
  padding: 10px;
  margin-bottom:10px;
  margin-top:10px;
`;

export const UserPerfil = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const Navegar = styled.Image`
  margin-left: 50px;
`;

export const Icones = styled.Image``;

export const Titulo = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.color.TITLE};
  max-width: 140px;
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
  padding: 10px;
  justify-content: space-between;
`;

export const LinhaNome = styled.View`
  flex-direction: row;
  margin-bottom:10px;
`;

export const IconeFinal = styled.View``;

export const ColunaConjunto = styled.View`
  flex-direction: column;
  margin-bottom: 5px;
`;

export const LinhaInfo = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;
