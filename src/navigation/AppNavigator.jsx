import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainTabNavigator from "../navigation/MainTabNavigator";
import DrawerNavi from "../navigation/DrawerNavi";
import { useNavigation } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import About from "../drawerScreens/About";
import Help from "../drawerScreens/Help";
import QuestionAndAnswer from "../drawerScreens/QuestionAndAnswer";
import Setting from "../drawerScreens/Setting";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='DrawerNavi'
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: "horizontal",
        }}
      >
        <Stack.Screen name='DrawerNavi' component={DrawerNavi} />

        {/* 以下ドロワー個別ページ */}
        <Stack.Screen
          name='About'
          component={About}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name='Help'
          component={Help}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name='QuestionAndAnswer'
          component={QuestionAndAnswer}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name='Setting'
          component={Setting}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
