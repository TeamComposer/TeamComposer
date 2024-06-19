import React, { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import DialogInput from "react-native-dialog-input";

import {
  Container,
  ContainerOptions,
  Options,
  OptionsProfessor,
  FloatButton,
} from "./styles";
import useApi from "../../hooks/useApi";
import PrimaryButton from "../../components/PrimaryButton";
import { Context as UserContext } from "../../context/userContext";

function TeamDetails({ navigation }) {
  const { stateUser } = useContext(UserContext);
  const typeUser = stateUser.papel;

  const route = useRoute();
  const { team } = route.params;
  const [membros, setMembros] = useState([]);
  const [projeto, setProjeto] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showInput, setShowInput] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getMembros();
    setRefreshing(false);
  }, []);

  const apiCall = useApi({
    method: "GET",
    url: `/teams/${team._id}`,
  });

  async function getMembros() {
    try {
      setLoading(true);
      const response = await apiCall();
      if (response.status === 200) {
        setMembros(response.data.membros);
        setProjeto(response.data.projeto);
        setError(false);
      } else {
        setError(true);
        Alert.alert(
          "Atenção",
          response.error || "Falha ao consultar os times."
        );
      }
    } catch (e) {
      Alert.alert("Atenção", e);
    } finally {
      setLoading(false);
    }
  }

  function returnSenioridade(nivel) {
    if (nivel === 0) {
      return "Aprendiz";
    } else if (nivel === 1) {
      return "Júnior";
    } else if (nivel === 2) {
      return "Pleno";
    } else if (nivel === 3) {
      return "Senior";
    } else {
      return "Aprendiz";
    }
  }

  useEffect(() => {
    getMembros();
  }, []);

  function renderAlunos() {
    return (
      <>
        <Container>
          <ContainerOptions>
            <>
              <TouchableOpacity
                style={{
                  width: "100%",
                  height: 52,
                  backgroundColor: "#2C4060",
                  marginBottom: 16,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 12,
                  borderRadius: 12,
                }}
                onPress={() => {
                  navigation.navigate("ProjectsDetails", { projeto: projeto });
                }}
              >
                <Text
                  style={{ fontSize: 24, color: "white", fontWeight: "bold" }}
                >
                  {team?.nome}
                </Text>
                {projeto?.nome && (
                  <Text
                    style={{ fontSize: 16, color: "white", fontWeight: "bold" }}
                  >
                    {projeto?.nome}
                  </Text>
                )}
              </TouchableOpacity>

              <FlatList
                data={membros}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }
                keyExtractor={(item) => item._id}
                style={{
                  marginBottom: 120,
                }}
                renderItem={({ item }) => (
                  <>
                    <OptionsProfessor onPress={() => {}}>
                      <Text
                        style={{
                          color: "white",
                          fontSize: 26,
                          fontWeight: "bold",
                        }}
                      >
                        {item?.aluno?.userId?.primeiroNome +
                          " " +
                          item?.aluno?.userId?.sobrenome}
                      </Text>

                      <Text
                        style={{
                          color: "white",
                          fontSize: 16,
                          fontWeight: "bold",
                        }}
                      >
                        {item?.aluno?.funcao +
                          " - " +
                          returnSenioridade(item?.aluno?.nivel)}
                      </Text>
                    </OptionsProfessor>
                  </>
                )}
              />
            </>
          </ContainerOptions>
        </Container>
      </>
    );
  }

  return renderAlunos();
}

export default TeamDetails;
