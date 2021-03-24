import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

export default function Favorite(props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container}>
      <Button
        label='登録orサインイン実行'
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
