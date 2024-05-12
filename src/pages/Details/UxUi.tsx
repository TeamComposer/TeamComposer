import React from "react";
import { ScrollView, View } from "react-native";

import { Container, TextTitle, SubTitle, TextOptions, Input } from "./styles";
import Gradient from "../../components/Gradient";
import CustomDropDown from "../../components/CustomDropDown";
import PrimaryButton from "../../components/PrimaryButton";

function DetailsUxUi() {
  return (
    <>
      <Container>
        {/* <Gradient /> */}
        <ScrollView>
          <View style={{ alignItems: "center", marginTop: 8 }}>
            <TextTitle>UX/UI</TextTitle>
          </View>

          <View style={{ padding: 16 }}>
            <SubTitle>
              O profissional de UX/UI projeta e desenvolve a experiência
              completa do usuário em sites, aplicativos e softwares. Eles
              utilizam princípios de design centrado no usuário para criar
              interfaces atrativas e intuitivas, garantindo uma experiência
              satisfatória. Colaboram com equipes de desenvolvimento para
              integrar design e funcionalidade, realizam testes de usabilidade e
              feedback do usuário para melhorias contínuas. Com habilidades em
              design, pesquisa de usuário e comunicação, contribuem para
              interfaces eficientes e uma experiência positiva do usuário.
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
                º Conhecimento em design centrado no usuário (UX/UI)
              </TextOptions>
              <TextOptions>
                º Habilidade em ferramentas de design (por exemplo, Adobe XD, Sketch, Figma)
              </TextOptions>
              <TextOptions>º Capacidade de colaborar com equipes de desenvolvimento e front end</TextOptions>
              <TextOptions>
                º Experiência em testes de usabilidade e feedback do usuário
              </TextOptions>
              <TextOptions>
                º Boas habilidades de comunicação e pesquisa de usuário

              </TextOptions>
            </View>

            <TextTitle>Qual a sua senioridade?</TextTitle>
            <CustomDropDown placeholder={"FIGMA"} />
            <CustomDropDown placeholder={"ADOBE XD"} />
            <CustomDropDown placeholder={"INVISION"} />
            <CustomDropDown placeholder={"SKETCH"} />
            <CustomDropDown placeholder={"PROTO.IO"} />
            <CustomDropDown placeholder={"ADOBE ILUSTRATOR"} />

            <TextTitle>Possui mais alguma habilidade?</TextTitle>
            <Input placeholder="Descreva-as" multiline={true} />

            <PrimaryButton title={"Me candidatar"} fn={() => {}} />
          </View>
        </ScrollView>
      </Container>
    </>
  );
}

export default DetailsUxUi;
