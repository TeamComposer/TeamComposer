import React, { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  RefreshControl,
  Text,
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
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showInput, setShowInput] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    // getMembros();
  }, []);

  const apiCall = useApi({
    method: "GET",
    url: "/teams",
  });

  async function getMembros() {
    try {
      setLoading(true);
      const response = await apiCall({});

      if (response.status === 200) {
        setTeams(response.data);
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

  async function addTeam(nameTeam: string) {
    try {
      if (!nameTeam.length) {
        return;
      }

      const response = await apiCallCreateTeam(
        {},
        {
          nome: String(nameTeam),
        }
      );
      if (response.status === 200 || response.status === 201 || response.data) {
        getMembros();
      } else {
        Alert.alert(
          "Atenção",
          String(response.status) +
            String(response.error || " Falha ao cadastrar o novo time.")
        );
      }
      setShowInput(false);
    } catch (e) {
      Alert.alert("Atenção", String(" Falha ao cadastrar o novo time: " + e));
      setShowInput(false);
    }
  }

  function formatarData(dataISO) {
    const data = new Date(dataISO);

    const padZero = (num) => num.toString().padStart(2, "0");

    const dia = padZero(data.getUTCDate());
    const mes = padZero(data.getUTCMonth() + 1); // Os meses são indexados a partir de 0
    const ano = data.getUTCFullYear();
    const horas = padZero(data.getUTCHours());
    const minutos = padZero(data.getUTCMinutes());

    return `${dia}/${mes}/${ano} - ${horas}:${minutos}`;
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
              <View
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
              >
                <Text
                  style={{ fontSize: 24, color: "white", fontWeight: "bold" }}
                >
                  {team.nome}
                </Text>
              </View>

              <FlatList
                data={team.membros}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }
                keyExtractor={(item) => item.id}
                style={{
                  marginBottom: 120,
                }}
                renderItem={({ item }) => (
                  <>
                    <OptionsProfessor onPress={() => {}}>
                      <Text
                        style={{
                          color: "white",
                          fontSize: "26px",
                          fontWeight: "bold",
                        }}
                      >
                        {item?._id}
                      </Text>
                    </OptionsProfessor>
                  </>
                )}
              />
            </>
          </ContainerOptions>
        </Container>

        <FloatButton onPress={() => setShowInput(true)}>
          <Ionicons name="link" color={"white"} size={26} />
        </FloatButton>
      </>
    );
  }

  return renderAlunos();
}

export default TeamDetails;
