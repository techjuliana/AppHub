import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  border-radius: 6px;
  flex-direction: column;
  align-items: center;
  box-shadow: 10px 5px 4px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  background:  ${(props) => props.theme.color.SUBTITLE};
  padding:15px;
`;

export const UserPerfil = styled.Image`
  width:40px;
  height:40px;
  border-radius:20px;
`;

export const Navegar = styled.Image`
margin-left:50px;
`;

export const Lixo = styled.Image`
  
`;

export const Icones = styled.Image`
  
`;

export const Titulo = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.color.TITLE};
  max-width:110px;
`;

export const Subtitulo = styled.Text`
  font-size: 15px;
  color: ${(props) => props.theme.color.TITLE};
`;

export const TextoInfo = styled.Text`
  font-size: 14px;
  margin-left:4px;
  margin-right:8px;
  color: ${(props) => props.theme.color.BORDER};
`;

export const ContainerInfo = styled.View`
 flex-direction: row;
padding:20px;
justify-content: space-around;
`;

export const LinhaNome = styled.View`
flex-direction: row;
`;

export const IconeFinal = styled.View`
`;

export const ColunaConjunto = styled.View`
flex-direction: column;
margin-left:30px;
margin-right:20px;
`;



export const LinhaInfo = styled.View`
flex-direction: row;
`;
