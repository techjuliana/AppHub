import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 90px;
  /* background-color: ${(props) => props.theme.colors.inputBackground}; */
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  margin-left: 13px;
  font-size: 14px;
  font-weight: bold;
  /* color:  */
`;
