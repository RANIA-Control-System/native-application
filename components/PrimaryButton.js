import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: Colors.highlightColor,
    height: 50,
    width: 140,
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
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
  innerText: {
    fontSize: 35,
    color: "white",
    fontFamily: "fengardo-neue"
  }
});

export default function ModuleItem(props) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.innerText}>{props.text}</Text>
    </View>
  );
}
