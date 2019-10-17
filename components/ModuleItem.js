import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "white",
    height: 125,
    width: 700,
    margin: 15,
    justifyContent: "space-around",
    marginLeft: 90,
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
  innerText: {
    fontSize: 30,
    marginLeft: 15,
    fontFamily: "source-serif"
  }
});

export default function ModuleItem(props) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.innerText}>{props.text}</Text>
    </View>
  );
}
