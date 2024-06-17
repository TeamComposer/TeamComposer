import React, { useContext, useState } from "react";
import { Alert, ScrollView, TouchableOpacity, View } from "react-native";

import { Container, TextTitle, SubTitle, TextOptions, Input,  ImageTop } from "./styles";
import Gradient from "../../components/Gradient";
import CustomDropDown from "../../components/CustomDropDown";
import PrimaryButton from "../../components/PrimaryButton";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Context as UserContext } from "../../context/userContext";
import useApi from "../../hooks/useApi";

function DetailsQA({ navigation }) {
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
          funcao: "QA",
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
            QA
            </TextTitle>
          </TouchableOpacity>

          <ImageTop
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPzo6n-S_-FcWF2mfNGMqgKCnKmcJy_mJDMA&s",
            }}
          />

          <View style={{ padding: 16 }}>
            <SubTitle>
              O profissional de QA realiza testes para garantir a qualidade de
              sites, aplicativos e softwares antes do lançamento. Utilizando
              testes manuais e automatizados, verificam usabilidade,
              compatibilidade e desempenho. Colaboram com equipes de
              desenvolvimento para resolver bugs e assegurar que o produto final
              atenda aos padrões de qualidade. Com habilidades analíticas e de
              comunicação, contribuem para a entrega de produtos confiáveis e
              satisfatórios para os usuários.
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
                º Conhecimento em técnicas de teste (manuais e automatizados)
              </TextOptions>
              <TextOptions>
                º Habilidades analíticas para identificar e relatar bugs
              </TextOptions>
              <TextOptions>º Familiaridade com ferramentas de QA</TextOptions>
              <TextOptions>
                º Capacidade de colaborar com equipes de desenvolvimento
              </TextOptions>
              <TextOptions>
                º Boas habilidades de comunicação e documentação
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

export default DetailsQA;
