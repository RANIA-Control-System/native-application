import React, { useEffect } from "react";
import { ScrollView, Text, StyleSheet, Dimensions } from "react-native";
import { faHiking, faDeaf, faUserMd } from "@fortawesome/free-solid-svg-icons";
import TopBar from "../components/TopBar";
import HouseInfo from "../components/HouseInfo";
import EmergencyContact from "../components/EmergencyContact";
import RaniaConnection from "../components/RaniaConnection";
import Fonts from "../constants/FontSelection";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff"
  },
  pageText: {
    fontSize: 30,
    fontFamily: Fonts.brandingFont,
    marginTop: 20,
    marginBottom: 20,
    maxWidth: 600,
    alignSelf: "center"
  }
});

export default function HouseInfoScreen(props) {
  //   if (Dimensions.get("window").width > Dimensions.get("window").height)
  //     useEffect(() => props.navigation.openDrawer(), []);
  return (
    <React.Fragment>
      <TopBar screen={"House Information"} navigation={props.navigation} />
      <ScrollView style={styles.container}>
        <HouseInfo />
        <Text style={styles.pageText}>Emergency Contacts:</Text>
        <EmergencyContact />
        <Text style={styles.pageText}>RANIA Connections:</Text>
        <RaniaConnection icon={faUserMd}>Remote Visit</RaniaConnection>
        <RaniaConnection icon={faHiking}>
          Wireless Fall Detection
        </RaniaConnection>
        <RaniaConnection icon={faDeaf}>
          Natural Language Processor
        </RaniaConnection>
      </ScrollView>
    </React.Fragment>
  );
}
HouseInfoScreen.navigationOptions = {
  title: "House Info",
  header: null
};
