import React, { useContext, useState } from "react";
import { Alert, ScrollView, TouchableOpacity, View } from "react-native";

import {
  Container,
  TextTitle,
  SubTitle,
  TextOptions,
  Input,
  ImageTop,
} from "./styles";
import Gradient from "../../components/Gradient";
import CustomDropDown from "../../components/CustomDropDown";
import PrimaryButton from "../../components/PrimaryButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Context as UserContext } from "../../context/userContext";
import useApi from "../../hooks/useApi";

function DetailsPM({ navigation }) {
  const [selected, setSelectedLocal] = useState();
  const { stateUser, setTeams } = useContext(UserContext);

  const apiCall = useApi({
    method: "POST",
    url: "/cadastro/cadastroAluno",
  });

  async function candidatarUsuario() {
    try {
      const response = await apiCall(
        {},
        {
          userId: stateUser.infos._id,
          funcao: "PM",
          nivel: selected,
        }
      );

      if (response.status === 200) {
        Alert.alert(
          "Atenção!",
          "Os times estão endo montados e balanceados, aguarde o aviso do professor responsável e tente realizar o login novamente!"
        );
        navigation.navigate("Login");
      } else {
        Alert.alert(
          "Atenção!",
          response.error || "Falha ao candidatar-se ao times."
        );
      }
    } catch (e) {
      Alert.alert("Atenção!", e);
    }
  }
  return (
    <>
      <Container>
        {/* <Gradient /> */}
        <ScrollView>
          <TouchableOpacity
            style={{
              alignItems: "center",
              marginTop: 8,
              flexDirection: "row",
              marginLeft: 16,
            }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons name="arrow-back" size={32} color={"white"} />
            <TextTitle style={{ marginLeft: 16, marginBottom: 0 }}>
              Product Manager
            </TextTitle>
          </TouchableOpacity>

          <ImageTop
            source={{
              uri: "data:image/jpeg;base64,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",
            }}
          />

          <View style={{ padding: 16 }}>
            <SubTitle>
              O Gerente de Projeto (PM) lidera e coordena equipes para garantir
              o sucesso de projetos de desenvolvimento. Eles utilizam
              metodologias como Agile ou Scrum, organizam tarefas e monitoram o
              progresso do projeto. Colaboram com equipes de desenvolvimento
              para integrar a interface do usuário com o sistema, assegurando
              qualidade e eficiência. Com habilidades em liderança, comunicação
              e resolução de problemas, conduzem projetos de sucesso e garantem
              uma experiência positiva do usuário.
            </SubTitle>

            <TextTitle>Requisitos mínimos:</TextTitle>

            <View
              style={{
                paddingBottom: 12,
                paddingHorizontal: 12,
                marginBottom: 8,
              }}
            >
              <TextOptions>º Experiência em gestão de projetos</TextOptions>
              <TextOptions>
                º Conhecimento em metodologias ágeis (por exemplo, Scrum,
                Kanban)
              </TextOptions>
              <TextOptions>
                º Habilidades de liderança e comunicação
              </TextOptions>
              <TextOptions>
                º Capacidade de organização e planejamento
              </TextOptions>
              <TextOptions>
                º Compreensão básica de desenvolvimento de software
              </TextOptions>
              <TextOptions>
                º Aptidão para resolver problemas e tomar decisões assertivas
              </TextOptions>
            </View>

            <TextTitle>Qual a sua senioridade?</TextTitle>
            <CustomDropDown
              placeholder={"Selecione"}
              setSelected={setSelectedLocal}
            />

            <TextTitle>Possui mais alguma habilidade?</TextTitle>
            <Input placeholder="Descreva-as" multiline={true} />

            <PrimaryButton
              title={"Me candidatar"}
              fn={() => candidatarUsuario()}
            />
          </View>
        </ScrollView>
      </Container>
    </>
  );
}

export default DetailsPM;
