import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.color.BACKGROUND};
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export const List = styled.FlatList`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
`;
