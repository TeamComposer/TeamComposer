import React from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';  

function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://img.freepik.com/fotos-gratis/retrato-de-uma-jovem-linda-modelo-de-pe-e-sorrindo-para-a-camera-foto-de-alta-qualidade_144627-75055.jpg' }}
        />
        <Text style={styles.name}>
          Ana Silva <Text style={styles.flower}>🌺</Text>
        </Text>
        <View style={styles.stars}>
          <Text style={styles.starsText}>⭐⭐⭐⭐⭐</Text>
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

export default Profile;
