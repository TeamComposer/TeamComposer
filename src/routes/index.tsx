import * as React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from "../pages/HomeScreen";
import SignUp from "../pages/Signup";
import Profile from "../pages/Profile";

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    </View>
  );
}

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        width: "100%",
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const Icon = options.tabBarIcon;

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
            key={route.key}
          >
            <View
              style={{
                backgroundColor: isFocused ? "#2C4060" : null,
                alignItems: "center",
                justifyContent: "center",
                height: 40,
                marginLeft: 2,
                marginRight: 2,
              }}
            >
              {Icon && <Icon color={isFocused ? "white" : "#2C4060"} size={24} />}
              {/* <Text style={{ color: isFocused ? "white" : "#2C4060" }}>
                {label}
              </Text> */}
            </View>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

export default function TabBar() {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      initialRouteName="Home"
      screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}
    >
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />

          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
