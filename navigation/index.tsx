import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import * as React from "react";
import { Ionicons } from '@expo/vector-icons';
import { ColorSchemeName, TouchableOpacity } from "react-native";

import HistoryScreen from "../screens/HistoryScreen";
import StackNavigator from './StackNavigator';
import { MainRoutes, MainDrawer } from '../navigation/routes';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer 
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator/>
    </NavigationContainer>
  )
}


function RootNavigator() {
  return (
    <MainDrawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0041c4ff",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
      }}
    >
      <MainDrawer.Screen name={MainRoutes.Root} component={StackNavigator} />
      <MainDrawer.Screen name={MainRoutes.History} component={HistoryScreen} />
    </MainDrawer.Navigator>
  )
}


