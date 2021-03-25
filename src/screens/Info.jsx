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
      <StatusBar barStyle='light-content' hidden={false} />

      {/* 初め */}
      <TouchableOpacity
        style={styles.FavoriteListItem}
        onPress={() => {
          Alert.alert("個別のページへスタック");
        }}
      >
        <View>
          <Feather name='github' size={30} />
        </View>
        <View>
          <Text style={styles.FavoriteListItemTitle} numberOfLines={1}>
            久保広賢製作所がモロヘイヤを出品しました
          </Text>
          <Text style={styles.FavoriteListItemDate}>2021年3月24日13:25</Text>
        </View>
        <View>
          <Feather name='chevron-right' size={16} color='#B0B0B0' />
        </View>
      </TouchableOpacity>
      {/* 終わり */}
      {/* 初め */}
      <TouchableOpacity
        style={styles.FavoriteListItem}
        onPress={() => {
          Alert.alert("個別のページへスタック");
        }}
      >
        <View>
          <Feather name='github' size={30} />
        </View>
        <View>
          <Text style={styles.FavoriteListItemTitle} numberOfLines={1}>
            久保広賢製作所がモロヘイヤを出品しました
          </Text>
          <Text style={styles.FavoriteListItemDate}>2021年3月24日13:25</Text>
        </View>
        <View>
          <Feather name='chevron-right' size={16} color='#B0B0B0' />
        </View>
      </TouchableOpacity>
      {/* 終わり */}
      {/* 初め */}
      <TouchableOpacity
        style={styles.FavoriteListItem}
        onPress={() => {
          Alert.alert("個別のページへスタック");
        }}
      >
        <View>
          <Feather name='github' size={30} />
        </View>
        <View>
          <Text style={styles.FavoriteListItemTitle} numberOfLines={1}>
            久保広賢製作所がモロヘイヤを出品しました
          </Text>
          <Text style={styles.FavoriteListItemDate}>2021年3月24日13:25</Text>
        </View>
        <View>
          <Feather name='chevron-right' size={16} color='#B0B0B0' />
        </View>
      </TouchableOpacity>
      {/* 終わり */}
      {/* 初め */}
      <TouchableOpacity
        style={styles.FavoriteListItem}
        onPress={() => {
          Alert.alert("個別のページへスタック");
        }}
      >
        <View>
          <Feather name='github' size={30} />
        </View>
        <View>
          <Text style={styles.FavoriteListItemTitle} numberOfLines={1}>
            久保広賢製作所がモロヘイヤを出品しました
          </Text>
          <Text style={styles.FavoriteListItemDate}>2021年3月24日13:25</Text>
        </View>
        <View>
          <Feather name='chevron-right' size={16} color='#B0B0B0' />
        </View>
      </TouchableOpacity>
      {/* 終わり */}
      {/* 初め */}
      <TouchableOpacity
        style={styles.FavoriteListItem}
        onPress={() => {
          Alert.alert("個別のページへスタック");
        }}
      >
        <View>
          <Feather name='github' size={30} />
        </View>
        <View>
          <Text style={styles.FavoriteListItemTitle} numberOfLines={1}>
            久保広賢製作所がモロヘイヤを出品しました
          </Text>
          <Text style={styles.FavoriteListItemDate}>2021年3月24日13:25</Text>
        </View>
        <View>
          <Feather name='chevron-right' size={16} color='#B0B0B0' />
        </View>
      </TouchableOpacity>
      {/* 終わり */}
      {/* 初め */}
      <TouchableOpacity
        style={styles.FavoriteListItem}
        onPress={() => {
          Alert.alert("個別のページへスタック");
        }}
      >
        <View>
          <Feather name='github' size={30} />
        </View>
        <View>
          <Text style={styles.FavoriteListItemTitle} numberOfLines={1}>
            久保広賢製作所がモロヘイヤを出品しました
          </Text>
          <Text style={styles.FavoriteListItemDate}>2021年3月24日13:25</Text>
        </View>
        <View>
          <Feather name='chevron-right' size={16} color='#B0B0B0' />
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
