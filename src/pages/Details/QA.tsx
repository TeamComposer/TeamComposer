import React from "react";
import { ScrollView, View } from "react-native";

import { Container, TextTitle, SubTitle, TextOptions, Input } from "./styles";
import Gradient from "../../components/Gradient";
import CustomDropDown from "../../components/CustomDropDown";
import PrimaryButton from "../../components/PrimaryButton";

function DetailsQA() {
  return (
    <>
      <Container>
        {/* <Gradient /> */}
        <ScrollView>
          <View style={{ alignItems: "center", marginTop: 8 }}>
            <TextTitle>QA</TextTitle>
          </View>

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
            <CustomDropDown placeholder={"Nível de conhecimento"} />

            <TextTitle>Possui mais alguma habilidade?</TextTitle>
            <Input placeholder="Descreva-as" multiline={true} />

            <PrimaryButton title={"Me candidatar"} fn={() => {}} />
          </View>
        </ScrollView>
      </Container>
    </>
  );
}

export default DetailsQA;
