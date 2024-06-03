import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const ContainerInputs = styled.View`
  position: absolute;
  bottom: 0;
  background-color: #f6f6f6;
  width: 100%;
  height: 70%;
  padding: 8px;
  border-top-left-radius: 80px;
  align-items: center;
  justify-content: center;
`;

export const ContainerInputsCenter = styled.View`
  align-items: center;
  justify-content: space-around;
  width: 90%;
  height: 100%;
`;

export const Logo = styled.Image`
  margin-top: -150px;
  max-width: 100%;
  min-width: 80px;
  max-height: 150px;
  min-height: 80px;
`;