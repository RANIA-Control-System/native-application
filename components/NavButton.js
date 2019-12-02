import React from "react";
import { Text, View, TouchableHighlight, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";
import { GlobalContext } from "../context/global-context";

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
  itemContainerSm: {
    backgroundColor: Colors.highlightColor,
    height: 35,
    width: 100,
    margin: 15,
    marginLeft: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
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
    color: "black"
  },
  innerTextSm: {
    fontSize: 25,
    color: "black"
  }
});
class NavButton extends React.Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {value => (
          <TouchableHighlight
            onPress={() =>
              this.props.navigation.navigate(this.props.navlocation)
            }
            style={
              this.props.size == "sm"
                ? styles.itemContainerSm
                : styles.itemContainer
            }
          >
            <Text
              style={
                this.props.size == "sm"
                  ? { ...styles.innerTextSm, fontFamily: value.mainFont }
                  : { ...styles.innerText, fontFamily: value.mainFont }
              }
            >
              {this.props.text}
            </Text>
          </TouchableHighlight>
        )}
      </GlobalContext.Consumer>
    );
  }
}
export default withNavigation(NavButton);
