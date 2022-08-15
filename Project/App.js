import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from "./src/components/Home";
import { Login } from './src/components/Login';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen name={"Home"} component={Home}/>
        <Stack.Screen name={"Login"} component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}