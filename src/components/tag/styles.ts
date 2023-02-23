import styled from "styled-components/native";

export const Container = styled.View``;

export const Title = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.color.TAGTEXT};
`;

export const ContainerTag = styled.View`
  margin: 30px;
  height: 70%;
  border-radius: 6px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: ${(props) => props.theme.color.BACKGROUND2};
  padding: 15px;
  /* background-color:black; */
`;

export const ContainerLinha = styled.View`
  justify-content: center;
  flex-direction: row;
  padding-bottom: 20px;
`;

export const ContainerB = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  background: ${(props) => props.theme.color.TEXTINPUT};
`;
