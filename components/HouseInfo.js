import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "white",
    margin: 10,
    padding: 25,
    flex: 1,
    flexWrap: "wrap",
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
    fontSize: 50,
    marginTop: 7,
    fontFamily: "fengardo-neue"
  },
  innerText: {
    fontSize: 35,
    marginTop: 7,
    fontFamily: "fengardo-neue"
  },
  icon: {
    fontSize: 50,
    marginRight: 15,
    color: Colors.primaryColor
  }
});
//@TODO: Implement data fetching for individual home
export default function HouseInfo(props) {
  const [address, setAddress] = useState("124 Shady Lane");
  const [cityStateZip, setCityStateZip] = useState("Morgantown, WV 26501");

  return (
    <View style={styles.itemContainer}>
      <View style={styles.iconTextContainer}>
        <FontAwesomeIcon style={styles.icon} size={50} icon={faHome} />
        <Text style={styles.bigText}>{address}</Text>
      </View>
      <Text style={styles.innerText}>{cityStateZip}</Text>
    </View>
  );
}
//
