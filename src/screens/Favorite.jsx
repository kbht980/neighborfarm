import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Favorite() {
  return (
    <View>
      <StatusBar style='light' />
      <Text>お気に入り</Text>
    </View>
  );
}
