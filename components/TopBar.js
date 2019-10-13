import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/Colors";

import { FeatureText } from "../components/StyledText";

const styles = StyleSheet.create({
  topBarContainer: {
    backgroundColor: Colors.secondaryColor,
    height: 100,
    justifyContent: "center"
  },
  topBarText: {
    fontSize: 42,
    marginLeft: 30,
    color: Colors.primaryColor
  }
});

export default function TopBar() {
  return (
    <View style={styles.topBarContainer}>
      <FeatureText style={styles.topBarText}>
        RANIA Control System |{" "}
      </FeatureText>
    </View>
  );
}
