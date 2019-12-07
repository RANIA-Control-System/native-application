import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { GlobalContext } from "../context/global-context";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHome,
  faLink,
  faPhone,
  faUser
} from "@fortawesome/free-solid-svg-icons";

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "white",
    margin: 10,
    maxWidth: 600,
    padding: 25,
    flex: 1,
    flexWrap: "wrap",
    alignContent: "space-between",
    flexDirection: "row",
    justifyContent: "space-between",
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
    fontSize: 30,
    marginTop: 7
  },
  icon: {
    marginRight: 15,
    marginTop: 10,
    color: Colors.primaryColor
  }
});
//@TODO: Implement data fetching for individual contact
export default function EmergencyContact(props) {
  return (
    <GlobalContext.Consumer>
      {value => (
        <View style={styles.itemContainer}>
          <View style={styles.iconTextContainer}>
            <FontAwesomeIcon style={styles.icon} size={35} icon={faUser} />
            <Text style={{ ...styles.innerText, fontFamily: value.mainFont }}>
              {props.contact.name}
            </Text>
          </View>
          <View style={styles.iconTextContainer}>
            <FontAwesomeIcon style={styles.icon} size={35} icon={faLink} />
            <Text style={{ ...styles.innerText, fontFamily: value.mainFont }}>
              {props.contact.relationship}
            </Text>
          </View>
          <View style={styles.iconTextContainer}>
            <FontAwesomeIcon style={styles.icon} size={35} icon={faPhone} />
            <Text style={{ ...styles.innerText, fontFamily: value.mainFont }}>
              {props.contact.phone}
            </Text>
          </View>
          <View style={styles.iconTextContainer}>
            <FontAwesomeIcon style={styles.icon} size={35} icon={faHome} />
            <Text style={{ ...styles.innerText, fontFamily: value.mainFont }}>
              {props.contact.resident ? "Resident" : "Non-Resident"}
            </Text>
          </View>
        </View>
      )}
    </GlobalContext.Consumer>
  );
}
