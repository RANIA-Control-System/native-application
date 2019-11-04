import React from "react";
import { Text, View, TouchableHighlight, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";

import Colors from "../constants/Colors";
import RemoteVisitScreen from "../screens/RemoteVisitScreen";

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
    color: "white",
    fontFamily: "fengardo-neue"
  },
  innerTextSm: {
    fontSize: 25,
    color: "white",
    fontFamily: "fengardo-neue"
  }
});

class NavButton extends React.Component {
  render() {
    return (
      <View
        style={
          this.props.size == "sm"
            ? styles.itemContainerSm
            : styles.itemContainer
        }
      >
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate(this.props.navlocation)}
          style={styles.button}
        >
          <Text
            style={
              this.props.size == "sm" ? styles.innerTextSm : styles.innerText
            }
          >
            {this.props.text}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
export default withNavigation(NavButton);
