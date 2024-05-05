import React from "react";
import { FlatList, Text, View } from "react-native";

import { Container, ContainerOptions, Options } from "./styles";

function HomeScreen() {
  const optionsList = [
    {
      id: 1,
      title: "Front-End",
      goBack: "ScreenName",
    },
    {
      id: 2,
      title: "Back-End",
      goBack: "ScreenName",
    },
    {
      id: 3,
      title: "QA",
      goBack: "ScreenName",
    },
    {
      id: 4,
      title: "FullStack",
      goBack: "ScreenName",
    },
    {
      id: 5,
      title: "UX/UI",
      goBack: "ScreenName",
    },
    {
      id: 6,
      title: "PM",
      goBack: "ScreenName",
    },
  ];

  return (
    <>
      <Container>
        <Text style={{ fontSize: 24 }}>Escolha sua função</Text>
        <ContainerOptions>
          <FlatList
            style={{ margin: 5 }}
            columnWrapperStyle={{ flex: 1, justifyContent: "space-around", marginBottom: 20 }}
            data={optionsList}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <>
                <Options>
                  <Text style={{color: 'white', fontSize: '26px', fontWeight: 'bold'}}>{item?.title}</Text>
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
