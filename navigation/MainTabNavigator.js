import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";

import Colors from "../constants/Colors";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  title: "Home",
  // drawerLockMode: "locked-open",
  drawerIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

HomeStack.path = "";

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen
  },
  config
);

LinksStack.navigationOptions = {
  title: "Links",
  drawerIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

LinksStack.path = "";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  title: "Settings",
  drawerIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

SettingsStack.path = "";

const tabNavigator = createDrawerNavigator(
  {
    HomeStack,
    LinksStack,
    SettingsStack
  },
  {
    drawerBackgroundColor: Colors.primaryColor,
    overlayColor: "transparent",
    drawerType: "slide  ",
    contentOptions: {
      activeTintColor: Colors.highlightColor,
      labelStyle: {
        fontFamily: "young-serif",
        color: "white",
        fontSize: 30
      }
    }
  }
);

tabNavigator.path = "";

export default tabNavigator;
