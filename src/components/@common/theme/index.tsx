import { DefaultTheme } from "react-native-paper";

// To know what colors and variables can be overwritten, go here => https://callstack.github.io/react-native-paper/theming.html

export const colors = {
  ...DefaultTheme.colors,
  // custom colors
};

export const theme = {
  ...DefaultTheme,
  colors,
  // additinal theme customizations
};
