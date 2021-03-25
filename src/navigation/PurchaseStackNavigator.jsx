import React from "react";
import { StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import ShopScreen from "../screens/ShopScreen";
import Favorite from "../screens/Favorite";
import Info from "../screens/Info";
import PurchaseHistory from "../screens/PurchaseHistory";
import Settlement from "../screens/Settlement";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

export default function PurchaseStackNavigator() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Purchase'
        component={PurchaseHistory}
        options={{
          title: "購入履歴",
          headerLeft: () => (
            <FontAwesome
              name='navicon'
              onPress={() => {
                navigation.openDrawer();
              }}
              title='Info'
              color='#000000'
              style={styles.navicon}
              size={20}
            />
          ),
        }}
        // options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  navicon: {
    position: "absolute",
    left: 30,
  },
});
