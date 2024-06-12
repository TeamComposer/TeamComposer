import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; // Importando o ícone
import styles from './styles';

const Profile = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.backgroundWrapper}>
        <ImageBackground 
          source={{ uri: 'https://codeforce.com.br/wp-content/uploads/2020/08/ux-design-experiencia-do-usuario-codeforce-1024x768.png' }} 
          style={styles.backgroundImage} 
        />
      </View>
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://img.freepik.com/fotos-gratis/retrato-de-uma-jovem-linda-modelo-de-pe-e-sorrindo-para-a-camera-foto-de-alta-qualidade_144627-75055.jpg' }} 
          style={styles.profileImage} 
        />
        <View style={styles.profileDetails}>
          <View style={styles.stars}>
            {Array(5).fill(null).map((_, index) => (
              <FontAwesome key={index} name="star" size={20} color="#FFD700" style={styles.star} />
            ))}
          </View>
        </View>
        <TouchableOpacity style={styles.menuButton} onPress={() => { /* Função a ser executada quando o botão é pressionado */ }}>
          <MaterialIcons name="more-vert" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>Ana Silva <Text style={styles.emoji}>🌺</Text></Text>
        <Text style={styles.profession}><Text style={styles.bullet}>• </Text>UX/UI</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.body}>
          <Text style={styles.description}>
            Olá! Sou a Ana Silva, estudante do 6º período de Engenharia de Software e profissional de UX/UI. Estou sempre em busca de novos desafios e oportunidades para aprimorar minhas habilidades. Com uma paixão pela experiência do usuário e um background técnico sólido, estou animada para aplicar meus conhecimentos em projetos criativos e inovadores. Estou aberta a colaborações e pronta para contribuir para o sucesso de projetos de desenvolvimento de software. Vamos criar experiências incríveis juntos!
          </Text>
        </View>
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton} accessible accessibilityLabel="Discord">
            <Image source={{ uri: 'https://freelogopng.com/images/all_img/1691730813discord-icon-png.png' }} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton} accessible accessibilityLabel="WhatsApp">
            <Image source={{ uri: 'https://freelogopng.com/images/all_img/1661938251whatsapp-logo-png.png' }} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton} accessible accessibilityLabel="Instagram">
            <Image source={{ uri: 'https://freelogopng.com/images/all_img/1658587303instagram-png.png' }} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton} accessible accessibilityLabel="LinkedIn">
            <Image source={{ uri: 'https://freelogopng.com/images/all_img/1656996409linkedin-symbol.png' }} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Profile;
