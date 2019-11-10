import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
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
    justifyContent: "space-between",
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
    marginTop: 7,
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
export default function DocumentLoader(props) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.iconTextContainer}>
        <FontAwesomeIcon style={styles.icon} size={40} icon={faFile} />
        <Text style={styles.innerText}>fileName.doc</Text>
      </View>
      <ShowViewButton text="Open">
        <Text>TODO: Implement document support</Text>
      </ShowViewButton>
    </View>
  );
}
//
