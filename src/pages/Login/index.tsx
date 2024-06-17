import React, { useRef, useState, useContext } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Alert,
  TextInput,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import {
  Container,
  ContainerInputs,
  ContainerInputsCenter,
  Logo,
} from "./styles";
import Gradient from "../../components/Gradient";
import Input from "../../components/Input";
import PrimaryButton from "../../components/PrimaryButton";
import img from "../../assets/Logo_transparente_branca.png";
import useApi from "../../hooks/useApi";

import { Context as UserContext } from "../../context/userContext";

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const emailRef = useRef<TextInput>();
  const passwordRef = useRef<TextInput>();

  const { setInfos, setPapel, setTeamId, setInfosAluno } = useContext(UserContext);

  const apiCall = useApi({
    method: "POST",
    url: "/login",
  });

  async function validateLogin() {
    try {
      setLoading(true);
      if (email.length > 0 && password.length > 0) {
        if (
          !email.toLocaleLowerCase().trim().includes("@alunos.utfpr.edu.br") &&
          !email
            .toLocaleLowerCase()
            .trim()
            .includes("@professores.utfpr.edu.br") &&
          !email.toLocaleLowerCase().trim().includes("@professor")
        ) {
          Alert.alert(
            "Atenção!",
            "Email inválido, verifique se o mesmo pertence ao domínio da UTFPR."
          );
          return;
        }

        Keyboard.dismiss();

        const response = await apiCall(
          {},
          {
            email: email.trim().toLowerCase(),
            senha: password.trim(),
          }
        );

        if (response.status === 200) {
          if (response.data?.aluno?._id && !response.data?.aluno?.time) {
            Alert.alert(
              "Atenção!",
              "Os times estão endo montados e balanceados, aguarde o aviso do professor responsável e tente realizar o login novamente!"
            );
          } else if (response.data?.aluno?._id && response.data?.aluno?.time) {
            setTeamId(response.data?.aluno?.time);
            setInfos(response.data?.user || response.data);
            setPapel(response.data?.user?.papel || response.data.papel);
            setInfosAluno(response.data?.aluno)
            navigation.navigate("HomeScreen");
          } else {
            setInfos(response.data?.user || response.data);
            setPapel(response.data?.user?.papel || response.data.papel);
            navigation.navigate("HomeScreen");
          }
        } else {
          Alert.alert(
            "Atenção",
            response.error || "Falha ao realizar o login."
          );
        }
      } else {
        Alert.alert("Atenção!", "Preencha todos os campos.");
      }
    } catch (e) {
      Alert.alert("Atenção", "Falha ao realizar o login: " + e);
    } finally {
      setLoading(false);
    }
  }

  async function goToSignUp() {
    setEmail("");
    setPassword("");
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
      ></SafeAreaView>

      <Logo source={img} />

      <ContainerInputs>
        <ContainerInputsCenter>
          <View style={{ width: "100%" }}>
            <Input
              ref={emailRef}
              titleText="Email"
              placeHolder="aluno@alunos.utfpr.edu.br"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              returnKeyType="next"
              onSubmit={() => passwordRef.current.focus()}
            />

            <Input
              ref={passwordRef}
              titleText="Senha"
              placeHolder="ººººººº"
              keyboardType="visible-password"
              returnKeyType="done"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
              onSubmit={validateLogin}
            />

            {loading ? (
              <ActivityIndicator size={26} />
            ) : (
              <PrimaryButton title={"Login"} fn={validateLogin} />
            )}
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
    backgroundColor: "#DADADA",
  },
  Titletext: {
    color: "black",
    paddingTop: 10,
    paddingBottom: 0,
    marginBottom: 0,
  },
  Viewlink: {
    flexDirection: "row",
    alignItems: "center",
    margin: 1,
    padding: 1,
  },
  links: {
    display: "flex",
    flexDirection: "row",
  },
  description: {
    backgroundColor: "#4A6BA0",
    borderRadius: 10,
    padding: 10,
    textAlign: "left",
    fontSize: 14,
    maxHeight: "auto",
    marginVertical: 10,
    color: "#000",
  },
  descriptionText: {
    color: "#fff",
    textAlign: "justify",
    fontSize: 17,
  },
  description2: {
    backgroundColor: "#a2a7a5",
    flexDirection: "column",
    borderRadius: 10,
    padding: 10,
    textAlign: "left",
    fontSize: 14,
    maxHeight: "auto",
    marginVertical: 10,
    color: "#000",
  },

  descriptionText2: {
    color: "#000",
    textAlign: "justify",
    fontSize: 17,
    padding: 1,
  },
  linkButton: {
    backgroundColor: "#a2a7a5",
    borderRadius: 10,
    padding: 0,
    alignItems: "center",
    marginVertical: 5,
  },
  linkButtonText: {
    color: "#0075FF",
    fontSize: 17,
    textDecorationLine: "underline",
  },
  imageTop: {
    borderRadius: 10,
    width: "95%",
    height: 150,
    marginTop: -150,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default Login;
