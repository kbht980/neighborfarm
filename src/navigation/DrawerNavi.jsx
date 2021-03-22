import React from "react";
import MainTabNavigator from "./MainTabNavigator";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerNavigationProp,
} from "@react-navigation/drawer";

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
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='販売所を探す' component={MainTabNavigator} />
      <Drawer.Screen name='アカウント情報' component={Account} />
      <Drawer.Screen name='チュートリアル' component={Tutorial} />
      <Drawer.Screen name='お支払い方法' component={Payment} />
      <Drawer.Screen name='通知' component={Notification} />
      <Drawer.Screen name='NeighborFarmで販売する' component={Sell} />
      <Drawer.Screen name='Q&A' component={QuestionAndAnswer} />
      <Drawer.Screen name='ヘルプ' component={Help} />
      <Drawer.Screen name='設定' component={Setting} />
      <Drawer.Screen name='NeighborFarmについて' component={About} />
    </Drawer.Navigator>
  );
}
