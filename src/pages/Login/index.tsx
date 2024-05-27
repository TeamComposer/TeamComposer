import React, { useRef } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Container, ContainerInputs, ContainerInputsCenter } from "./styles";

import Gradient from "../../components/Gradient";
import Input from "../../components/Input";
import PrimaryButton from "../../components/PrimaryButton";

function Login({ navigation }) {
  const emailRef = useRef<TextInput>();
  const passwordRef = useRef<TextInput>();

  async function validateLogin() {
    //criar validação de login

    if (true) {
      navigation.navigate("HomeScreen");
    }
  }

  async function goToSignUp() {
    navigation.navigate("SignUp");
  }

  return (
    <Container>
      <Gradient />

      <SafeAreaView
        style={{
          height: "30%",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {/* <Image source={"../../../assets/Logo_transparente_branca"} /> */}
        
      </SafeAreaView>

      <ContainerInputs>
        <ContainerInputsCenter>
          <Text style={{  }}>Login</Text>
          <View style={{ width: "100%" }}>
            <Input
              ref={emailRef}
              titleText="Email"
              placeHolder="aluno@alunos.utfpr.edu.br"
              keyboardType="email-address"
              s
            />

            <Input
              ref={passwordRef}
              titleText="Senha"
              placeHolder="ººººººº"
              keyboardType="password"
            />

            <PrimaryButton title={"Login"} fn={() => validateLogin()} />
          </View>

          <TouchableOpacity onPress={goToSignUp}>
            <Text style={{  }}>
              Não possuí uma conta? Cadastre-se!
            </Text>
          </TouchableOpacity>
        </ContainerInputsCenter>
      </ContainerInputs>
    </Container>
  );
}

export default Login;
