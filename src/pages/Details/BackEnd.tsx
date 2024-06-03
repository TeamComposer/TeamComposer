import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";

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

function DetailsBackEnd({ navigation }) {
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
              Back-End
            </TextTitle>
          </TouchableOpacity>

          <ImageTop
            source={{
              uri: "data:image/jpeg;base64,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",
            }}
          />

          <View style={{ padding: 16 }}>
            <SubTitle>
              O profissional de back- end desenvolve a lógica e funcionalidades
              dos sistemas, utilizando linguagens como Python, Java, entre
              outras. Eles cuidam dos servidores, bancos de dados e aplicativos
              de servidor, garantindo a integração com a interface do usuário.
              Além disso, realizam testes de desempenho e segurança para
              garantir a estabilidade e confiabilidade do sistema. Com
              habilidades em arquitetura de software e comunicação eficaz,
              contribuem para a construção de sistemas robustos e escaláveis.
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
                º Conhecimento em linguagens de programação back end (Python,
                Java, etc.)
              </TextOptions>
              <TextOptions>
                º Familiaridade com servidores e bancos de dados
              </TextOptions>
              <TextOptions>
                º Habilidades em integração de sistemas e APIs
              </TextOptions>
              <TextOptions>
                º Capacidade de realizar testes de desempenho e segurança
              </TextOptions>
              <TextOptions>
                º Conhecimento em arquitetura de software
              </TextOptions>
              <TextOptions>
                º Boas habilidades de comunicação e trabalho em equipe
              </TextOptions>
            </View>

            <TextTitle>Qual a sua senioridade?</TextTitle>
            <CustomDropDown placeholder={"PYTHON"} />
            <CustomDropDown placeholder={"JAVA"} />
            <CustomDropDown placeholder={"JAVA SCRIPT (NODE.JS)"} />
            <CustomDropDown placeholder={"RUBY"} />
            <CustomDropDown placeholder={"PHP"} />
            <CustomDropDown placeholder={"C#"} />

            <TextTitle>Possui mais alguma habilidade?</TextTitle>
            <Input placeholder="Descreva-as" multiline={true} />

            <PrimaryButton title={"Me candidatar"} fn={() => {}} />
          </View>
        </ScrollView>
      </Container>
    </>
  );
}

export default DetailsBackEnd;
