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

import { useNavigation } from "@react-navigation/native";

const cardStyle = {
  backgroundColor: "#b9c42f",
};

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  // const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{ cardStyle }}
      // options={({ navigation }) => (
      //   <Icon
      //     name='bars'
      //     size={24}
      //     onPress={() => {
      //       navigation.openDrawer();
      //     }}
      //     style={{ paddingLeft: 20 }}
      //   />
      // )}
    >
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: "ネイバーファーム",
          // headerLeft: () => <HeaderLeft />
        }}
        options={{ headerShown: false }}
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
