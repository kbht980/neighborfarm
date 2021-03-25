import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Icon from "react-native-vector-icons/FontAwesome";

import HomeScreen from "../screens/HomeScreen";
import ShopScreen from "../screens/ShopScreen";
import Favorite from "../screens/Favorite";
import Info from "../screens/Info";
import PurchaseHistory from "../screens/PurchaseHistory";
import Settlement from "../screens/Settlement";
import LoginScreen from "../screens/LoginScreen";

import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator style={styles.container}>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: "販売所を探す",
          // headerLeft: () => <HeaderLeft />
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
      <Stack.Screen name='Shop' component={ShopScreen} />
      <Stack.Screen
        name='Favorite'
        component={Favorite}
        options={{
          title: "お気に入りタイトル",
          // headerLeft: () => <HeaderLeft />
        }}
      />
      <Stack.Screen
        name='Info'
        component={Info}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name='PurchaseHistory'
        component={PurchaseHistory}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Settlement'
        component={Settlement}
        // options={{ headerShown: false }}
      />

      <Stack.Screen name='LoginScreen' component={LoginScreen} />
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
