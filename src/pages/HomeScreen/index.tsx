import React from "react";
import { FlatList, Text, View } from "react-native";

import { Container, ContainerOptions, Options } from "./styles";

function HomeScreen({ navigation }) {
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

  return (
    <>
      <Container>
        <Text style={{  }}>Escolha sua função</Text>
        <ContainerOptions>
          <FlatList
            style={{ margin: 5 }}
            columnWrapperStyle={{ flex: 1, justifyContent: "space-around", marginBottom: 20 }}
            data={optionsList}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <>
                <Options onPress={() => navigation.navigate(`${item.screen}`)}>
                  <Text style={{color: 'white',  fontWeight: 'bold'}}>{item?.title}</Text>
                </Options>
              </>
            )}
          />
        </ContainerOptions>
      </Container>
    </>
  );
}

export default HomeScreen;
