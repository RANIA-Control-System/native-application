import React from "react";
export const fonts = {
  main: {
    brandingFont: "young-serif",
    mainFont: "fengardo-neue"
  },
  dyslexic: {
    brandingFont: "source-serif",
    mainFont: "open-dyslexic"
  }
};

export const GlobalContext = React.createContext(
  fonts.dyslexic // default value
);
