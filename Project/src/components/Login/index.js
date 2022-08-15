import React from "react";
import { Button, Text, View } from "react-native";
import { styles } from "./styles";


export function Login({ navigation, route }) {
  console.log(route)
  return (
    <View style={styles.Container}>
      <Text style={styles.text}>Página de Login here. Your id: {route.params.id}</Text>
      <Button title={"Voltar para página Home"} onPress={() => navigation.goBack()}/>
    </View>
  );
}