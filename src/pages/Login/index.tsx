import React, { useRef } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Container, ContainerInputs, ContainerInputsCenter } from "./styles";

import Gradient from "../../components/Gradient";
import Input from "../../components/Input";
import PrimaryButton from "../../components/PrimaryButton";

function Login({ navigation }) {
  const emailRef = useRef<TextInput>();
  const passwordRef = useRef<TextInput>();

  async function validateLogin() {
    //criar validação de login

    if(true){
        navigation.navigate('Home');
    }
  }

  async function goToSignUp() {
    //tem que criar tela de cadastro
    // navigation.navigate('Home');
  }

  return (
    <Container>
      <Gradient />

      <ContainerInputs>
        <ContainerInputsCenter>
          <Text style={{ fontSize: 36 }}>Login</Text>
          <View style={{ width: "100%" }}>
            <Input
              ref={emailRef}
              titleText="Email"
              placeHolder="aluno@alunos.utfpr.edu.br"
              keyboardType="email"
            />
            <Input
              ref={passwordRef}
              titleText="Senha"
              placeHolder="ººººººº"
            />

            <PrimaryButton title={"Login"} fn={() => validateLogin()}/>
          </View>

          <TouchableOpacity  onPress={goToSignUp}><Text style={{ fontSize: 16 }}>Não tem conta ainda? Registre-se</Text></TouchableOpacity>

        </ContainerInputsCenter>
      </ContainerInputs>
    </Container>
  );
}

export default Login;
