import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function About(props) {
  return (
    // <ScreenView style={styles.container}>
    //   <Modal
    //     animationType='slide'
    //     transparent={true}
    //     onRequestClose={() => {
    //       Alert.alert("Modal has been closed.");
    //     }}
    //   >
    //     <Text style={styles.text}>モーダルテスト</Text>
    //   </Modal>
    // </ScreenView>

    <ScrollView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.goBack();
        }}
      >
        <Ionicons name='ios-close' size={30} style={styles.close} />
      </TouchableOpacity>
      <View style={styles.contentArea}>
        <Text style={styles.title}>ネイバーファームについて</Text>
        <Text style={styles.content}>
          内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る
          内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る内容が入る
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentArea: {
    marginHorizontal: 30,
    marginTop: 100,
  },
  title: {
    fontSize: 25,
  },
  content: {
    marginTop: 20,
    fontSize: 18,
  },
  close: {
    position: "absolute",
    right: 40,
    top: 60,
  },
});
