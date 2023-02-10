import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.BUTTON};
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.color.TEXTBUTTON};
`;
