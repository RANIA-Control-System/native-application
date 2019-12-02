import * as WebBrowser from "expo-web-browser";
import React, { useEffect } from "react";
import { ScrollView, StyleSheet, Text, Dimensions } from "react-native";
import TopBar from "../components/TopBar";
import ModuleItem from "../components/ModuleItem";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    FlexDirecton: "column",
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
  // if (Dimensions.get("window").width > Dimensions.get("window").height)
  //   useEffect(() => props.navigation.openDrawer(), []);

  return (
    <React.Fragment>
      <TopBar screen="Home" navigation={props.navigation} />
      <ScrollView style={styles.container}>
        <ModuleItem text="Remote Visit" icon="user-md" navlocation="Remote" />
        <ModuleItem
          text="Fall Detection"
          icon="hiking"
          navlocation="RemoteVist"
        />
        <ModuleItem
          text="Natural Language"
          icon="deaf"
          navlocation="RemoteVist"
        />
        <ModuleItem text="Settings" icon="cogs" navlocation="Settings" />
        <DevelopmentModeNotice />
      </ScrollView>
    </React.Fragment>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/development-mode/"
  );
}
