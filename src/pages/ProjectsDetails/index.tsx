import React from "react";
import { ScrollView, TouchableOpacity, View, StyleSheet, Text, Image, Linking } from "react-native";

import { Container, TextTitle, SubTitle, Input } from "./styles";
import Gradient from "../../components/Gradient";
import CustomDropDown from "../../components/CustomDropDown";
import PrimaryButton from "../../components/PrimaryButton";
import Ionicons from '@expo/vector-icons/Ionicons';

function ProjectsDetails({ navigation }) {
  const handleOpenLink = async () => {
    const url = "https://www.example.com"; // URL do link externo
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error("Erro ao abrir o link:", error);
    }
  };
  

  return (
    <Container style={styles.container}>
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
          <Ionicons name="arrow-back" size={32} color={"black"} />
        </TouchableOpacity>
        <Image
          style={styles.imageTop}
          source={{ uri: 'https://img.freepik.com/fotos-premium/tecnologia-digital-em-exibicao-html5-no-editor-para-desenvolvimento-de-sites-codigo-html-do-site-na-foto-do-close-up-de-exibicao-do-laptop_372999-962.jpg?w=826' }} 
        />
        <View style={{ padding: 16 }}>
          <TextTitle style={styles.Titletext}>Projeto A</TextTitle>
          <ScrollView style={styles.description}>
            <Text style={styles.descriptionText}>
              O projeto "SmartTask" é um aplicativo de gerenciamento de tarefas intuitivo e eficiente, projetado para melhorar a produtividade individual e em equipe. Com uma interface limpa e amigável, os usuários podem facilmente criar, atribuir e acompanhar tarefas, definindo prazos e prioridades. Além disso, o SmartTask oferece recursos avançados de colaboração, como compartilhamento de arquivos e comunicação em tempo real, para facilitar a cooperação entre membros da equipe. Com integração a calendários e notificações personalizadas, o aplicativo ajuda os usuários a se manterem organizados e focados em suas metas.
            </Text>
          </ScrollView>

          <TextTitle style={styles.Titletext}>Links</TextTitle>
          <ScrollView style={styles.description2}>
       
          <View style={styles.Viewlink}>
            <Text style={styles.descriptionText2}>1. Jira: </Text>
            <TouchableOpacity style={styles.linkButton} onPress={handleOpenLink}>
              <Text style={styles.linkButtonText}>Jira</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.Viewlink}>
            <Text style={styles.descriptionText2}>2. Trello: </Text>
            <TouchableOpacity style={styles.linkButton} onPress={handleOpenLink}>
              <Text style={styles.linkButtonText}>Trello</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.Viewlink}>
            <Text style={styles.descriptionText2}>3. Asana: </Text>
            <TouchableOpacity style={styles.linkButton} onPress={handleOpenLink}>
              <Text style={styles.linkButtonText}>Asana</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.Viewlink}>
            <Text style={styles.descriptionText2}>4. Monday.com: </Text>
            <TouchableOpacity style={styles.linkButton} onPress={handleOpenLink}>
              <Text style={styles.linkButtonText}>Monday.com</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.Viewlink}>
            <Text style={styles.descriptionText2}>5. Microsoft Azure DevOps: </Text>
            <TouchableOpacity style={styles.linkButton} onPress={handleOpenLink}>
              <Text style={styles.linkButtonText}>Azure DevOps</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.Viewlink}>
            <Text style={styles.descriptionText2}>6. GitLab: </Text>
            <TouchableOpacity style={styles.linkButton} onPress={handleOpenLink}>
              <Text style={styles.linkButtonText}>GitLab</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.Viewlink}>
            <Text style={styles.descriptionText2}>6. Bitbucket: </Text>
            <TouchableOpacity style={styles.linkButton} onPress={handleOpenLink}>
              <Text style={styles.linkButtonText}>Bitbucket</Text>
            </TouchableOpacity>
            </View>

        </ScrollView>

          
        </View>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DADADA',
  },
  Titletext: {
    color: 'black',
    paddingTop: 10,
    paddingBottom: 0,
    marginBottom: 0,
  },
  Viewlink: {
    flexDirection: 'row', 
    alignItems: 'center',
    margin: 1,
    padding: 1,
  },
  links: {
    display: 'flex',
    flexDirection: 'row',
  },
  description: {
    backgroundColor: '#4A6BA0',
    borderRadius: 10,
    padding: 10,
    textAlign: 'left',
    fontSize: 14,
    maxHeight: 'auto',
    marginVertical: 10,
    color: '#000',
  },
  descriptionText: {
    color: '#fff',
    textAlign: 'justify',
    fontSize: 17,
  },
  description2: {
    backgroundColor: '#a2a7a5',
    flexDirection: 'column', // Corrigido de 'collunm' para 'column'
    borderRadius: 10,
    padding: 10,
    textAlign: 'left',
    fontSize: 14,
    maxHeight: 'auto',
    marginVertical: 10,
    color: '#000',
  },
  
  descriptionText2: {
    color: '#000',
    textAlign: 'justify',
    fontSize: 17,
    padding: 1,
  },
  linkButton: {
    backgroundColor: '#a2a7a5',
    borderRadius: 10,
    padding: 0,
    alignItems: 'center',
    marginVertical: 5,
  },
  linkButtonText: {
    color: '#0075FF',
    fontSize: 17,
    textDecorationLine: 'underline',
  },
  imageTop: {
    borderRadius: 10,
    width: '95%',
    height: 200,
    marginBottom: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default ProjectsDetails;
