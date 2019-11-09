import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faClipboardList,
  faUserMd,
  faClock,
  faArchive,
  faNotesMedical
} from "@fortawesome/free-solid-svg-icons";

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "white",
    width: 900,
    margin: 10,
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
    fontFamily: "fengardo-neue"
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
//@TODO: Implement data fetching for individual visit
export default function VisitLog(props) {
  const [name, setname] = useState("John M. Cale");
  const [birthDate, setBirthdate] = useState("November 18th, 1929");
  const [age, setAge] = useState("90");
  const [phoneNumber, setPhoneNumber] = useState("(804)-123-2305");
  const [gender, setGender] = useState("Male");
  const [maritalStatus, setMaritalStatus] = useState("Married");

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.bigText}>{name}</Text>
      <View style={styles.iconTextContainer}>
        <FontAwesomeIcon style={styles.icon} size={40} icon={faClipboardList} />
        <Text style={styles.innerText}>
          {birthDate} [{age} years old]
        </Text>
      </View>
      <View style={styles.iconTextContainer}>
        <FontAwesomeIcon style={styles.icon} size={40} icon={faClipboardList} />
        <Text style={styles.innerText}>{phoneNumber}</Text>
      </View>
      <View style={styles.iconTextContainer}>
        <FontAwesomeIcon style={styles.icon} size={40} icon={faClipboardList} />
        <Text style={styles.innerText}>{maritalStatus}</Text>
      </View>
      <View style={styles.iconTextContainer}>
        <FontAwesomeIcon style={styles.icon} size={40} icon={faClipboardList} />
        <Text style={styles.innerText}>{gender}</Text>
      </View>
    </View>
  );
}
//
