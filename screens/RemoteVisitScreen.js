import React, { useState, useEffect } from "react";
import { ScrollView, Text, StyleSheet, Animated } from "react-native";

import TopBar from "../components/TopBar";
import VisitLog from "../components/VisitLog";
import UpcomingVisit from "../components/UpcomingVisit";
import ShowViewButton from "../components/ShowViewButton";
import apiUrl from "../constants/dataFetching";

export default function RemoteVisitScreen(props) {
  const [loggedVisits, setLoggedVisits] = useState([]);
  const [upcomingVisit, setUpcomingVisit] = useState({});
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [fadeAnim] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500
    }).start();
    async function fetchVisits() {
      return fetch(apiUrl + "/???")
        .then(response => response.json())
        .then(responseJson => {
          let fetchedLoggedVisits = [];
          let closestUpcoming = {};
          responseJson.visits.forEach(visit => {
            /** if (visit is in the past) **/
            visits.push(visit);
            /** else if (visit is close to the ) */
            closestUpcoming = visit;
          });
          setLoggedVisits(fetchedLoggedVisits);
          setUpcomingVisit(closestUpcoming);
        })
        .catch(error => {
          console.error(error);
        });
    }
    fetchVisits();
  }, [loggedVisits, upcomingVisit]);

  const VisitLogs = loggedVisits.map(visit => <VisitLog visit={visit} />);
  return (
    <React.Fragment>
      <TopBar screen={"Remote Visit"} navigation={props.navigation} />
      <ScrollView style={styles.container}>
        <ShowViewButton text="Request Visit" size="wide">
          <Text style={styles.pageText}>
            To request a visit, open up the remote visit app MORE INFO HERE
          </Text>
        </ShowViewButton>
        <ShowViewButton text="Attend Visit" size="wide">
          <Text style={styles.pageText}>
            To attend visit, open up the remote visit app MORE INFO HERE
          </Text>
        </ShowViewButton>
        <UpcomingVisit date={"Thursday 10/11/19"} time={"2pm"} />
        <Text style={styles.pageText}>Visit History:</Text>
        {VisitLogs}
      </ScrollView>
    </React.Fragment>
  );
}
RemoteVisitScreen.navigationOptions = {
  title: "Remote Visit",
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
