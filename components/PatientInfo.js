import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Animated
} from "react-native";
import Colors from "../constants/Colors";
import ApiUrl from "../constants/dataFetching";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faRing,
  faBirthdayCake,
  faPhone,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import apiUrl from "../constants/dataFetching";

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
    marginBottom: 10,
    fontFamily: "fengardo-neue"
  },
  innerText: {
    fontSize: 35,
    marginTop: 7,
    fontFamily: "fengardo-neue"
  },
  icon: {
    fontSize: 40,
    marginRight: 15,
    color: Colors.primaryColor
  }
});

export default function PatientInfo() {
  const [name, setName] = useState("John M. Cale");
  const [birthDate, setBirthdate] = useState("November 18th, 1929");
  const [age, setAge] = useState("90");
  const [phoneNumber, setPhoneNumber] = useState("(804)-123-2305");
  const [gender, setGender] = useState("Male");
  const [maritalStatus, setMaritalStatus] = useState("Married");
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500
    }).start();

    async function fetchPatientInfo() {
      return fetch(apiUrl + "patients/5dd2aeb11c9d4400000b856e")
        .then(response => response.json())
        .then(responseJson => {
          setName(
            responseJson.name.firstName +
              " " +
              responseJson.name.middleInitial +
              ". " +
              responseJson.name.lastName
          );
          setBirthdate(responseJson.birthDate);
          setAge(calculateAge(responseJson.birthDate));
          setPhoneNumber(responseJson.phoneNumber);
          setGender(responseJson.gender);
          setMaritalStatus(responseJson.maritalStatus);
          setLoadingStatus(false);
        })
        .catch(error => {
          console.error(error);
        });
    }
    fetchPatientInfo();
  }, [name, birthDate, age, phoneNumber, gender, maritalStatus]);

  return (
    <Animated.View style={{ ...styles.itemContainer, opacity: fadeAnim }}>
      {loadingStatus ? (
        <ActivityIndicator size="large" color={Colors.primaryColor} />
      ) : (
        <React.Fragment>
          <Text style={styles.bigText}>{name}</Text>
          <View style={styles.iconTextContainer}>
            <FontAwesomeIcon
              style={styles.icon}
              size={40}
              icon={faBirthdayCake}
            />
            <Text style={styles.innerText}>
              {birthDate} [{age} years old]
            </Text>
          </View>
          <View style={styles.iconTextContainer}>
            <FontAwesomeIcon style={styles.icon} size={40} icon={faPhone} />
            <Text style={styles.innerText}>{phoneNumber}</Text>
          </View>
          <View style={styles.iconTextContainer}>
            <FontAwesomeIcon style={styles.icon} size={40} icon={faRing} />
            <Text style={styles.innerText}>{maritalStatus}</Text>
          </View>
          <View style={styles.iconTextContainer}>
            <FontAwesomeIcon style={styles.icon} size={40} icon={faUser} />
            <Text style={styles.innerText}>{gender}</Text>
          </View>
        </React.Fragment>
      )}
    </Animated.View>
  );
}
function calculateAge(birthdayString) {
  let splitDate = birthdayString.split("/");
  let birthdayDate = new Date(splitDate[2], splitDate[1] - 1, splitDate[0]);
  let currentDate = new Date();
  let age = Math.floor((currentDate - birthdayDate) / 31557600000);
  return age;
}
