import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MainTabNavigator from "./MainTabNavigator";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerNavigationProp,
  DrawerContent,
} from "@react-navigation/drawer";
import {
  Feather,
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

// import drawerScreens
import About from "../drawerScreens/About";
import Account from "../drawerScreens/Account";
import Help from "../drawerScreens/Help";
import Notification from "../drawerScreens/Notification";
import Payment from "../drawerScreens/Payment";
import QuestionAndAnswer from "../drawerScreens/QuestionAndAnswer";
import Sell from "../drawerScreens/Sell";
import Setting from "../drawerScreens/Setting";
import Tutorial from "../drawerScreens/Tutorial";

const Drawer = createDrawerNavigator();

export default function DrawerNavi() {
  function DrawerContent() {
    return (
      <View style={styles.container}>
        <View style={styles.upSpace}>
          <TouchableOpacity style={styles.touchSpace} onPress={() => {}}>
            <AntDesign name='user' style={styles.icon} />
            <Text style={styles.touchText}>アカウント情報</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchSpace} onPress={() => {}}>
            <Ionicons name='md-play-circle-outline' style={styles.icon} />
            <Text style={styles.touchText}>チュートリアル</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchSpace} onPress={() => {}}>
            <MaterialCommunityIcons name='qrcode-scan' style={styles.icon} />
            <Text style={styles.touchText}>お支払い方法</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchSpace} onPress={() => {}}>
            <MaterialCommunityIcons name='bell-outline' style={styles.icon} />
            <Text style={styles.touchText}>通知</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchSpace} onPress={() => {}}>
            <FontAwesome5 name='carrot' style={styles.icon} />
            <Text style={styles.touchText}>ネイバーファームで販売する</Text>
          </TouchableOpacity>
        </View>
        {/* ここから下段 */}
        <View style={styles.downSpace}>
          <TouchableOpacity style={styles.touchSpace} onPress={() => {}}>
            <Text style={styles.touchTextDown}>Q&A</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchSpace} onPress={() => {}}>
            <Text style={styles.touchTextDown}>ヘルプ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchSpace} onPress={() => {}}>
            <Text style={styles.touchTextDown}>設定</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchSpace} onPress={() => {}}>
            <Text style={styles.touchTextDown}>ネイバーファームについて</Text>
          </TouchableOpacity>
          <Text style={styles.versionText}>version 1.01</Text>
        </View>
      </View>
    );
  }

  return (
    <Drawer.Navigator
      drawerPosition='left'
      // screenOptions={{
      //   headerShown: true,
      // }}
      // option={{
      //   headerRight: () => {
      //     return (
      //       <TouchableOpacity>
      //         <View style={styles.icons}>
      //           <Feather
      //             name='menu'
      //             size={24}
      //             color='#29416F'
      //             onPress={() => {
      //               return <FundTransferModal />;
      //             }}
      //           />
      //         </View>
      //       </TouchableOpacity>
      //     );
      //   },
      // }}

      drawerContent={() => <DrawerContent />}
    >
      <Drawer.Screen name='販売所を探す' component={MainTabNavigator} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
  },

  upSpace: {
    backgroundColor: "#b9c42f",
    paddingTop: 100,
    marginTop: -300,
  },
  touchSpace: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ffffff",
  },
  icon: {
    color: "#ffffff",
    fontSize: 17,
    marginRight: 10,
  },
  touchText: {
    color: "#ffffff",
    fontSize: 15,
  },
  versionText: {
    paddingHorizontal: 20,
    paddingTop: 50,
    fontSize: 10,
  },
});
