import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/FontAwesome";
import { FontAwesome } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import ShopScreen from "../screens/ShopScreen";
import Favorite from "../screens/Favorite";
import Info from "../screens/Info";
import PurchaseHistory from "../screens/PurchaseHistory";
import Settlement from "../screens/Settlement";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

export default function InfoStackNavigator(props) {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Info'
        component={Info}
        options={{
          title: "お知らせ",
          // headerLeft: () => <HeaderLeft />
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.openDrawer();
              }}
            >
              <FontAwesome
                name='navicon'
                title='Info'
                color='#000000'
                style={styles.navicon}
                size={20}
              />
            </TouchableOpacity>
          ),
        }}
        // options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  navicon: {
    position: "absolute",
    left: 30,
  },
});
