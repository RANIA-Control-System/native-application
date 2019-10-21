import * as WebBrowser from "expo-web-browser";
import React, { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TopBar from "../components/TopBar";
import ModuleItem from "../components/ModuleItem";
import { FeatureText } from "../components/StyledText";

export default function HomeScreen(props) {
  useEffect(() => props.navigation.openDrawer(), []);
  return (
    <React.Fragment>
      <TopBar />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <ModuleItem text="Remote Visit" icon="user-md" />
        <ModuleItem text="Fall Detection" icon="hiking" />
        <ModuleItem text="Natural Language" icon="deaf" />
        <ModuleItem text="Module Name" icon="question-circle" />
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

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes"
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    FlexDirecton: "column",
    justifyContent: "center"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  }
});
