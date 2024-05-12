import React from "react";
import { ScrollView, View } from "react-native";

import { Container, TextTitle, SubTitle, TextOptions, Input } from "./styles";
import Gradient from "../../components/Gradient";
import CustomDropDown from "../../components/CustomDropDown";
import PrimaryButton from "../../components/PrimaryButton";

function DetailsFullStack() {
  return (
    <>
      <Container>
        {/* <Gradient /> */}
        <ScrollView>
          <View style={{ alignItems: "center", marginTop: 8 }}>
            <TextTitle>FullStack</TextTitle>
          </View>

          <View style={{ padding: 16 }}>
            <SubTitle>
              O profissional fullstack é responsável pelo desenvolvimento
              completo de sites, aplicativos e softwares, cobrindo tanto o
              front- end quanto o back- end. Eles utilizam uma variedade de
              tecnologias, incluindo HTML, CSS, JavaScript e linguagens de
              programação como Python, Java ou JavaScript (Node.js), para criar
              interfaces de usuário intuitivas e funcionais, além de desenvolver
              a lógica do sistema. Colaboram com equipes para garantir a
              integração perfeita entre todas as partes do aplicativo e realizam
              testes abrangentes para garantir a qualidade e o desempenho do
              produto.
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
                º Conhecimento em desenvolvimento front end e back end
              </TextOptions>
              <TextOptions>
                º Habilidade em tecnologias como HTML, CSS, JavaScript e linguagens de programação (ex: Python, Java, Node.js)
              </TextOptions>
              <TextOptions>º Capacidade de integração entre o front end e back end</TextOptions>
              <TextOptions>
                º Experiência em testes abrangentes para garantir usabilidade e desempenho
              </TextOptions>
              <TextOptions>
                º Habilidades em design e desenvolvimento de interfaces de usuário intuitivas
              </TextOptions>
              <TextOptions>
                º Boa comunicação e trabalho em equipe
              </TextOptions>
            </View>

            <TextTitle>Qual a sua senioridade?</TextTitle>
            <CustomDropDown placeholder={"PYTHON"} />
            <CustomDropDown placeholder={"JAVA"} />
            <CustomDropDown placeholder={"JAVA SCRIPT (NODE.JS)"} />
            <CustomDropDown placeholder={"HTML"} />
            <CustomDropDown placeholder={"MYSQL"} />
            <CustomDropDown placeholder={"CSS"} />

            <TextTitle>Possui mais alguma habilidade?</TextTitle>
            <Input placeholder="Descreva-as" multiline={true} />

            <PrimaryButton title={"Me candidatar"} fn={() => {}} />
          </View>
        </ScrollView>
      </Container>
    </>
  );
}

export default DetailsFullStack;
