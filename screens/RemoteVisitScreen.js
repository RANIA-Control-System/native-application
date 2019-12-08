import React, { useState, useEffect } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { GlobalContext } from "../context/global-context";

import TopBar from "../components/TopBar";
import VisitLog from "../components/VisitLog";
import UpcomingVisit from "../components/UpcomingVisit";
import ShowViewButton from "../components/ShowViewButton";
import apiUrl from "../constants/dataFetching";
import Colors from "../constants/Colors";

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "white",
    maxWidth: 600,
    margin: 10,
    padding: 20,
    paddingTop: -10,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 2,
    borderColor: Colors.primaryColor,
    borderRadius: 7,
    shadowColor: "black",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
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
    marginBottom: 5,
    maxWidth: 600,
    alignSelf: "center"
  }
});

export default function RemoteVisitScreen(props) {
  const [loggedVisits, setLoggedVisits] = useState([
    undefined,
    undefined,
    undefined,
    undefined
  ]);
  const [upcomingVisit, setUpcomingVisit] = useState(undefined);
  const [fetchingState, setFetchingState] = useState("fetching");

  useEffect(() => {
    async function fetchVisits() {
      return fetch(apiUrl + "remoteVisits/5dc5a9991c9d4400004c1254")
        .then(response => response.json())
        .then(responseJson => {
          let fetchedLoggedVisits = [];
          let closestUpcoming = null;
          let fetchedDateAsDate;
          let currentDate = new Date();

          responseJson.forEach(visit => {
            fetchedDateAsDate = new Date(visit.date);
            if (fetchedDateAsDate < currentDate) {
              fetchedLoggedVisits.push(visit);
            } else if (closestUpcoming === {}) {
              closestUpcoming = visit;
            } else if (fetchedDateAsDate < Date(closestUpcoming.visit.date)) {
              closestUpcoming = visit;
            }
          });
          setLoggedVisits(
            fetchedLoggedVisits.sort(function(a, b) {
              return new Date(b.date) - new Date(a.date);
            })
          );
          setUpcomingVisit(closestUpcoming);
          setFetchingState("fetched");
        })
        .catch(error => {
          console.error(error);
          setFetchingState("offline");
        });
    }
    fetchVisits();
  }, []);

  const VisitLogs = loggedVisits.map((visit, index) => (
    <VisitLog visit={visit} key={index} />
  ));
  return (
    <GlobalContext.Consumer>
      {value => (
        <React.Fragment>
          <TopBar
            screen={"Remote Visit"}
            navigation={props.navigation}
            wasDrawerOpen={props.navigation.state.isDrawerOpen}
          />
          <ScrollView style={styles.container}>
            <View style={styles.centerView}>
              <ShowViewButton text="Request Visit" size="wide">
                <Text
                  style={{ ...styles.pageText, fontFamily: value.brandingFont }}
                >
                  To request a visit, open up the remote visit app.
                </Text>
              </ShowViewButton>
              <ShowViewButton text="Attend Visit" size="wide">
                <Text
                  style={{ ...styles.pageText, fontFamily: value.brandingFont }}
                >
                  To attend visit, open up the remote visit app.
                </Text>
              </ShowViewButton>
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
                  <UpcomingVisit visit={upcomingVisit} />
                  <Text
                    style={{
                      ...styles.pageText,
                      fontFamily: value.brandingFont
                    }}
                  >
                    Visit History:
                  </Text>
                  {VisitLogs}
                </React.Fragment>
              )}
            </View>
          </ScrollView>
        </React.Fragment>
      )}
    </GlobalContext.Consumer>
  );
}
RemoteVisitScreen.navigationOptions = {
  title: "Remote Visit",
  header: null
};
