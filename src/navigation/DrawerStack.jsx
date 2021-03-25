import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import About from "../drawerScreens/About";

const Stack = createStackNavigator();

export default function DrawerStack() {
  return (
    <Stack.Navigator mode='modal'>
      <Stack.Screen name='About' component={About} />
    </Stack.Navigator>
  );
}

// export default function DrawerStack() {
//   return (
//     <View>
//       <Text>ドロワースタック</Text>
//     </View>
//   );
// }
