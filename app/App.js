import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from "./src/components/Home";
import { Login } from './src/components/Login';
import { Tracking } from './src/components/Tracking';
import { Admin } from './src/components/Admin';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen 
          name={"Home"} 
          component={Home}
          options={{
            title: "WEFLOG",
            headerStyle: { backgroundColor: "#F58634" },
            headerTintColor: "white",
            headerTitleAlign: "center"
          }} 
        />

        <Stack.Screen 
          name={"Login"} 
          component={Login} 
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen name={"Tracking"} component={Tracking} />

        <Stack.Screen 
          name={"Admin"} 
          component={Admin} 
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}