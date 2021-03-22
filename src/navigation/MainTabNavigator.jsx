import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// importScreen
import HomeStackNavigator from "./HomeStackNavigator";
import Favorite from "../screens/Favorite";
import Info from "../screens/Info";
import PurchaseHistory from "../screens/PurchaseHistory";
import Settlement from "../screens/Settlement";

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={HomeStackNavigator}
        options={{
          tabBarLabel: "販売所",
          tabBarIcon: ({ color, size }) => (
            <Feather name='map-pin' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Favorite'
        component={Favorite}
        options={{
          tabBarLabel: "お気に入り",
          tabBarIcon: ({ color, size }) => (
            <Feather name='heart' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Info'
        component={Info}
        options={{
          tabBarLabel: "お知らせ",
          tabBarIcon: ({ color, size }) => (
            <Feather name='bell' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='PurchaseHistory'
        component={PurchaseHistory}
        options={{
          tabBarLabel: "購入履歴",
          tabBarIcon: ({ color, size }) => (
            <Feather name='clock' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Settlement'
        component={Settlement}
        options={{
          tabBarLabel: "QR決済",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='qrcode-scan'
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
