import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainTabNavigator from "../navigation/MainTabNavigator";
import DrawerNavi from "../navigation/DrawerNavi";

export default function AppNavigator(props) {
  return (
    <NavigationContainer>
      <DrawerNavi />
    </NavigationContainer>
  );
}
