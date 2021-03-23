import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";

export default function Favorite() {
  return (
    <ScrollView>
      {/* 初め */}
      <TouchableOpacity style={styles.FavoriteListItem} onPress={() => {}}>
        <View>
          <Text style={styles.FavoriteListItemTitle} numberOfLines={1}>
            お知らせ
          </Text>
          <Text style={styles.FavoriteListItemDate}>テキストテスト</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              Alert.alert("Are you ready?");
            }}
          >
            <Feather name='x' size={16} color='#B0B0B0' />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      {/* 終わり */}
      {/* 初め */}
      <TouchableOpacity style={styles.FavoriteListItem} onPress={() => {}}>
        <View>
          <Text style={styles.FavoriteListItemTitle} numberOfLines={1}>
            お知らせ
          </Text>
          <Text style={styles.FavoriteListItemDate}>テキストテスト</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              Alert.alert("Are you ready?");
            }}
          >
            <Feather name='x' size={16} color='#B0B0B0' />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      {/* 終わり */}
      {/* 初め */}
      <TouchableOpacity style={styles.FavoriteListItem} onPress={() => {}}>
        <View>
          <Text style={styles.FavoriteListItemTitle} numberOfLines={1}>
            お知らせ
          </Text>
          <Text style={styles.FavoriteListItemDate}>テキストテスト</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              Alert.alert("Are you ready?");
            }}
          >
            <Feather name='x' size={16} color='#B0B0B0' />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      {/* 終わり */}
      {/* 初め */}
      <TouchableOpacity style={styles.FavoriteListItem} onPress={() => {}}>
        <View>
          <Text style={styles.FavoriteListItemTitle} numberOfLines={1}>
            お知らせ
          </Text>
          <Text style={styles.FavoriteListItemDate}>テキストテスト</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              Alert.alert("Are you ready?");
            }}
          >
            <Feather name='x' size={16} color='#B0B0B0' />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      {/* 終わり */}
      {/* 初め */}
      <TouchableOpacity style={styles.FavoriteListItem} onPress={() => {}}>
        <View>
          <Text style={styles.FavoriteListItemTitle} numberOfLines={1}>
            お知らせ
          </Text>
          <Text style={styles.FavoriteListItemDate}>テキストテスト</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              Alert.alert("Are you ready?");
            }}
          >
            <Feather name='x' size={16} color='#B0B0B0' />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      {/* 終わり */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  FavoriteListItem: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.15)",
  },
  FavoriteListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  FavoriteListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: "#848484",
  },
});
