import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";
import { Context as UserContext } from "../../context/userContext";

const Profile = () => {
  const { stateUser } = useContext(UserContext);
  const infoUser = stateUser.infos; 
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.backgroundWrapper}>
        <ImageBackground
          source={{
            uri: "https://codeforce.com.br/wp-content/uploads/2020/08/ux-design-experiencia-do-usuario-codeforce-1024x768.png",
          }}
          style={styles.backgroundImage}
        />
      </View>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg",
          }}
          style={styles.profileImage}
        />
        <View style={styles.profileDetails}>
          <Text style={styles.name}>
            {infoUser.primeiroNome + " " + infoUser.sobrenome}{" "}
          </Text>
          <Text style={styles.profession}>
            <Text style={styles.bullet}>• {stateUser.papel === 'Professor' ? 'Professor'  : stateUser.team?.nome ? stateUser.team.nome +' - '+ stateUser.infosAluno.funcao : 'Sem time'}</Text>
          </Text>
        </View>
        
      </View>
    </ScrollView>
  );
};

export default Profile;
