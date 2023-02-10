import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.color.BACKGROUND};
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export const Logo = styled.Image`
  display: flex;
  margin-bottom: 100px;
`;
