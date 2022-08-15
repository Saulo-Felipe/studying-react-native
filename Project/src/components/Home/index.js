import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";

export function Home({ navigation }) {
  return (
    <View style={styles.Container}>
      <Text style={styles.text}>Página de Home here</Text>
      <Button title={"Ir para Login"} onPress={() => navigation.navigate("Login", { id: 30 })}/>
    </View>
  );
}