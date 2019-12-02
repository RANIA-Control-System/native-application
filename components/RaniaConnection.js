import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Animated } from "react-native";
import Colors from "../constants/Colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import ShowViewButton from "./ShowViewButton";
import Fonts from "../constants/FontSelection";
const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "white",
    width: 600,
    height: 75,
    margin: 10,
    flex: 1,
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
    flexDirection: "row",
    marginBottom: 10
  },
  innerText: {
    fontSize: 35,
    marginTop: 7,
    fontFamily: Fonts.mainFont
  },
  icon: {
    marginLeft: 15,
    marginRight: 15,
    color: Colors.primaryColor
  }
});
//@TODO: Implement data fetching for individual document
export default function DocumentLoader(props) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.iconTextContainer}>
        <FontAwesomeIcon style={styles.icon} size={40} icon={props.icon} />
        <Text style={styles.innerText}>{props.children}</Text>
      </View>
    </View>
  );
}
