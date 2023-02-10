import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding-bottom: 15px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.color.TITLE};
`;

export const Subtitle = styled.Text`
  margin-bottom: 14px;
  margin-top: 10px;
  font-size: 15px;
  color: ${(props) => props.theme.color.SUBTITLE};
`;
