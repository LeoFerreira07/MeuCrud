import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button } from "react-native";
import styles from "../styles/styles";
import { getPeople } from "../servers/peopleCrud";
import CardPersonal from "./CardPersonal";

export default function HomeScreen({ navigation }) {
  // estado da lista de pessoas
  const [people, setPeople] = useState([]);

  // função para carregar dados da API
  async function loadPeople() {
    const data = await getPeople();
    setPeople(data);
  }

  // executa ao abrir a tela (array vazio = executa apenas uma vez)
  useEffect(() => {
    loadPeople();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pessoas</Text>

      <Button
        title="Adicionar Pessoa"
        onPress={() => navigation.navigate("AddEdit")}
      />

      <FlatList
        data={people}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardPersonal
            item={item}
            navigation={navigation}
            refresh={loadPeople}
          />
        )}
      />
    </View>
  );
}
