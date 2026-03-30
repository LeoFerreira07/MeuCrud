import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5"
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 20
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },
  name: {
    fontSize: 14
  },
  email: {
    fontSize: 10
  },
  phone: {
    fontSize: 10,
    color: "#666"
  },
  button: {
    padding: 10,
    backgroundColor: "#4CAF50",
    borderRadius: 5
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 8,
    marginVertical: 10,
    backgroundColor: "#fff"
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 10
  }
});
