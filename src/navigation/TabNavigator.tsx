import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Platform } from "react-native";
import {
  Home,
  LayoutDashboard,
  Settings,
  PlusCircle,
  CheckSquare,
} from "lucide-react-native";

import HomeScreen from "../screens/Home/HomeScreen";
import DashboardScreen from "../screens/Dashboard/DashboardScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import AddActivityScreen from "../screens/AddActivity/AddActivityScreen";
import TaskScreen from "../screens/Tasks/TasksScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#22C55E",
        tabBarInactiveTintColor: "#94A3B8",
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: Platform.OS === "android" ? 65 + insets.bottom : 85,
          paddingBottom: insets.bottom > 0 ? insets.bottom : 10,
          paddingTop: 10,
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderTopColor: "#F1F5F9",
          elevation: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "500",
          marginBottom: Platform.OS === "android" ? 5 : 0,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />

      <Tab.Screen
        name="AddActivity"
        component={AddActivityScreen}
        options={{
          tabBarLabel: "Add",
          tabBarIcon: ({ color, size }) => (
            <PlusCircle size={size + 4} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Tasks"
        component={TaskScreen}
        options={{
          tabBarLabel: "Tasks",
          tabBarIcon: ({ color, size }) => (
            <CheckSquare size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ color, size }) => (
            <LayoutDashboard size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Settings size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
