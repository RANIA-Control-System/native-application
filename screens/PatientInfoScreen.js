import React, { useEffect } from "react";
import { ScrollView, Text, StyleSheet, Dimensions } from "react-native";
import { GlobalContext } from "../context/global-context";
import TopBar from "../components/TopBar";
import PatientInfo from "../components/PatientInfo";
import DocumentLoader from "../components/DocumentLoader";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  centerView: {
    alignItems: "center"
  },
  pageText: {
    fontSize: 30,
    marginTop: 20,
    marginBottom: 20,
    maxWidth: 600,
    alignSelf: "center"
  }
});

export default function PatientInfoScreen(props) {
  return (
    <GlobalContext.Consumer>
      {value => (
        <React.Fragment>
          <TopBar
            screen={"Patient Information"}
            navigation={props.navigation}
          />
          <ScrollView
            style={{ ...styles.container, fontFamily: value.mainFont }}
          >
            <View style={StyleSheet.centerView}>
              <PatientInfo />
              <Text
                style={{ ...styles.pageText, fontFamily: value.brandingFont }}
              >
                Medical Documents:
              </Text>
              <DocumentLoader />
              <DocumentLoader />
              <DocumentLoader />
              <DocumentLoader />
              <DocumentLoader />
              <DocumentLoader />
            </View>
          </ScrollView>
        </React.Fragment>
      )}
    </GlobalContext.Consumer>
  );
}
PatientInfoScreen.navigationOptions = {
  title: "Patient Info",
  header: null
};
