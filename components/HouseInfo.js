import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { GlobalContext } from "../context/global-context";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "white",
    maxWidth: 600,
    margin: 10,
    padding: 25,
    flex: 1,
    alignContent: "space-around",
    flexDirection: "column",
    justifyContent: "space-around",
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
  bigText: {
    fontSize: 40,
    marginTop: 7
  },
  innerText: {
    fontSize: 35,
    marginTop: 7
  },
  icon: {
    fontSize: 50,
    marginRight: 15,
    color: Colors.primaryColor
  }
});

export default function HouseInfo(props) {
  return (
    <GlobalContext.Consumer>
      {value => (
        <View style={styles.itemContainer}>
          <View style={styles.iconTextContainer}>
            <FontAwesomeIcon style={styles.icon} size={50} icon={faHome} />
            <Text style={{ ...styles.bigText, fontFamily: value.mainFont }}>
              {props.addressLineOne}
            </Text>
          </View>
          <Text style={{ ...styles.innerText, fontFamily: value.mainFont }}>
            {props.addressLineTwo}
          </Text>
        </View>
      )}
    </GlobalContext.Consumer>
  );
}
//
