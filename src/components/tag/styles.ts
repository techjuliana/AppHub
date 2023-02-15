import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  /* width: 100%; */
  /* height: 50px; */
  padding:5px;
  border-radius: 50px;
  /* justify-content: start; */
  /* align-items: center; */
  background-color: ${(props) => props.theme.color.TAG};
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.color.TAGTEXT};
`;
