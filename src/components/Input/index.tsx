import React from "react";
import { Text } from "react-native";
import { TextInput, Container } from "./styles";

const Input = React.forwardRef(({ titleText, placeHolder, keyboardType, value, onChangeText, ...rest }, ref) => {
  return (
    <Container onPress={() => ref?.current?.focus()}>
      <Text style={{ fontSize: 16 }}>{titleText}</Text>
      <TextInput
        ref={ref}
        placeholder={placeHolder}
        keyboardType={keyboardType ?? 'default'}
        secureTextEntry={keyboardType === "visible-password"}
        value={value}
        onChangeText={onChangeText}
        {...rest}
      />
    </Container>
  );
});

export default Input;
