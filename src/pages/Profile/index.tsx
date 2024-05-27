import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

function Profile({ navigation }) {
  //teste
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>UX</Text>
        <Text style={styles.headerText}>UI</Text>
      </View>
      <View style={styles.profileCard}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://img.freepik.com/fotos-gratis/retrato-de-uma-jovem-linda-modelo-de-pe-e-sorrindo-para-a-camera-foto-de-alta-qualidade_144627-75055.jpg' }} 
        />
        <Text style={styles.name}>
          Ana Silva <Text style={styles.flower}>🌺</Text>
        </Text>
        <View style={styles.stars}>
          <Text>⭐⭐⭐⭐⭐</Text>
        </View>
        <View style={styles.ux}>
          <Text>UX/UI</Text>
        </View>
        <ScrollView style={styles.description}>
          <Text style={styles.descriptionText}>
            Olá! Sou a Ana Silva, estudante do 6º período de Engenharia de Software e profissional de UX/UI. Estou sempre em busca de novos desafios e oportunidades para aprimorar minhas habilidades. Com uma paixão pela experiência do usuário e um background técnico sólido, estou animada para aplicar meus conhecimentos em projetos criativos e inovadores. Estou aberta a colaborações e pronta para contribuir para o sucesso de projetos de desenvolvimento de software. Vamos criar experiências incríveis juntos!
          </Text>
        </ScrollView>
        <View style={styles.socialIcons}>
          <Image
            style={styles.icon}
            source={{ uri: 'https://freelogopng.com/images/all_img/1691730813discord-icon-png.png' }} 
          />
          <Image
            style={styles.icon}
            source={{ uri: 'https://freelogopng.com/images/all_img/1661938251whatsapp-logo-png.png' }} 
          />
          <Image
            style={styles.icon}
            source={{ uri: 'https://freelogopng.com/images/all_img/1658587303instagram-png.png' }} 
          />
          <Image
            style={styles.icon}
            source={{ uri: 'https://freelogopng.com/images/all_img/1656996409linkedin-symbol.png' }} 
          />
        </View>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e3b64',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileCard: {
    backgroundColor: '#2e5481',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    width: '90%',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 22,
    marginVertical: 10,
    color: '#fff',
  },
  flower: {
    color: '#ff69b4',
  },
  stars: {
    marginBottom: 10,
    color: 'gold',
  },
  ux: {
    marginBottom: 10,
    color: '#fff',
  },
  description: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    textAlign: 'left',
    fontSize: 14,
    maxHeight: 150,
    marginVertical: 10,
    color: '#000',
  },
  descriptionText: {
    color: '#000',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  icon: {
    width: 40,
    height: 40,
  },
  logoutButton: {
    marginTop: 10,
  },
  logoutText: {
    color: 'red',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#1e3b64',
  },
  footerIcon: {
    width: 24,
    height: 24,
  },
});

export default Profile;