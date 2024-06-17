import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const ContainerOptions = styled.View`
    margin-top: 20px;
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
    `;

export const Options = styled.TouchableOpacity`
    width: 150px;
    height: 150px;
    padding-left: 10px;
    padding-rigth: 10px;
    background-color: #2C4060;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
`;

export const OptionsProfessor = styled.TouchableOpacity`
    width: 100%;
    padding: 12px;
    background-color: #2C4060;
    justify-content: center;
    border-radius: 20px;
    margin-bottom: 8px;
`;

export const FloatButton = styled.TouchableOpacity`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  bottom: 12px;
  right: 12px;
  justify-content: center;
  align-items: center;
  background-color: #4D5561;
`;

