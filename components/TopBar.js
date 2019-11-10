import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Colors from "../constants/Colors";
import { FeatureText } from "../components/StyledText";

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
  sidebarButton: {},
  icon: {
    marginLeft: 15,
    marginRight: 15,
    fontSize: 50,
    color: Colors.highlightColor
  },
  topBarText: {
    fontSize: 42,
    color: Colors.primaryColor
  }
});

export default function TopBar(props) {
  return (
    <View style={styles.topBarContainer}>
      <TouchableHighlight
        onPress={() => props.navigation.toggleDrawer()}
        style={styles.sidebarButton}
      >
        <FontAwesomeIcon style={styles.icon} size={40} icon={faBars} />
      </TouchableHighlight>
      <FeatureText style={styles.topBarText}>
        RANIA
        {props.screen === undefined ? "" : `| ${props.screen}`}
      </FeatureText>
    </View>
  );
}
