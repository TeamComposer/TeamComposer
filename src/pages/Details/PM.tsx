import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";

import { Container, TextTitle, SubTitle, TextOptions, Input } from "./styles";
import Gradient from "../../components/Gradient";
import CustomDropDown from "../../components/CustomDropDown";
import PrimaryButton from "../../components/PrimaryButton";
import Ionicons from '@expo/vector-icons/Ionicons';

function DetailsPM({ navigation }) {
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
            <CustomDropDown placeholder={"JIRA"} />
            <CustomDropDown placeholder={"TRELLO"} />
            <CustomDropDown placeholder={"AGILE (SCRUM/KANBAN)"} />
            <CustomDropDown placeholder={"ASANA"} />
            <CustomDropDown placeholder={"BALSAMIQ"} />
            <CustomDropDown placeholder={"BASECAMP"} />

            <TextTitle>Possui mais alguma habilidade?</TextTitle>
            <Input placeholder="Descreva-as" multiline={true} />

            <PrimaryButton title={"Me candidatar"} fn={() => {}} />
          </View>
        </ScrollView>
      </Container>
    </>
  );
}

export default DetailsPM;
