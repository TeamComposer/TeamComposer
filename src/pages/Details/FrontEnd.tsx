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
import useApi from "../../hooks/useApi";
import { Context as UserContext } from "../../context/userContext";

function DetailsFrontEnd({ navigation }) {
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
          funcao: "UX/UI",
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
              Front-End
            </TextTitle>
          </TouchableOpacity>

          <ImageTop
            source={{
              uri: "https://miro.medium.com/v2/resize:fit:1200/1*2xsLeLNqKwIoGOQlw8O6Ug.png",
            }}
          />

          <View style={{ padding: 16 }}>
            <SubTitle>
              O profissional de front- end é responsável pelo desenvolvimento da
              interface do usuário em sites, aplicativos e softwares. Utilizando
              tecnologias como HTML, CSS e JavaScript, eles criam layouts
              atrativos e funcionais, garantindo uma experiência intuitiva para
              o usuário. Além disso, colaboram com equipes de back end para
              integrar a interface com o sistema e realizam testes para garantir
              usabilidade, compatibilidade e desempenho. Com habilidades em
              design e comunicação, esses profissionais garantem interfaces
              atualizadas e eficientes, contribuindo para uma experiência
              positiva do usuário.
            </SubTitle>

            <TextTitle>Requisitos mínimos:</TextTitle>

            <View
              style={{
                paddingBottom: 12,
                paddingHorizontal: 12,
                marginBottom: 8,
              }}
            >
              <TextOptions>
                º Conhecimento em HTML, CSS e JavaScript Familiaridade com
                design de
              </TextOptions>
              <TextOptions>
                º interface do usuário Habilidades básicas de resolução de
                problemas
              </TextOptions>
              <TextOptions>
                º Compreensão de ferramentas de desenvolvimento web Conhecimento
                de
              </TextOptions>
              <TextOptions>
                º frameworks populares (ex: React, Angular, Vue.js) Mentalidade
                de
              </TextOptions>
              <TextOptions>
                º aprendizado contínuo Boas habilidades de comunicação
              </TextOptions>
            </View>

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

export default DetailsFrontEnd;
