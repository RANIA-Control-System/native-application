import React, { useEffect, useState } from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import { faHiking, faDeaf, faUserMd } from "@fortawesome/free-solid-svg-icons";
import TopBar from "../components/TopBar";
import HouseInfo from "../components/HouseInfo";
import EmergencyContact from "../components/EmergencyContact";
import RaniaConnection from "../components/RaniaConnection";
import { GlobalContext } from "../context/global-context";
import apiUrl from "../constants/dataFetching";

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

export default function HouseInfoScreen(props) {
  const [addressLineOne, setAddressLineOne] = useState("");
  const [addressLineTwo, setAddressLineTwo] = useState("");
  const [emergencyContacts, setEmergencyContacts] = useState([]);
  const [fetchingState, setFetchingState] = useState("fetching");

  useEffect(() => {
    async function fetchHouseInfo() {
      return fetch(apiUrl + "houses/5dc5a9991c9d4400004c1254")
        .then(response => response.json())
        .then(responseJson => {
          let contacts = [];
          responseJson[0].emergencyContacts.forEach(contact => {
            contacts.push(contact);
          });
          setAddressLineOne(responseJson[0].addressLineOne);
          setAddressLineTwo(responseJson[0].addressLineTwo);
          setEmergencyContacts(contacts);
          setFetchingState("fetched");
        })
        .catch(error => {
          console.error(error);
          setFetchingState("offline");
        });
    }
    fetchHouseInfo();
  }, []);
  const EmergencyContactsAsComponents = emergencyContacts.map(
    (contact, index) => <EmergencyContact contact={contact} key={index} />
  );
  return (
    <GlobalContext.Consumer>
      {value => (
        <React.Fragment>
          <TopBar screen={"House Info"} navigation={props.navigation} />
          <ScrollView style={styles.container}>
            <View style={styles.centerView}>
              {fetchingState === "offline" ? (
                <View style={styles.itemContainer}>
                  <Text
                    style={{
                      ...styles.pageText,
                      fontFamily: value.brandingFont
                    }}
                  >
                    You are offline. Please connect to the internet or contact a
                    caretaker for assistance.
                  </Text>
                </View>
              ) : (
                <React.Fragment>
                  <HouseInfo
                    addressLineOne={addressLineOne}
                    addressLineTwo={addressLineTwo}
                  />
                  <Text
                    style={{
                      ...styles.pageText,
                      fontFamily: value.brandingFont
                    }}
                  >
                    Emergency Contacts:
                  </Text>
                  {EmergencyContactsAsComponents}
                </React.Fragment>
              )}

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
            </View>
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
