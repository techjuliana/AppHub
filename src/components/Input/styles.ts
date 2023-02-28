import styled  from "styled-components/native";

export const Container = styled.TextInput`
  flex: 1;
  width:100%;
  max-height: 50px;
  font-size: 14px;
  color: ${(props) => props.theme.color.TEXTINPUT};
  border-radius: 6px;
  padding: 16px;
  margin-bottom:10px;
  border:1px;
  border-color:${(props) => props.theme.color.BORDER};
`;