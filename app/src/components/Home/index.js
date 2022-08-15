import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export function Home({ navigation }) {
  return (
    <View style={styles.Container}>

      <TouchableOpacity 
        onPress={() => navigation.navigate("Login")} 
        style={styles.optionContainer}
      >
        <AntDesign style={styles.optionIcon} name="login" />
        <Text style={styles.optionText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.navigate("Tracking")} 
        style={styles.optionContainer}
      >
        <Entypo style={styles.optionIcon} name="location" />
        <Text style={styles.optionText}>Rastreio</Text>
      </TouchableOpacity>

    </View>
  );
}