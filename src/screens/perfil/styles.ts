import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
  background: ${(props) => props.theme.color.BACKGROUND2};
  justify-content: center;
  align-items: center;
  padding: 24px;
  border-radius:5px;
`;

export const Lado = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

