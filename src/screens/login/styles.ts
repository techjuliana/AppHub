import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color:${(props) => props.theme.color.BACKGROUND};
  justify-content: center;
  align-items: center;
  padding: 24px;  
`;

export const IconContent = styled.Image`
  width: 137px;
  height: 130px;
`;

export const Account = styled.View`
  width: 100%;
  margin-top: 30px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
 
`;

export const Logo = styled.Image`
  display: flex;
  margin-bottom: 100px;
`;