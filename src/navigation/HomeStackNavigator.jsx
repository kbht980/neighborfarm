import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Icon from "react-native-vector-icons/FontAwesome";

import HomeScreen from "../screens/HomeScreen";
import ShopScreen from "../screens/ShopScreen";
import Favorite from "../screens/Favorite";
import Info from "../screens/Info";
import PurchaseHistory from "../screens/PurchaseHistory";
import Settlement from "../screens/Settlement";

const cardStyle = {
  backgroundColor: "#008080",
};

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ cardStyle }}>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: "ネイバーファーム",
          // headerLeft: () => <HeaderLeft />
        }}
        // options={{ headerShown: false }}
      />
      <Stack.Screen name='Shop' component={ShopScreen} />
      <Stack.Screen
        name='お気に入り'
        component={Favorite}
        options={{
          title: "お気に入りタイトル",
          // headerLeft: () => <HeaderLeft />
        }}
      />
      <Stack.Screen
        name='お知らせ'
        component={Info}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name='購入履歴'
        component={PurchaseHistory}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name='QRコード決済'
        component={Settlement}
        // options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
