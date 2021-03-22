import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ShopScreen from "../screens/ShopScreen";
import Favorite from "../screens/Favorite";
import Info from "../screens/Info";
import PurchaseHistory from "../screens/PurchaseHistory";
import Settlement from "../screens/Settlement";

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        // options={{ headerShown: false }}
      />
      <Stack.Screen name='Shop' component={ShopScreen} />
      <Stack.Screen
        name='お気に入り'
        component={Favorite}
        options={{ headerShown: true }}
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
