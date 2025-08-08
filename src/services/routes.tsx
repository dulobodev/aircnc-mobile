<<<<<<< HEAD
import { View } from "react-native";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "../pages/login";
import { Book } from "../pages/book";
import { List } from "../pages/list";

export type RootStackParamList = {
  Login: undefined
  List: undefined
  Book: { id: string }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName ="Login" screenOptions ={{headerShown:false}}>
        
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='List' component={List} />
          <Stack.Screen name='Book' component={Book} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

=======
import { View } from "react-native";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "../pages/login";
import { Book } from "../pages/book";
import { List } from "../pages/list";

export type RootStackParamList = {
  Login: undefined
  List: undefined
  Book: { id: string }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName ="Login" screenOptions ={{headerShown:false}}>
        
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='List' component={List} />
          <Stack.Screen name='Book' component={Book} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

>>>>>>> a6d4a9b (componente Spotlist feito)
export default Routes