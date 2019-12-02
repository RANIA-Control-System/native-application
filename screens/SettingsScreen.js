import React, { useState, useEffect } from "react";
import { View, Text, Picker, StyleSheet } from "react-native";
import TopBar from "../components/TopBar";
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
export default function SettingsScreen(props) {
  const [font, setFont] = useState("");
  return (
    <GlobalContext.Consumer>
      {value => (
        <React.Fragment>
          <TopBar screen="Home" navigation={props.navigation} />
          <View style={styles.container}>
            <Text style={{ ...styles.pageText, fontFamily: value.mainFont }}>
              Font settings: {font}
            </Text>
            <Picker
              selectedValue={font}
              style={{ height: 50, width: 300 }}
              onValueChange={itemValue => {
                setFont(itemValue);
              }}
            >
              <Picker.Item label="Classic" value="fengardo-neue" />
              <Picker.Item label="Dyslexia friendly" value="open-dyslexic" />
            </Picker>
          </View>
        </React.Fragment>
      )}
    </GlobalContext.Consumer>
  );
}

SettingsScreen.navigationOptions = {
  title: "app.json",
  header: null
};
