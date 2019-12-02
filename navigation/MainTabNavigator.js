import React from "react";
import { Platform, Text } from "react-native";
import { createStackNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import RemoteVisitScreen from "../screens/RemoteVisitScreen";
import PatientInfoScreen from "../screens/PatientInfoScreen";
import HouseInfoScreen from "../screens/HouseInfoScreen";

import NavButton from "../components/NavButton";

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
  title: "Medical Info",
  // drawerLockMode: "locked-open",
  drawerIcon: ({ focused }) => (
    <React.Fragment>
      {focused ? <Text> </Text> : <NavButton text="View" size="sm" />}
    </React.Fragment>
  )
};

HomeStack.path = "";

const RemoteStack = createStackNavigator(
  {
    Remote: RemoteVisitScreen
  },
  config
);

RemoteStack.navigationOptions = {
  title: "Remote Visit",
  // drawerLockMode: "locked-open",
  drawerIcon: ({ focused }) => (
    <React.Fragment>
      {focused ? <Text> </Text> : <NavButton text="View" size="sm" />}
    </React.Fragment>
  )
};

RemoteStack.path = "";

const PatientInfoStack = createStackNavigator(
  {
    Patient: PatientInfoScreen
  },
  config
);

PatientInfoStack.navigationOptions = {
  title: "Patient Info",
  // drawerLockMode: "locked-open",
  drawerIcon: ({ focused }) => (
    <React.Fragment>
      {focused ? <Text> </Text> : <NavButton text="View" size="sm" />}
    </React.Fragment>
  )
};

PatientInfoStack.path = "";

const HouseInfoStack = createStackNavigator(
  {
    House: HouseInfoScreen
  },
  config
);

HouseInfoStack.navigationOptions = {
  title: "House Info",
  // drawerLockMode: "locked-open",
  drawerIcon: ({ focused }) => (
    <React.Fragment>
      {focused ? <Text> </Text> : <NavButton text="View" size="sm" />}
    </React.Fragment>
  )
};

HouseInfoStack.path = "";

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen
  },
  config
);

LinksStack.navigationOptions = {
  title: "House Info",
  drawerIcon: ({ focused }) => (
    <React.Fragment>
      {focused ? <Text> </Text> : <NavButton text="View" size="sm" />}
    </React.Fragment>
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
    <React.Fragment>
      {focused ? <Text> </Text> : <NavButton text="View" size="sm" />}
    </React.Fragment>
  )
};

SettingsStack.path = "";

const tabNavigator = createDrawerNavigator(
  {
    SettingsStack,
    RemoteStack,
    PatientInfoStack,
    HouseInfoStack,
    HomeStack,
    LinksStack
  },
  {
    drawerBackgroundColor: Colors.primaryColor,
    overlayColor: "transparent",
    drawerType: "slide",
    drawerWidth: 375,
    contentOptions: {
      activeTintColor: Colors.highlightColor,
      labelStyle: {
        fontFamily: "young-serif",
        color: "white",
        fontSize: 35,
        marginLeft: 70
      }
    }
  }
);

tabNavigator.path = "";

export default tabNavigator;
