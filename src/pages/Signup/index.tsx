import React, { useRef } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
// import Icon from "react-native-ionicons";

import { Container, ContainerInputs, ContainerInputsCenter } from "./styles";

import Gradient from "../../components/Gradient";
import Input from "../../components/Input";
import PrimaryButton from "../../components/PrimaryButton";
import { SafeAreaView } from "react-native-safe-area-context";

function SignUp({ navigation }) {
  const name = useRef<TextInput>();
  const surname = useRef<TextInput>();
  const emailRef = useRef<TextInput>();
  const passwordRef = useRef<TextInput>();
  const passwordConfirmRef = useRef<TextInput>();

  async function validateFields() {
    //criar validação de login

    if (true) {
      navigation.navigate("HomeScreen");
    }
  }

  async function goToSignIn() {
    navigation.goBack();
  }

  return (
   <>
    <Container>
      <Gradient />

      <SafeAreaView style={{ height: '30%',width: "100%", flexDirection: "row", alignItems: "center"}}>
          {/* <Icon name="arrow-back" /> */}
          <Text style={{ color: "white" }}>Cadastre-se</Text>
      </SafeAreaView>

      <ContainerInputs>
        <ContainerInputsCenter>
          <View style={{ width: "100%" }}>
            <Input
              ref={name}
              titleText="Primeiro nome"
              placeHolder="Nivaldo"
              keyboardType="email-address"
              s
            />
            <Input
              ref={surname}
              titleText="Sobrenome"
              placeHolder="Batista "
              keyboardType="email-address"
              s
            />

            <Input
              ref={emailRef}
              titleText="Email"
              placeHolder="aluno@alunos.utfpr.edu.br"
              keyboardType="email-address"
              s
            />
            <Input
              ref={passwordRef}
              titleText="Crie sua senha"
              placeHolder="ººººººº"
              keyboardType="password"
            />

            <Input
              ref={passwordConfirmRef}
              titleText="Confirme a senha"
              placeHolder="ººººººº"
              keyboardType="password"
            />

            <PrimaryButton title={"Cadastre-se"} fn={() => validateFields()} />
          </View>

          <TouchableOpacity onPress={goToSignIn}>
            <Text style={{  }}>
              Já possuí uma conta? Faça login!
            </Text>
          </TouchableOpacity>
        </ContainerInputsCenter>
      </ContainerInputs>
    </Container>
   </>
  );
}

export default SignUp;
