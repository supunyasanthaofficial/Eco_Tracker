import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import LoginScreen from "./src/screens/Auth/LoginScreen";
import TabNavigator from "./src/navigation/TabNavigator";
import PrivacyPolicyScreen from "./src/screens/Settings/PrivacyPolicyScreen";
import HelpCenterScreen from "./src/screens/Settings/HelpCenterScreen";

import { UserProvider } from "./src/context/UserContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar style="dark" />
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: false,
              animation: "fade",
            }}
          >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={TabNavigator} />
            <Stack.Screen
              name="PrivacyPolicy"
              component={PrivacyPolicyScreen}
              options={{ headerShown: true, title: "Privacy Policy" }}
            />
            <Stack.Screen
              name="HelpCenter"
              component={HelpCenterScreen}
              options={{ headerShown: true, title: "Help Center" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </UserProvider>
  );
}
