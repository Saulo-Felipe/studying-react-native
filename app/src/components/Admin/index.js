import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Profile } from "./Profile";
import { Edition } from "./Edition";
import { Registration } from "./Registration";
import { Header } from "./Header";
import Ionicons from 'react-native-vector-icons/Ionicons';

import { styles } from "./styles";

const Tab = createBottomTabNavigator();



export function Admin({ navigation }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await AsyncStorage.getItem("@user");

      if (response) {
        setUser(JSON.parse(response));
      } else {
        navigation.navigate("Login");
      }
    })();
  }, []);

  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: styles.tabBottom,
      tabBarActiveTintColor: "#fff",
      tabBarInactiveTintColor: "#999",
      tabBarLabelStyle: styles.tabBottomLabel,
      headerTitle: (props) => <Header {...props} navigation={navigation} />,
    }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) =>
            <Ionicons
              name={"person-circle-outline"}
              size={22}
              color={color}
            />,
        }}
        name={"Profile"}
        component={Profile}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({color}) =>
            <Ionicons
              name={"archive-outline"}
              size={22}
              color={color}
            />
        }}
        name={"Registration"}
        component={Registration}
      />

      <Tab.Screen 
        options={{
          tabBarIcon: ({color}) =>
            <Ionicons
              name={"create-outline"}
              size={22}
              color={color}
            />
        }}
   
        name={"Edition"} 
        component={Edition} 
      />
    </Tab.Navigator>
  );
}