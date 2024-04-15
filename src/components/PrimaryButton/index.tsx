import React from "react";
import { Container, ButtonText, ButtonWrapper } from "./styles";

function PrimaryButton({ title, fn }) {
  return (
    <Container onPress={fn}>
        <ButtonWrapper>
          <ButtonText>{title}</ButtonText>
        </ButtonWrapper>
    </Container>
  );
}

export default PrimaryButton;
