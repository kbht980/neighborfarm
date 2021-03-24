import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import Button from "../components/Button";

export default function HomeScreen(props) {
  // function handlePress() {
  //   props.navigation.navigate("Favorite");
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ネイバーファーム</Text>
      <Text style={styles.text}>Map表示</Text>
      <Text style={styles.textAlignCenter}>
        {"\n"}ドロワーメニューは右端からスワイプ（仮）{"\n"}
        右上ハンバーガー設置予定
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
  },
  textAlignCenter: {
    textAlign: "center",
  },
});
