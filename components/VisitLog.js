import React from "react";
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
import ShowViewButton from "../components/ShowViewButton";

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "white",
    width: 600,
    margin: 10,
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

export default function VisitLog(visit) {
  let fetchedDateAsDate = new Date(visit.visit.date);
  let correctedTime = visit.visit.startTime;
  if (correctedTime.length < 11)
    correctedTime =
      correctedTime.substring(0, 4) + " " + correctedTime.substring(8, 10);
  else
    correctedTime =
      correctedTime.substring(0, 5) + " " + correctedTime.substring(9, 11);
  return (
    <View style={styles.itemContainer}>
      <FontAwesomeIcon style={styles.icon} size={40} icon={faClipboardList} />
      <Text style={styles.innerText}>
        {fetchedDateAsDate.toLocaleDateString()} at {correctedTime}
      </Text>
      <ShowViewButton text="View">
        <View style={styles.iconTextContainer}>
          <FontAwesomeIcon style={styles.icon} size={40} icon={faUserMd} />
          <Text style={styles.innerText}>{visit.visit.doctor}</Text>
        </View>
        <View style={styles.iconTextContainer}>
          <FontAwesomeIcon style={styles.icon} size={40} icon={faClock} />
          <Text style={styles.innerText}>{visit.visit.length}</Text>
        </View>
        <View style={styles.iconTextContainer}>
          <FontAwesomeIcon style={styles.icon} size={40} icon={faArchive} />
          <Text style={styles.innerText}>{visit.visit.type}</Text>
        </View>
        <View style={styles.iconTextContainer} />
        <View style={styles.iconTextContainerWide}>
          <FontAwesomeIcon
            style={styles.icon}
            size={40}
            icon={faNotesMedical}
          />
          <Text style={styles.innerText}>{visit.visit.notes}</Text>
        </View>
      </ShowViewButton>
    </View>
  );
}
//
