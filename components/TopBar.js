import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { FeatureText } from "../components/StyledText";
const styles = StyleSheet.create({
  topBarContainer: {
    backgroundColor: Colors.secondaryColor,
    height: 100,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  topBarText: {
    fontSize: 42,
    marginLeft: 30,
    color: Colors.primaryColor
  }
});

export default function TopBar(props) {
  return (
    <View style={styles.topBarContainer}>
      {/* <Button
        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
        title="Info"
        color="white"
      /> */}
      <FeatureText style={styles.topBarText}>RANIA Control System</FeatureText>
    </View>
  );
}
