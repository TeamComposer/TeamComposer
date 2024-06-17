import React, { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  RefreshControl,
  Text,
  View,
} from "react-native";
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

function HomeScreen({ navigation }) {
  const { stateUser } = useContext(UserContext);
  const typeUser = stateUser.papel;

  const [teams, setTeams] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showInput, setShowInput] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    getTeams();
  }, []);

  const apiCallTeamCompostion = useApi({
    method: "GET",
    url: "/teamComposition",
  });

  const apiCallTeamCompostionFalseAlunos = useApi({
    method: "GET",
    url: "/autoGenerate/autoGenerate",
  });

  const apiCall = useApi({
    method: "GET",
    url: "/teams",
  });

  const apiCallCreateTeam = useApi({
    method: "POST",
    url: "/teams",
  });

  const optionsList = [
    {
      id: 1,
      title: "Front-End",
      screen: "DetailsFrontEnd",
    },
    {
      id: 2,
      title: "Back-End",
      screen: "DetailsBackEnd",
    },
    {
      id: 3,
      title: "QA",
      screen: "DetailsQA",
    },
    {
      id: 4,
      title: "FullStack",
      screen: "DetailsFullStack",
    },
    {
      id: 5,
      title: "UX/UI",
      screen: "DetailsUxUi",
    },
    {
      id: 6,
      title: "PM",
      screen: "DetailsPM",
    },
  ];

  async function getTeams() {
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

  function designarTimes() {
    Alert.alert(
      "Atenção!",
      "Deseja realmente desisgnar os integrantes entre os times? Essa ação não pode ser desfeita.",
      [
        {
          text: "Cancelar",
        },
        {
          text: "Designar",
          onPress: () => {
            continueDesignar();
          },
        },
      ]
    );
  }

  async function continueDesignar() {
    try {
      setLoading(true);
      const response = await apiCallTeamCompostion({}, {});

      if (response.status === 200 || response.data) {
        Alert.alert("Atenção!", String(response.data));
        getTeams();
      } else {
        Alert.alert(
          "Atenção",
          String(response.status) +
            String(
              response.error || " Falha ao designar os integrantes aos times."
            )
        );
      }
      setShowInput(false);
    } catch (e) {
      Alert.alert(
        "Atenção",
        String("Falha ao designar os integrantes aos times: " + e)
      );
    } finally {
      setLoading(false);
    }
  }

  async function createFakeAlunos() {
    try {
      Alert.alert("Atenção!", "DEV: Deseja criar 40 usuários falsos?", [
        {
          text: "Cancelar",
        },
        {
          text: "Criar",
          onPress: async () => {
            setLoading(true);
            const response = await apiCallTeamCompostionFalseAlunos({}, {});
            if (response.status === 200 || response.data) {
              Alert.alert(
                "Atenção!",
                "DEV: Sucesso ao criar falsos integrantes."
              );
              getTeams();
            } else {
              Alert.alert(
                "Atenção",
                String(response.status) +
                  String(
                    response.error ||
                      "DEV: Falha ao criar os integrantes falsos dos times: "
                  )
              );
            }
            setShowInput(false);
          },
        },
      ]);
    } catch (e) {
      Alert.alert(
        "Atenção",
        String("DEV: Falha ao criar os integrantes falsos dos times: " + e)
      );
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
        getTeams();
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

  function viewTeam(data) {
    if (data) {
      if (!data?.membros?.length) {
        Alert.alert("Atenção", `O time '${data.nome}' não possui membros.`);
      } else navigation.navigate("TeamDetails", { team: data });
    }
  }

  useEffect(() => {
    if (typeUser === "Professor") {
      getTeams();
    }
  }, []);

  function renderAlunoScreen() {
    return (
      <>
        <Container>
          <Text style={{ fontSize: 24 }}>Escolha sua função</Text>
          <ContainerOptions>
            <FlatList
              columnWrapperStyle={{
                flex: 1,
                justifyContent: "space-around",
                marginBottom: 20,
              }}
              data={optionsList}
              numColumns={2}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <>
                  <Options
                    onPress={() => navigation.navigate(`${item.screen}`)}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: "26px",
                        fontWeight: "bold",
                      }}
                    >
                      {item?.title}
                    </Text>
                  </Options>
                </>
              )}
            />
          </ContainerOptions>
        </Container>
      </>
    );
  }

  function renderProfessorScreen() {
    return (
      <>
        <Container>
          <ContainerOptions>
            {loading ? (
              <>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <ActivityIndicator size={26} />
                  <Text style={{ fontSize: 24, marginBottom: 8 }}>
                    Buscando times, aguarde...
                  </Text>
                </View>
              </>
            ) : error ? (
              <>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <Text style={{ fontSize: 24, marginBottom: 8 }}>
                    Ocorreu um erro ao buscar os times.
                  </Text>
                  <PrimaryButton title={"Tentar novamente"} fn={getTeams} />
                </View>
              </>
            ) : (
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
                    Times
                  </Text>
                </View>

                <FlatList
                  data={teams}
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
                      <OptionsProfessor onPress={() => viewTeam(item)}>
                        <Text
                          style={{
                            color: "white",
                            fontSize: "26px",
                            fontWeight: "bold",
                          }}
                        >
                          {item?.nome}
                        </Text>

                        <Text
                          style={{
                            color: "white",
                            fontSize: "16px",
                            fontWeight: "bold",
                          }}
                        >
                          {"Qtde. membros: " + item?.membros.length}
                        </Text>

                        <Text
                          style={{
                            color: "white",
                            fontSize: "16px",
                            fontWeight: "bold",
                          }}
                        >
                          {"Criado em: " + formatarData(item?.criadoEm)}
                        </Text>
                      </OptionsProfessor>
                    </>
                  )}
                />
              </>
            )}
          </ContainerOptions>
        </Container>

{
  !loading &&

        <FloatButton onPress={() => setShowInput(true)}>
          <Ionicons name="add" color={"white"} size={26} />
        </FloatButton>
      }

        {teams.length > 0 && !loading && (
          <FloatButton
            style={{ bottom: 78 }}
            onPress={() => designarTimes()}
            onLongPress={() => (__DEV__ ? createFakeAlunos() : {})}
          >
            <Ionicons name="link" color={"white"} size={26} />
          </FloatButton>
        )}
        <DialogInput
          isDialogVisible={showInput}
          title={"Adicionar time"}
          message={""}
          hintInput={"Nome do time"}
          cancelText={"Cancelar"}
          submitText={"Cadastrar"}
          submitInput={(inputText) => {
            if (!inputText.length) return;

            addTeam(inputText);
          }}
          closeDialog={() => {
            setShowInput(false);
          }}
        ></DialogInput>
      </>
    );
  }

  return typeUser === "Aluno" ? renderAlunoScreen() : renderProfessorScreen();
}

export default HomeScreen;
