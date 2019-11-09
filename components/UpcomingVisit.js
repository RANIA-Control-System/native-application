import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faClipboardList, faCalendar } from "@fortawesome/free-solid-svg-icons";
const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "white",
    height: 125,
    width: 600,
    margin: 10,
    justifyContent: "space-around",
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
  upcomingContainer: {
    flexDirection: "column"
  },
  innerText: {
    fontSize: 35,
    fontFamily: "fengardo-neue",
    textAlign: "center"
  },
  dateText: {
    fontSize: 30,
    fontFamily: "fengardo-neue",
    textAlign: "center"
  },
  dateTextEmphasize: {
    fontSize: 35,
    fontFamily: "fengardo-neue",
    textAlign: "center"
  },
  icon: {
    fontSize: 40,
    marginLeft: 15,
    marginRight: 15,
    color: Colors.primaryColor
  }
});

export default function UpcomingVisit(props) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.iconTextContainer}>
        <FontAwesomeIcon style={styles.icon} size={40} icon={faCalendar} />
        <Text style={styles.innerText}>Next Appointment:</Text>
      </View>
      <View style={styles.upcomingContainer}>
        <Text style={styles.dateText}>{props.date.split(" ")[0]}</Text>
        <Text style={styles.dateText}>{props.date.split(" ")[1]}</Text>
        <Text style={styles.dateTextEmphasize}>{props.time}</Text>
      </View>
    </View>
  );
}
//
