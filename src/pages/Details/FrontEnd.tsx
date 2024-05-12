import React from "react";
import { ScrollView, View } from "react-native";

import { Container, TextTitle, SubTitle, TextOptions, Input } from "./styles";
import Gradient from "../../components/Gradient";
import CustomDropDown from "../../components/CustomDropDown";
import PrimaryButton from "../../components/PrimaryButton";

function DetailsFrontEnd() {
  return (
    <>
      <Container>
        {/* <Gradient /> */}
        <ScrollView >
          <View style={{ alignItems: "center", marginTop: 8 }}>
            <TextTitle>Front-End</TextTitle>
          </View>

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

            <View style={{ paddingBottom: 12, paddingHorizontal: 12, marginBottom: 8 }}>
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
              <TextOptions >
                º aprendizado contínuo Boas habilidades de comunicação
              </TextOptions>
            </View>

            <TextTitle>Qual a sua senioridade?</TextTitle>
            <CustomDropDown placeholder={"HTML"} />
            <CustomDropDown placeholder={"CSS"} />
            <CustomDropDown placeholder={"JAVA SCRIPT"} />
            <CustomDropDown placeholder={"REACT NATIVE"} />
            <CustomDropDown placeholder={"VUE.JS"} />
            <CustomDropDown placeholder={"ANGULAR"} />

            <TextTitle>Possui mais alguma habilidade?</TextTitle>
            <Input placeholder="Descreva-as" multiline={true}/>

            <PrimaryButton title={"Me candidatar"} fn={() => {}} />
          </View>
        </ScrollView>
      </Container>
    </>
  );
}

export default DetailsFrontEnd;
