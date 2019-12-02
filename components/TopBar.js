import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import Fonts from "../constants/FontSelection";

const styles = StyleSheet.create({
  topBarContainer: {
    backgroundColor: Colors.secondaryColor,
    height: 90,
    alignContent: "space-around",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  icon: {
    marginLeft: 15,
    marginRight: 15,
    fontSize: 50,
    color: Colors.highlightColor
  },
  topBarText: {
    fontSize: 42,
    fontFamily: Fonts.brandingFont,
    color: Colors.primaryColor
  },
  buttonContainer: {
    backgroundColor: Colors.highlightColor,
    height: 50,
    margin: 10,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 15,
    shadowColor: "black",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  innerButtonText: {
    fontSize: 25,
    color: "black",
    fontFamily: Fonts.mainFont
  }
});
//@TODO Have hamburgeState change when swipe to open is used
export default function TopBar(props) {
  return (
    <View style={styles.topBarContainer}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={props.navigation.toggleDrawer}
      >
        <Text style={styles.innerButtonText}>Open Sidebar</Text>
      </TouchableOpacity>
      <Text style={styles.topBarText}>
        RANIA
        {props.screen === undefined ? "" : `| ${props.screen}`}
      </Text>
    </View>
  );
}
