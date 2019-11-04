import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "white",
    height: 75,
    width: 600,
    margin: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
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
    fontSize: 35,
    fontFamily: "fengardo-neue"
  },
  icon: {
    fontSize: 40,
    marginLeft: 15,
    marginRight: 15,
    color: Colors.primaryColor
  }
});

export default function VisitLog(props) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.iconTextContainer}>
        <FontAwesomeIcon style={styles.icon} size={40} icon={faClipboardList} />
        <Text style={styles.innerText}>
          {props.date} at {props.time}
        </Text>
      </View>
    </View>
  );
}
//
