import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Icon from "react-native-vector-icons/FontAwesome";

import HomeScreen from "../screens/HomeScreen";
import ShopScreen from "../screens/ShopScreen";
import Favorite from "../screens/Favorite";
import Info from "../screens/Info";
import PurchaseHistory from "../screens/PurchaseHistory";
import Settlement from "../screens/Settlement";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

export default function PurchaseStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#696969" },
        headerTintColor: "#fff",
        headerTitle: "購入履歴",
      }}
    >
      <Stack.Screen
        name='Purchase'
        component={PurchaseHistory}
        options={{
          title: "購入履歴",
          // headerLeft: () => <HeaderLeft />
        }}
        // options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
