import React, { useState, useEffect } from "react";
import { View, Text, Picker, StyleSheet } from "react-native";
import TopBar from "../components/TopBar";
import Fonts from "../constants/FontSelection";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff"
  },
  pageText: {
    fontSize: 30,
    fontFamily: Fonts.mainFont,
    marginTop: 20,
    marginBottom: 20,
    maxWidth: 600,
    alignSelf: "center"
  }
});
export default function SettingsScreen(props) {
  const [font, setFont] = useState(Fonts.mainFont);
  return (
    <React.Fragment>
      <TopBar screen="Home" navigation={props.navigation} />
      <View style={styles.container}>
        <Text style={styles.pageText}>Font settings: {font}</Text>
        <Picker
          selectedValue={font}
          style={{ height: 50, width: 300 }}
          onValueChange={itemValue => {
            setFont(itemValue);
            Fonts.mainFont = font;
          }}
        >
          <Picker.Item label="Classic" value="fengardo-neue" />
          <Picker.Item label="Dyslexia friendly" value="open-dyslexic" />
        </Picker>
      </View>
    </React.Fragment>
  );
}

SettingsScreen.navigationOptions = {
  title: "app.json",
  header: null
};
