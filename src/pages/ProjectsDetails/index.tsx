import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";

import { Container, TextTitle, SubTitle, TextOptions, Input } from "./styles";
import Gradient from "../../components/Gradient";
import CustomDropDown from "../../components/CustomDropDown";
import PrimaryButton from "../../components/PrimaryButton";
import Ionicons from '@expo/vector-icons/Ionicons';

function ProjectsDetails({ navigation }) {
  return (
    <>
      <Container>
        {/* CRIAR TELA DE DETALHES DO PROJETO */}
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

export default ProjectsDetails;
