import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { GlobalContext } from "../context/global-context";
import NavButton from "./NavButton";
import ShowViewButton from "./ShowViewButton";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "white",
    height: 125,
    width: 600,
    margin: 15,
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
    flexDirection: "row"
  },
  innerText: {
    fontSize: 35,
    marginTop: 7
  },
  icon: {
    fontSize: 40,
    marginLeft: 15,
    marginRight: 15,
    color: Colors.primaryColor
  }
});
// ModuleItem.contextType = GlobalContext;
export default function ModuleItem(props) {
  return (
    <GlobalContext.Consumer>
      {value => (
        <View style={styles.itemContainer}>
          <View style={styles.iconTextContainer}>
            <FontAwesomeIcon style={styles.icon} size={40} icon={props.icon} />
            <Text style={{ ...styles.innerText, fontFamily: value.mainFont }}>
              {props.text}
            </Text>
          </View>
          {props.navlocation == "none" ? (
            <ShowViewButton text="View" size="md">
              <Text
                style={{
                  ...styles.innerText,
                  fontFamily: value.mainFont,
                  color: "red",
                  marginLeft: 20
                }}
              >
                This page is currently in development
              </Text>
            </ShowViewButton>
          ) : (
            <NavButton text="View" size="md" navlocation={props.navlocation} />
          )}
        </View>
      )}
    </GlobalContext.Consumer>
  );
}
