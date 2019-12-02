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
import {
  faClipboardList,
  faUserMd,
  faClock,
  faArchive,
  faNotesMedical
} from "@fortawesome/free-solid-svg-icons";
import ShowViewButton from "../components/ShowViewButton";

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "white",
    width: 600,
    margin: 10,
    padding: 20,
    flex: 1,
    flexWrap: "wrap",
    alignContent: "space-around",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
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
    width: 200,
    marginBottom: 10
  },
  iconTextContainerWide: {
    flexDirection: "row",
    width: 500,
    marginBottom: 10
  },
  innerText: {
    fontSize: 25
  },
  icon: {
    fontSize: 40,
    marginLeft: 15,
    marginRight: 15,
    color: Colors.primaryColor
  }
});

export default function VisitLog(visit) {
  const [fadeAnim] = useState(new Animated.Value(0));
  let fetchedDateAsDate;
  let correctedTime;
  if (visit.visit !== undefined) {
    fetchedDateAsDate = new Date(visit.visit.date);
    correctedTime = visit.visit.startTime;
    if (correctedTime.length < 11)
      correctedTime =
        correctedTime.substring(0, 4) + " " + correctedTime.substring(8, 10);
    else
      correctedTime =
        correctedTime.substring(0, 5) + " " + correctedTime.substring(9, 11);
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
              <FontAwesomeIcon
                style={styles.icon}
                size={40}
                icon={faClipboardList}
              />
              <Text style={{ ...styles.innerText, fontFamily: value.mainFont }}>
                {fetchedDateAsDate.toLocaleDateString()} at {correctedTime}
              </Text>
              <ShowViewButton text="View">
                <View style={styles.iconTextContainer}>
                  <FontAwesomeIcon
                    style={styles.icon}
                    size={40}
                    icon={faUserMd}
                  />
                  <Text
                    style={{ ...styles.innerText, fontFamily: value.mainFont }}
                  >
                    {visit.visit.doctor}
                  </Text>
                </View>
                <View style={styles.iconTextContainer}>
                  <FontAwesomeIcon
                    style={styles.icon}
                    size={40}
                    icon={faClock}
                  />
                  <Text
                    style={{ ...styles.innerText, fontFamily: value.mainFont }}
                  >
                    {visit.visit.length}
                  </Text>
                </View>
                <View style={styles.iconTextContainer}>
                  <FontAwesomeIcon
                    style={styles.icon}
                    size={40}
                    icon={faArchive}
                  />
                  <Text
                    style={{ ...styles.innerText, fontFamily: value.mainFont }}
                  >
                    {visit.visit.type}
                  </Text>
                </View>
                <View style={styles.iconTextContainer} />
                <View style={styles.iconTextContainerWide}>
                  <FontAwesomeIcon
                    style={styles.icon}
                    size={40}
                    icon={faNotesMedical}
                  />
                  <Text
                    style={{ ...styles.innerText, fontFamily: value.mainFont }}
                  >
                    {visit.visit.notes}
                  </Text>
                </View>
              </ShowViewButton>
            </React.Fragment>
          )}
        </Animated.View>
      )}
    </GlobalContext.Consumer>
  );
}
//
