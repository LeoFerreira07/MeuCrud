import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import styles from "../styles/styles";
import { createPerson, updatePerson } from "../servers/peopleCrud";

export default function AddEditScreen({ route, navigation }) {
  // tenta pegar a pessoa passada como parâmetro
  const person = route.params?.person;

  // inicializa os estados com os dados da pessoa (se existir) ou vazio
  const [firstName, setFirstName] = useState(person?.firstName || "");
  const [lastName,  setLastName]  = useState(person?.lastName  || "");
  const [email,     setEmail]     = useState(person?.email     || "");

  async function save() {
    const data = { firstName, lastName, email };

    if (person) {
      // modo edição: atualiza a pessoa existente
      await updatePerson(person.id, data);
    } else {
      // modo criação: cria uma nova pessoa
      await createPerson(data);
    }

    navigation.goBack(); // volta para a tela anterior
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Salvar" onPress={save} />
      <Button title="Cancelar" onPress={() => navigation.goBack()} />
    </View>
  );
}
