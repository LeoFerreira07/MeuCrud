import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../styles/styles";
import { deletePerson } from "../servers/peopleCrud";

export default function CardPersonal({ item, navigation, refresh }) {
  return (
    <View style={styles.card}>
      {/* Informações da pessoa */}
      <View>
        <Text style={styles.name}>
          {item.firstName} {item.lastName}
        </Text>
        <Text style={styles.email}>{item.email}</Text>
        <Text style={styles.phone}>{item.phone}</Text>
      </View>

      {/* Botões de ação */}
      <View>
        <Button
          title="Editar"
          onPress={() => navigation.navigate("AddEdit", { person: item })}
        />
        <Button
          title="Deletar"
          onPress={async () => {
            await deletePerson(item.id);
            refresh(); // atualiza a lista após deletar
          }}
        />
      </View>
    </View>
  );
}
