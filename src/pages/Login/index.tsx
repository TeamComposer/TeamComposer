import React, { useRef } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet
} from "react-native";


import { Container, ContainerInputs, ContainerInputsCenter, Logo } from "./styles";

import Gradient from "../../components/Gradient";
import Input from "../../components/Input";
import PrimaryButton from "../../components/PrimaryButton";
import img from '../../assets/Logo_transparente_branca.png'

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

      </SafeAreaView>

      <Logo source={img} />

      <ContainerInputs>
        <ContainerInputsCenter>
          <Text style={{ fontSize: 36 }}>Login</Text>
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
            <Text style={{ fontSize: 16 }}>
              Não possuí uma conta? Cadastre-se!
            </Text>
          </TouchableOpacity>
        </ContainerInputsCenter>
      </ContainerInputs>
    </Container>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DADADA',
  },
  Titletext: {
    color: 'black',
    paddingTop: 10,
    paddingBottom: 0,
    marginBottom: 0,
  },
  Viewlink: {
    flexDirection: 'row', 
    alignItems: 'center',
    margin: 1,
    padding: 1,
  },
  links: {
    display: 'flex',
    flexDirection: 'row',
  },
  description: {
    backgroundColor: '#4A6BA0',
    borderRadius: 10,
    padding: 10,
    textAlign: 'left',
    fontSize: 14,
    maxHeight: 'auto',
    marginVertical: 10,
    color: '#000',
  },
  descriptionText: {
    color: '#fff',
    textAlign: 'justify',
    fontSize: 17,
  },
  description2: {
    backgroundColor: '#a2a7a5',
    flexDirection: 'column', // Corrigido de 'collunm' para 'column'
    borderRadius: 10,
    padding: 10,
    textAlign: 'left',
    fontSize: 14,
    maxHeight: 'auto',
    marginVertical: 10,
    color: '#000',
  },
  
  descriptionText2: {
    color: '#000',
    textAlign: 'justify',
    fontSize: 17,
    padding: 1,
  },
  linkButton: {
    backgroundColor: '#a2a7a5',
    borderRadius: 10,
    padding: 0,
    alignItems: 'center',
    marginVertical: 5,
  },
  linkButtonText: {
    color: '#0075FF',
    fontSize: 17,
    textDecorationLine: 'underline',
  },
  imageTop: {
    borderRadius: 10,
    width: '95%',
    height: 150,
    marginTop: -150,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default Login;
