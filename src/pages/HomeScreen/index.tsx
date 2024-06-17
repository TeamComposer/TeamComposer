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
  const { stateUser, setTeam } = useContext(UserContext);
  const typeUser = stateUser.papel;

  const [teams, setTeams] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showInput, setShowInput] = useState(false);
  const [showInputNewProject, setShowInputNewProject] = useState(false);
  const [showInputDescriptionNewProject, setShowInputDescriptionNewProject] =
    useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [newProjectData, setNewProjectData] = useState({ nome: "" });

  const onRefresh = React.useCallback(() => {
    if (typeUser === "Professor") {
      getTeams();
    } else if (stateUser.teamid) {
      getTeamsId();
    }
  }, []);

  const apiCallTeamCompostion = useApi({
    method: "GET",
    url: "/teamComposition",
  });

  const apiCallTeamCompostionFalseAlunos = useApi({
    method: "GET",
    url: "/autoGenerate/autoGenerate",
  });

  const apiCallTeamCompostionInserirProjetoGrupo = useApi({
    method: "GET",
    url: "/teamComposition/randomProject",
  });

  const apiCall = useApi({
    method: "GET",
    url: "/teams",
  });

  const apiCallTeamId = useApi({
    method: "GET",
    url: `/teams/${stateUser.teamid}`,
  });

  const apiCallCreateTeam = useApi({
    method: "POST",
    url: "/teams",
  });

  const apiCallCreateProject = useApi({
    method: "POST",
    url: "/projetos",
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

  function alertOpcoes() {
    Alert.alert("Atenção!", "O que deseja fazer?", [
      {
        text: "Cancelar",
      },
      {
        text: "Designar alunos aos times",
        onPress: () => {
          designarTimes();
        },
      },
      {
        text: "Designar projetos aos times",
        onPress: () => {
          designarProjetos();
        },
      },
    ]);
  }

  async function createNewProject(descricao) {
    try {
      const response = await apiCallCreateProject(
        {},
        {
          nome: newProjectData.nome,
          descricao: descricao,
        }
      );

      if (response.status === 200 || response.status === 201 || response.data) {
        Alert.alert("Atenção", "Projeto criado com sucesso!");
      } else {
        Alert.alert(
          "Atenção",
          String(response.status) +
            String(response.error || " Falha ao cadastrar o novo projeto.")
        );
      }
      setShowInputNewProject(false);
      setShowInputDescriptionNewProject(false);
    } catch (e) {
      Alert.alert(
        "Atenção",
        String(" Falha ao cadastrar o novo projeto: " + e)
      );
      setShowInputNewProject(false);
      setShowInputDescriptionNewProject(false);
    }
  }

  function designarProjetos() {
    Alert.alert(
      "Atenção!",
      "Deseja realmente desisgnar os projetos entre os times? Essa ação não pode ser desfeita.",
      [
        {
          text: "Cancelar",
        },
        {
          text: "Designar",
          onPress: () => {
            continueDesignarProjetos();
          },
        },
      ]
    );
  }

  async function continueDesignarProjetos() {
    try {
      setLoading(true);
      const response = await apiCallTeamCompostionInserirProjetoGrupo({}, {});

      if (response.status === 200 || response.data) {
        getTeams();
      } else {
        Alert.alert(
          "Atenção",
          String(response.status) +
            String(
              response.error || " Falha ao designar os projetos aos times."
            )
        );
      }
      setShowInput(false);
    } catch (e) {
      Alert.alert(
        "Atenção",
        String("Falha ao designar os projetos aos times: " + e)
      );
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

  async function getTeamsId() {
    try {
      setLoading(true);
      const response = await apiCallTeamId({ id: stateUser.teamid }, {});
      if (response.status === 200) {
        setTeam(response.data);
        setTeams(response.data);
        setError(false);
      } else {
        setError(true);
        Alert.alert(
          "Atenção",
          response.error || "Falha ao consultar o seu time."
        );
      }
    } catch (e) {
      Alert.alert("Atenção!", e);
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

  function inputsOptions() {
    Alert.alert("Atenção!", "O que deseja fazer?", [
      {
        text: "Cancelar",
      },
      {
        text: "Criar time",
        onPress: () => {
          setShowInput(true);
        },
      },
      {
        text: "Criar projeto",
        onPress: () => {
          setShowInputNewProject(true);
        },
      },
    ]);
  }

  useEffect(() => {
    if (typeUser === "Professor") {
      getTeams();
    } else if (stateUser.teamid) {
      getTeamsId();
    }
  }, [stateUser.teamid]);
  function renderAlunoScreen() {
    if (stateUser.teamid) {
      return (
        <>
          <Container>
            <Text style={{ fontSize: 24 }}>
              Bem vindo, {stateUser.infos.primeiroNome}
            </Text>

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
            ) : (
              <>
                <ContainerOptions>
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
                      navigation.navigate("ProjectsDetails", {
                        projeto: stateUser.team.projeto,
                      });
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 24,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      {stateUser.team.nome}
                    </Text>
                    {stateUser.team.projeto.nome && (
                      <Text
                        style={{
                          fontSize: 16,
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                        {stateUser.team.projeto.nome}
                      </Text>
                    )}
                  </TouchableOpacity>
                  <FlatList
                    data={stateUser.team.membros}
                    refreshControl={
                      <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                      />
                    }
                    keyExtractor={(item) => item._id}
                    style={{
                      marginBottom: 40,
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
                            {item?.aluno.userId.primeiroNome +
                              " " +
                              item?.aluno.userId.sobrenome}
                          </Text>

                          <Text
                            style={{
                              color: "white",
                              fontSize: "16px",
                              fontWeight: "bold",
                            }}
                          >
                            {item?.aluno.funcao +
                              " - " +
                              returnSenioridade(item?.aluno.nivel)}
                          </Text>
                        </OptionsProfessor>
                      </>
                    )}
                  />
                </ContainerOptions>
              </>
            )}
          </Container>
        </>
      );
    } else
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
                keyExtractor={(item) => String(item.id)}
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
                  keyExtractor={(item) => item._id}
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
                          Projeto: {item?.projeto?.nome}
                        </Text>

                        <View style={{width: '90%', backgroundColor: 'white', height: 1, padding: 1, margin: 10}}></View>
                          

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

        {!loading && (
          <FloatButton onPress={() => inputsOptions()}>
            <Ionicons name="add" color={"white"} size={26} />
          </FloatButton>
        )}

        {teams.length > 0 && !loading && (
          <FloatButton
            style={{ bottom: 78 }}
            onPress={() => alertOpcoes()}
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

        <DialogInput
          isDialogVisible={showInputNewProject}
          title={"Adicionar projeto - Nome"}
          message={""}
          hintInput={"Nome do projeto"}
          cancelText={"Cancelar"}
          submitText={"Cadastrar"}
          submitInput={(inputText) => {
            if (!inputText.length) return;
            setNewProjectData((curr) => ({
              ...curr,
              nome: inputText,
            }));
            setShowInputNewProject(false);
            setShowInputDescriptionNewProject(true);
          }}
          closeDialog={() => {
            setNewProjectData({ nome: "" });
            setShowInputNewProject(false);
          }}
        ></DialogInput>

        <DialogInput
          isDialogVisible={showInputDescriptionNewProject}
          title={"Adicionar projeto - Descricao"}
          message={""}
          hintInput={"Descricao do projeto"}
          cancelText={"Cancelar"}
          submitText={"Cadastrar"}
          submitInput={(inputText) => {
            if (!inputText.length) return;
            createNewProject(inputText);
          }}
          closeDialog={() => {
            setNewProjectData({ nome: "" });
            setShowInputDescriptionNewProject(false);
          }}
        ></DialogInput>
      </>
    );
  }

  return typeUser === "Aluno" ? renderAlunoScreen() : renderProfessorScreen();
}

export default HomeScreen;
