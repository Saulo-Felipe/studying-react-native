import { View, Text, TouchableOpacity } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons";

import { styles } from "./styles";

export function Header({children: title, navigation: { navigate }}) {

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigate("Home")}>
        <Ionicons name={"home-outline"} size={20}/>
      </TouchableOpacity>

      <Text>{title}</Text>

      <TouchableOpacity onPress={() => navigate("Login")}>
        <Ionicons name={"log-out-outline"} size={20}/>
      </TouchableOpacity>
    </View>
  );
}