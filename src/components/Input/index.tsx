import React from "react";
import { Text } from "react-native";
import { TextInput, Container } from "./styles";

const Input = React.forwardRef(({ titleText, placeHolder, keyboardType }, ref) => {
  return (
    <>
      <Container onPress={() => ref?.current?.focus()}>
        <Text >{titleText}</Text>
        <TextInput
          ref={ref}
          placeholder={placeHolder}
          keyboardType={keyboardType ?? 'default'}
          secureTextEntry={keyboardType === "password"}
        />
      </Container>
    </>
  );
});

export default Input;
