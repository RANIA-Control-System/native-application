import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/PrimaryButton";

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "white",
    height: 125,
    width: 600,
    margin: 15,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 140,
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
    fontSize: 40,
    marginLeft: 15,
    fontFamily: "fengardo-neue"
  }
});

export default function ModuleItem(props) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.innerText}>{props.text}</Text>
      <PrimaryButton text="View" />
    </View>
  );
}
