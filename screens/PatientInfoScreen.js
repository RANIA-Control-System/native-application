import React, { useEffect } from "react";
import { ScrollView, Text, StyleSheet, Dimensions } from "react-native";

import TopBar from "../components/TopBar";
import PatientInfo from "../components/PatientInfo";
import DocumentLoader from "../components/DocumentLoader";
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
    marginBottom: 20,
    maxWidth: 600,
    alignSelf: "center"
  }
});

export default function PatientInfoScreen(props) {
  return (
    <React.Fragment>
      <TopBar
        screen={"Patient Information"}
        navigation={props.navigation}
        wasDrawerOpen={props.navigation.state.isDrawerOpen}
      />
      <ScrollView style={styles.container}>
        <PatientInfo />
        <Text style={styles.pageText}>Medical Documents:</Text>
        <DocumentLoader />
        <DocumentLoader />
        <DocumentLoader />
        <DocumentLoader />
        <DocumentLoader />
        <DocumentLoader />
      </ScrollView>
    </React.Fragment>
  );
}
PatientInfoScreen.navigationOptions = {
  title: "Patient Info",
  header: null
};
