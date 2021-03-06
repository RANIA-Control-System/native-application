import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React, { useState } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GlobalContext, fonts } from "./context/global-context";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faUserMd,
  faHiking,
  faDeaf,
  faQuestionCircle,
  faClipboardList,
  faCalendar,
  faClock,
  faNotesMedical,
  faArchive,
  faRing,
  faPhone,
  faBirthdayCake,
  faUser,
  faFile,
  faBars,
  faHome,
  faLink,
  faCogs
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faUserMd,
  faHiking,
  faDeaf,
  faQuestionCircle,
  faClipboardList,
  faCalendar,
  faClock,
  faNotesMedical,
  faArchive,
  faRing,
  faPhone,
  faBirthdayCake,
  faUser,
  faFile,
  faBars,
  faHome,
  faLink,
  faCogs
);
import AppNavigator from "./navigation/AppNavigator";

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [font, setFont] = useState(fonts.main);
  changeFont = () => {
    setFont(font === fonts.main ? fonts.dyslexic : fonts.main);
  };
  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <GlobalContext.Provider value={font} changeFont={changeFont}>
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      </GlobalContext.Provider>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require("./assets/images/robot-dev.png"),
      require("./assets/images/robot-prod.png")
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      "young-serif": require("./assets/fonts/YoungSerif-Regular.otf"),
      "source-serif": require("./assets/fonts/SourceSerifPro-Regular.otf"),
      "fengardo-neue": require("./assets/fonts/FengardoNeue_Regular.otf"),
      "open-dyslexic": require("./assets/fonts/OpenDyslexic-Regular.otf")
    })
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
