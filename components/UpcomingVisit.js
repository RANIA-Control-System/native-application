import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Animated
} from "react-native";
import Colors from "../constants/Colors";
import { GlobalContext } from "../context/global-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
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
    fontSize: 30,
    textAlign: "center"
  },
  dateText: {
    fontSize: 25,
    textAlign: "center"
  },
  dateTextEmphasize: {
    fontSize: 25,
    textAlign: "center"
  },
  icon: {
    fontSize: 40,
    marginLeft: 15,
    marginRight: 15,
    color: Colors.primaryColor
  }
});

export default function UpcomingVisit(visit) {
  const [fadeAnim] = useState(new Animated.Value(0));
  let fetchedDateAsDate;
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  if (visit.visit !== undefined && visit.visit !== null) {
    fetchedDateAsDate = new Date(visit.visit.date);
  }
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500
    }).start();
  }, []);

  return (
    <GlobalContext.Consumer>
      {value => (
        <Animated.View style={{ ...styles.itemContainer, opacity: fadeAnim }}>
          {visit.visit === undefined ? (
            <ActivityIndicator size="large" color={Colors.primaryColor} />
          ) : (
            <React.Fragment>
              <View style={styles.iconTextContainer}>
                <FontAwesomeIcon
                  style={styles.icon}
                  size={40}
                  icon={faCalendar}
                />
                <Text
                  style={{ ...styles.innerText, fontFamily: value.mainFont }}
                >
                  Next Appointment:
                </Text>
              </View>
              {visit.visit === null ? (
                <View style={styles.upcomingContainer}>
                  <Text
                    style={{ ...styles.dateText, fontFamily: value.mainFont }}
                  >
                    No
                  </Text>
                  <Text
                    style={{ ...styles.dateText, fontFamily: value.mainFont }}
                  >
                    appointment
                  </Text>
                  <Text
                    style={{ ...styles.dateText, fontFamily: value.mainFont }}
                  >
                    scheduled
                  </Text>
                </View>
              ) : (
                <View style={styles.upcomingContainer}>
                  <Text
                    style={{ ...styles.dateText, fontFamily: value.mainFont }}
                  >
                    {weekdays[fetchedDateAsDate.getDay()]}
                  </Text>
                  <Text
                    style={{ ...styles.dateText, fontFamily: value.mainFont }}
                  >
                    {fetchedDateAsDate.toLocaleDateString()}
                  </Text>
                  <Text
                    style={{
                      ...styles.dateTextEmphasize,
                      fontFamily: values.mainFont
                    }}
                  >
                    {visit.visit.startTime}
                  </Text>
                </View>
              )}
            </React.Fragment>
          )}
        </Animated.View>
      )}
    </GlobalContext.Consumer>
  );
}
