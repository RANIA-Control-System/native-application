import React, { useEffect } from "react";
import { ScrollView, Text, StyleSheet, Dimensions } from "react-native";
import { faHiking, faDeaf, faUserMd } from "@fortawesome/free-solid-svg-icons";
import TopBar from "../components/TopBar";
import HouseInfo from "../components/HouseInfo";
import EmergencyContact from "../components/EmergencyContact";
import RaniaConnection from "../components/RaniaConnection";
import { GlobalContext } from "../context/global-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff"
  },
  pageText: {
    fontSize: 30,
    marginTop: 20,
    marginBottom: 20,
    maxWidth: 600,
    alignSelf: "center"
  }
});

export default function HouseInfoScreen(props) {
  return (
    <GlobalContext.Consumer>
      {value => (
        <React.Fragment>
          <TopBar screen={"House Information"} navigation={props.navigation} />
          <ScrollView style={styles.container}>
            <HouseInfo />
            <Text
              style={{ ...styles.pageText, fontFamily: value.brandingFont }}
            >
              Emergency Contacts:
            </Text>
            <EmergencyContact />
            <Text
              style={{ ...styles.pageText, fontFamily: value.brandingFont }}
            >
              RANIA Connections:
            </Text>
            <RaniaConnection icon={faUserMd}>Remote Visit</RaniaConnection>
            <RaniaConnection icon={faHiking}>
              Wireless Fall Detection
            </RaniaConnection>
            <RaniaConnection icon={faDeaf}>
              Natural Language Processor
            </RaniaConnection>
          </ScrollView>
        </React.Fragment>
      )}
    </GlobalContext.Consumer>
  );
}
HouseInfoScreen.navigationOptions = {
  title: "House Info",
  header: null
};
