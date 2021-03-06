import React from "react";
import { Platform, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import HomeScreen from "../screens/HomeScreen";
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
  title: "Home",
  // drawerLockMode: "locked-open",
  drawerIcon: ({ focused }) => (
    <React.Fragment>
      {focused ? (
        <Text> </Text>
      ) : (
        <NavButton text="View" size="sm" navlocation="Home" />
      )}
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
      {focused ? (
        <Text> </Text>
      ) : (
        <NavButton text="View" size="sm" navlocation="Remote" />
      )}
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
      {focused ? (
        <Text> </Text>
      ) : (
        <NavButton text="View" size="sm" navlocation="Patient" />
      )}
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
      {focused ? (
        <Text> </Text>
      ) : (
        <NavButton text="View" size="sm" navlocation="House" />
      )}
    </React.Fragment>
  )
};

HouseInfoStack.path = "";

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
      {focused ? (
        <Text> </Text>
      ) : (
        <NavButton text="View" size="sm" navlocation="Settings" />
      )}
    </React.Fragment>
  )
};

SettingsStack.path = "";

const tabNavigator = createDrawerNavigator(
  {
    HomeStack,
    HouseInfoStack,
    PatientInfoStack,
    RemoteStack,
    SettingsStack
  },
  {
    drawerBackgroundColor: Colors.primaryColor,
    overlayColor: Colors.primaryColor,
    drawerType: "slide",
    drawerWidth: 375,
    contentOptions: {
      activeTintColor: Colors.highlightColor,
      activeBackgroundColor: Colors.highlightColor,
      activeLabelStyle: {
        color: Colors.primaryColor
      },
      itemStyle: {
        borderBottomColor: Colors.secondaryColor,
        borderBottomWidth: StyleSheet.hairlineWidth
      },
      labelStyle: {
        fontFamily: "young-serif",
        fontWeight: "200",
        color: "white",
        fontSize: 35,
        marginLeft: 70
      }
    }
  }
);

tabNavigator.path = "";

export default tabNavigator;
