import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

import TopBar from "../components/TopBar";
import PatientInfo from "../components/PatientInfo";

export default function PatientInfoScreen() {
  return (
    <React.Fragment>
      <TopBar screen={"Patient Information"} />
      <ScrollView style={styles.container}>
        <PatientInfo />
      </ScrollView>
    </React.Fragment>
  );
}
PatientInfoScreen.navigationOptions = {
  title: "Patient Info",
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff"
  },
  pageText: {
    fontSize: 30,
    fontFamily: "young-serif",
    marginTop: 20,
    marginBottom: 5,
    maxWidth: 600,
    alignSelf: "center"
  }
});
