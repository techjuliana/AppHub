import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.color.BACKGROUND2};
  padding: 16px;
`;

export const ContainerInput = styled.View`
  width: 300px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Navegar = styled.Image`
  margin-left: 20px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
`;
