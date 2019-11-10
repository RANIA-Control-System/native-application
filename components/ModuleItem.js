import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import NavButton from "./NavButton";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "white",
    height: 125,
    width: 600,
    margin: 15,
    flexWrap: "wrap",
    alignContent: "space-around",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 2,
    borderColor: Colors.primaryColor,
    borderRadius: 7,
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
  iconTextContainer: {
    flexDirection: "row"
  },
  innerText: {
    fontSize: 40,
    marginTop: 7,
    fontFamily: "fengardo-neue"
  },
  icon: {
    fontSize: 40,
    marginLeft: 15,
    marginRight: 15,
    color: Colors.primaryColor
  }
});

export default function ModuleItem(props) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.iconTextContainer}>
        <FontAwesomeIcon style={styles.icon} size={40} icon={props.icon} />
        <Text style={styles.innerText}>{props.text}</Text>
      </View>
      <NavButton text="View" size="md" navlocation={props.navlocation} />
    </View>
  );
}
//
