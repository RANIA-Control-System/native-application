import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

import TopBar from "../components/TopBar";
import VisitLog from "../components/VisitLog";
import UpcomingVisit from "../components/UpcomingVisit";
import ShowViewButton from "../components/ShowViewButton";

export default function RemoteVisitScreen() {
  return (
    <React.Fragment>
      <TopBar screen={"Remote Visit"} />
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
        <VisitLog date={"Monday 9/1/19"} time={"1pm"} />
        <VisitLog date={"Monday 9/1/19"} time={"1pm"} />
        <VisitLog date={"Monday 9/1/19"} time={"1pm"} />
        <VisitLog date={"Monday 9/1/19"} time={"1pm"} />
        <VisitLog date={"Monday 9/1/19"} time={"1pm"} />
        <VisitLog date={"Monday 9/1/19"} time={"1pm"} />
        <VisitLog date={"Monday 9/1/19"} time={"1pm"} />
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
    paddingTop: 15,
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
