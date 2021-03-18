import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Favorite from "./src/screens/Favorite";
import Info from "./src/screens/Info";
import TopMap from "./src/screens/TopMap";
import PurchaseHistory from "./src/screens/PurchaseHistory";
import Settlement from "./src/screens/Settlement";
import LoginScreen from "./src/screens/LoginScreen";
import PwForget from "./src/screens/PwForget";

import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='LoginScreen'
          screenOptions={{
            headerStyle: { backgroundColor: "#A9D159" },
            headerTitleStyle: { color: "#ffffff" },
            headerTitle: "NeibhborFarm",
            headerTintColor: "#ffffff",
            headerBackTitle: "Back",
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled: true,
            gestureDirection: "horizontal",
          }}
        >
          <Stack.Screen name='Favorite' component={Favorite} />
          <Stack.Screen name='Info' component={Info} />
          <Stack.Screen name='TopMap' component={TopMap} />
          <Stack.Screen name='PurchaseHistory' component={PurchaseHistory} />
          <Stack.Screen name='Settlement' component={Settlement} />
          <Stack.Screen name='LoginScreen' component={LoginScreen} />
          <Stack.Screen name='PwForget' component={PwForget} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
