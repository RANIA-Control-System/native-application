import React, { useState } from "react";
import { Text, View, TouchableHighlight, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: Colors.highlightColor,
    height: 50,
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingLeft: 25,
    paddingRight: 25,
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
  itemContainerWide: {
    backgroundColor: Colors.highlightColor,
    height: 50,
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingLeft: 55,
    paddingRight: 55,
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
  innerText: {
    fontSize: 35,
    color: "black",
    fontFamily: "fengardo-neue"
  }
});

export default function ShowViewButton(props) {
  const [viewState, setViewState] = useState(0);

  function toggleState() {
    setViewState(viewState === 0 ? 1 : 0);
  }
  return (
    <React.Fragment>
      <TouchableHighlight
        onPress={toggleState}
        style={
          props.size == "wide" ? styles.itemContainerWide : styles.itemContainer
        }
      >
        <Text style={styles.innerText}>
          {viewState === 0 ? props.text : "Hide"}
        </Text>
      </TouchableHighlight>
      {viewState === 0 ? null : props.children}
    </React.Fragment>
  );
}
