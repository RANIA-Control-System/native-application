import React from "react";
import { Text } from "react-native";

export function FeatureText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "young-serif" }]} />
  );
}
