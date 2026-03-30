import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  TextInput,
  ActivityIndicator,
  Alert,
} from "react-native";
import styles from "../styles/styles";
import { getPeople } from "../servers/peopleCrud";
import CardPersonal from "./CardPersonal";

export default function HomeScreen({ navigation }) {
  const [people, setPeople]   = useState([]);
  const [search, setSearch]   = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  async function loadPeople() {
    try {
      setLoading(true);
      setError(null);
      const data = await getPeople();
      setPeople(data);
    } catch (e) {
      setError("Não foi possível carregar os dados.");
      Alert.alert(
        "Erro de conexão",
        "Não foi possível carregar os dados. Verifique sua conexão.",
        [{ text: "Tentar novamente", onPress: loadPeople }]
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPeople();
  }, []);

  // filtro local por firstName
  const filtered = people.filter((p) =>
    p.firstName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pessoas</Text>

      <Button
        title="Adicionar Pessoa"
        onPress={() => navigation.navigate("AddEdit")}
      />

      <TextInput
        style={styles.searchInput}
        placeholder="Buscar por nome..."
        value={search}
        onChangeText={setSearch}
      />

      {loading && <ActivityIndicator size="large" color="#4CAF50" />}

      {error && <Text style={styles.errorText}>{error}</Text>}

      {!loading && !error && (
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CardPersonal
              item={item}
              navigation={navigation}
              refresh={loadPeople}
            />
          )}
        />
      )}
    </View>
  );
}
