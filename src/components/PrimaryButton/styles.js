import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: #000000;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const ButtonWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;
