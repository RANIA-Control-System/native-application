import * as WebBrowser from "expo-web-browser";
import React from "react";
import { ScrollView, View, StyleSheet, Text, Dimensions } from "react-native";
import TopBar from "../components/TopBar";
import ModuleItem from "../components/ModuleItem";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  centerView: {
    alignItems: "center"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  }
});

export default function HomeScreen(props) {
  return (
    <React.Fragment>
      <TopBar screen="Home" navigation={props.navigation} />
      <ScrollView style={styles.container}>
        <View style={styles.centerView}>
          <ModuleItem text="Remote Visit" icon="user-md" navlocation="Remote" />
          <ModuleItem text="Fall Detection" icon="hiking" navlocation="none" />
          <ModuleItem text="Natural Language" icon="deaf" navlocation="none" />
          <ModuleItem text="Settings" icon="cogs" navlocation="Settings" />
          {/* <DevelopmentModeNotice /> */}
        </View>
      </ScrollView>
    </React.Fragment>
  );
}

HomeScreen.navigationOptions = {
  header: null
};
