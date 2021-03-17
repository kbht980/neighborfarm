import React from "react";
import { View, Text } from "react-native";
import Button from "../components/Button";

export default function TopMap(props) {
  function handlePress() {
    props.navigation.navigate("Favorite");
  }

  return (
    <View>
      <Text>マップ表示</Text>
      <Button label='ボタンテスト' onPress={handlePress} />
    </View>
  );
}
