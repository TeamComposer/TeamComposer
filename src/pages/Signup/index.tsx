import React, { useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
// import Icon from "react-native-ionicons";

import { Container, ContainerInputs, ContainerInputsCenter } from "./styles";

import Gradient from "../../components/Gradient";
import Input from "../../components/Input";
import PrimaryButton from "../../components/PrimaryButton";
import { SafeAreaView } from "react-native-safe-area-context";
import useApi from "../../hooks/useApi";

function SignUp({ navigation }) {
  const name = useRef<TextInput>();
  const surname = useRef<TextInput>();
  const emailRef = useRef<TextInput>();
  const passwordRef = useRef<TextInput>();
  const passwordConfirmRef = useRef<TextInput>();
  const periodRef = useRef<TextInput>();

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [periodo, setPeriodo] = useState(0);
  const [loading, setLoading] = useState(false);

  const apiCall = useApi({
    method: "POST",
    url: "/cadastro/cadastroUser",
  });

  async function validateFields() {
    try {
      setLoading(true);
      if (
        !nome.length ||
        !sobrenome.length ||
        !email.length ||
        !password.length ||
        !passwordConfirm.length ||
        !periodo
      ) {
        Alert.alert("Atenção!", "Preencha todos os campos.");
        return;
      }
      if (
        !email.toLocaleLowerCase().trim().includes("@alunos.utfpr.edu.br") &&
        !email.toLocaleLowerCase().trim().includes("@professores.utfpr.edu.br")
      ) {
        Alert.alert(
          "Atenção!",
          "Email inválido, verifique se o mesmo pertence ao domínio da UTFPR."
        );
        return;
      }

      if (passwordConfirm !== password) {
        Alert.alert("Atenção!", "As senhas informadas não são iguais.");
        return;
      }

      const response = await apiCall(
        {},
        {
          primeiroNome: nome.trim(),
          sobrenome: sobrenome.trim(),
          email: email.trim().toLowerCase(),
          periodo: periodo,
          senha: password.trim(),
        }
      );

      if (response.status === 200) {
        Alert.alert("Atenção!", "Cadastro realizado com sucesso!");
        navigation.goBack();
      } else {
        Alert.alert(
          "Atenção!",
          response.error || "Falha ao realizar o cadastro."
        );
      }
    } catch (e) {
      Alert.alert("Atenção", "Falha ao realizar o cadastro: " + e);
    } finally {
      setLoading(false);
    }
  }

  async function goToSignIn() {
    navigation.goBack();
  }

  return (
    <>
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
          {/* <Icon name="arrow-back" /> */}
          <Text style={{ fontSize: 36, color: "white" }}>Cadastre-se</Text>
        </SafeAreaView>

        <ContainerInputs>
          <ContainerInputsCenter>
            <View style={{ width: "100%" }}>
              <Input
                ref={name}
                titleText="Primeiro nome"
                placeHolder="Nivaldo"
                keyboardType="default"
                value={nome}
                onChangeText={setNome}
                returnKeyType="next"
                onSubmit={() => surname.current.focus()}
              />

              <Input
                ref={surname}
                titleText="Sobrenome"
                placeHolder="Batista "
                keyboardType="default"
                value={sobrenome}
                onChangeText={setSobrenome}
                returnKeyType="next"
                onSubmit={() => emailRef.current.focus()}
              />

              <Input
                ref={emailRef}
                titleText="Email"
                placeHolder="aluno@alunos.utfpr.edu.br"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                returnKeyType="next"
                onSubmit={() => periodRef.current.focus()}
              />

              <Input
                ref={periodRef}
                titleText="Periodo"
                placeHolder="3"
                keyboardType="number"
                value={periodo}
                onChangeText={setPeriodo}
                returnKeyType="next"
                onSubmit={() => passwordRef.current.focus()}
              />

              <Input
                ref={passwordRef}
                titleText="Senha"
                placeHolder="ººººººº"
                keyboardType="visible-password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                returnKeyType="next"
                onSubmit={() => passwordConfirmRef.current.focus()}
              />

              <Input
                ref={passwordConfirmRef}
                titleText="Confirme as senha"
                placeHolder="ººººººº"
                keyboardType="visible-password"
                secureTextEntry={true}
                value={passwordConfirm}
                onChangeText={setPasswordConfirm}
                returnKeyType="next"
                onSubmit={() => validateFields()}
              />

              {loading ? (
                <ActivityIndicator size={26} />
              ) : (
                <PrimaryButton title={"Cadastrar"} fn={validateFields} />
              )}
            </View>

            <TouchableOpacity onPress={goToSignIn}>
              <Text style={{ fontSize: 16 }}>
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
