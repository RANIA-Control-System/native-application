import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Colors from "../constants/Colors";
import { FeatureText } from "../components/StyledText";

const styles = StyleSheet.create({
  topBarContainer: {
    backgroundColor: Colors.secondaryColor,
    height: 90,
    alignContent: "space-around",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  icon: {
    marginLeft: 15,
    marginRight: 15,
    fontSize: 50,
    color: Colors.highlightColor
  },
  topBarText: {
    fontSize: 42,
    color: Colors.primaryColor
  }
});
//@TODO Have hamburgeState change when swipe to open is used
export default function TopBar(props) {
  const [hamburgerState, setHamburgerState] = useState("closed");
  const [transformDeg] = useState(new Animated.Value(0));
  function toggleHamburger() {
    props.navigation.toggleDrawer();
    setHamburgerState(hamburgerState === "closed" ? "open" : "closed");
    Animated.timing(transformDeg, {
      toValue: hamburgerState === "closed" ? Math.PI / 2 : 0,
      duration: 500
    }).start();
  }
  return (
    <View style={styles.topBarContainer}>
      <TouchableWithoutFeedback onPress={toggleHamburger}>
        <Animated.View
          style={{
            transform: [{ rotate: transformDeg }]
          }}
        >
          <FontAwesomeIcon style={styles.icon} size={40} icon={faBars} />
        </Animated.View>
      </TouchableWithoutFeedback>
      <FeatureText style={styles.topBarText}>
        RANIA
        {props.screen === undefined ? "" : `| ${props.screen}`}
      </FeatureText>
    </View>
  );
}
